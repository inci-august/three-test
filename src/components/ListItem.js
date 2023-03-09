import React, { useContext } from 'react'
import MeshesContext from '../MeshesContext'

const ListItem = ({ mesh }) => {
  const { deleteMesh } = useContext(MeshesContext)

  return (
    <div className="meshes-list__item">
      {mesh.id}{' '}
      <div onClick={() => deleteMesh(mesh.id)} className="delete-button">
        x
      </div>
    </div>
  )
}

export default ListItem
