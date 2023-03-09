import { useContext } from 'react'
import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import MeshesContext from '../MeshesContext'
import Mesh from './Mesh'
extend({ OrbitControls })

const Scene = () => {
  const { camera, gl } = useThree()
  const { meshes } = useContext(MeshesContext)

  return (
    <>
      <directionalLight position={[-1, 1, 1]} intensity={3} />
      {meshes.map((mesh) => (
        <Mesh key={mesh.id} scale={mesh.scale} geometry={mesh.geometry} />
      ))}
      <mesh rotation-x={-Math.PI * 0.5} scale={16} position-y={-3}>
        <planeGeometry />
        <meshBasicMaterial color="#a9a9a9" />
      </mesh>
      <orbitControls args={[camera, gl.domElement]} />
    </>
  )
}

export default Scene
