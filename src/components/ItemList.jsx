import React from 'react'
import ListItem from './ListItem'
const itemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <ListItem item={item} handleCheck={handleCheck} handleDelete={handleDelete} key={item.id} />
        ))}
      </ul>
  )
}

export default itemList
