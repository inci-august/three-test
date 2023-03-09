import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import CreateForm from './components/CreateForm'
import MeshesList from './components/MeshesList'
import Scene from './components/Scene'
import MeshesContext from './MeshesContext'

function App() {
  const [meshes, setMeshes] = useState([])

  const addNewMesh = (newMesh) => {
    setMeshes([...meshes, newMesh])
  }

  const deleteMesh = (id) => {
    setMeshes(meshes.filter((mesh) => mesh.id !== id))
  }

  return (
    <MeshesContext.Provider value={{ meshes, addNewMesh, deleteMesh }}>
      <Canvas>
        <Scene />
      </Canvas>
      <CreateForm />
      <MeshesList />
    </MeshesContext.Provider>
  )
}

export default App
