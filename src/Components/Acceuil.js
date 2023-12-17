import React from 'react'
import Promos from './Toppromos/Promos'
import Categori from './Toppromos/Categories'

const Acceuil = ({data}) => {
  console.log(data)
  return (
    <div>
     <Promos  data={data}/>
    <Categori />
    </div>
  )
}

export default Acceuil