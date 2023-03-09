import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Mesh = ({ geometry, scale }) => {
  const ref = useRef()

  const [position] = useState({
    x: Math.random() * (6 - -6) + -6,
    y: Math.random() * (3 - -1) + -1,
    z: Math.random() * (3 - -8) + -8,
  })

  useFrame((_, delta) => {
    ref.current.rotation.y += delta
  })

  let geometryComponent

  switch (geometry) {
    case 'box':
      geometryComponent = <boxGeometry />
      break
    case 'sphere':
      geometryComponent = <sphereGeometry />
      break
    case 'torus':
      geometryComponent = <torusGeometry />
      break
    case 'octahedron':
      geometryComponent = <octahedronGeometry />
      break
    case 'tetrahedron':
      geometryComponent = <tetrahedronGeometry />
      break
    case 'icosahedron':
      geometryComponent = <icosahedronGeometry />
      break
    default:
      geometryComponent = null
  }

  return (
    <mesh ref={ref} scale={scale} position={[position.x, position.y, position.z]}>
      {geometryComponent}
      <meshPhongMaterial color="#aaaaaa" />
    </mesh>
  )
}

export default Mesh
