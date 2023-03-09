import { useContext, useState } from 'react'
import { generateUUID } from 'three/src/math/MathUtils'
import MeshesContext from '../MeshesContext'

function CreateForm() {
  const [geometry, setGeometry] = useState('')
  const [scale, setScale] = useState('')
  const { addNewMesh } = useContext(MeshesContext)

  const onCreate = () => {
    let id = generateUUID()
    addNewMesh({ geometry, scale, id })
    setGeometry('')
    setScale('')
  }

  return (
    <div className="overlay">
      <select value={geometry} onChange={(e) => setGeometry(e.target.value)}>
        <option>Geometry</option>
        <option value="box">Box</option>
        <option value="sphere">Sphere</option>
        <option value="torus">Torus</option>
        <option value="octahedron">Octahedron</option>
        <option value="tetrahedron">Tetrahedron</option>
        <option value="icosahedron">Icosahedron</option>
      </select>

      <input
        type="number"
        value={scale}
        onChange={(e) => setScale(e.target.value)}
        placeholder="Scale"
      />

      <button onClick={onCreate} disabled={!geometry || !scale || scale < 1}>
        CREATE
      </button>
    </div>
  )
}

export default CreateForm
