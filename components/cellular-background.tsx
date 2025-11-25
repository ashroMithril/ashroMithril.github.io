"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

const CellularShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#ffffff") },
        uColor2: { value: new THREE.Color("#f97316") }, // Orange-500
        uColor3: { value: new THREE.Color("#000000") },
        uDensity: { value: 10.0 },
        uSpeed: { value: 0.1 },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform float uDensity;
    uniform float uSpeed;
    varying vec2 vUv;

    // Pseudo-random function
    vec2 random2(vec2 p) {
      return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
    }

    void main() {
      vec2 st = vUv * uDensity;
      
      // Animate coordinate space to create "infinite" movement
      st.x += uTime * uSpeed * 0.5;
      st.y += uTime * uSpeed * 0.3;

      vec3 color = uColor1;

      // Tile the space
      vec2 i_st = floor(st);
      vec2 f_st = fract(st);

      float m_dist = 1.0;  // Minimum distance

      // Iterate through neighbors to find the closest point (Voronoi)
      for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
          vec2 neighbor = vec2(float(x),float(y));
          vec2 point = random2(i_st + neighbor);

          // Animate the point
          point = 0.5 + 0.5*sin(uTime * 0.5 + 6.2831*point);

          vec2 diff = neighbor + point - f_st;
          float dist = length(diff);

          // Keep the closer distance
          m_dist = min(m_dist, dist);
        }
      }

      // Draw the cells
      // Invert distance to make center of cells bright/colored
      float intensity = pow(1.0 - m_dist, 3.0);
      
      // Mix colors based on intensity
      // Background is mostly Color1 (White/Light), Cells are Color2 (Orange) or Color3 (Dark)
      vec3 cellColor = mix(uColor3, uColor2, 0.5 + 0.5*sin(uTime));
      color = mix(uColor1, cellColor, intensity * 0.15); // Keep it subtle

      // Add some noise/grain for texture
      float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
      color += noise * 0.03;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

function CellularPlane() {
    const mesh = useRef<THREE.Mesh>(null)
    const { size } = useThree()

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color("#ffffff") }, // Background
            uColor2: { value: new THREE.Color("#f97316") }, // Cell Accent (Orange)
            uColor3: { value: new THREE.Color("#e5e5e5") }, // Cell Edge (Light Gray)
            uDensity: { value: 8.0 },
            uSpeed: { value: 0.2 },
        }),
        []
    )

    useFrame((state) => {
        if (mesh.current) {
            (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime()
        }
    })

    return (
        <mesh ref={mesh} scale={[size.width, size.height, 1]}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={CellularShaderMaterial.vertexShader}
                fragmentShader={CellularShaderMaterial.fragmentShader}
            />
        </mesh>
    )
}

export default function CellularBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <CellularPlane />
                </Canvas>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
