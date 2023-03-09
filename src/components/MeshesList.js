import React, { useContext } from 'react'
import MeshesContext from '../MeshesContext'
import ListItem from './ListItem'

const MeshesList = () => {
  const { meshes } = useContext(MeshesContext)
  return (
    <div className="meshes-list">
      {meshes.map((mesh) => (
        <ListItem key={mesh.id} mesh={mesh} />
      ))}
    </div>
  )
}

export default MeshesList
