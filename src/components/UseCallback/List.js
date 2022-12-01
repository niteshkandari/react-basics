import React, { useState, useEffect } from 'react'

const List = ({getItem}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItem());
    console.log("list component rendered")
  }, [getItem])

  return (
    <>
    {items.map((item,idx) => <p key={idx}>{item}</p>)}
    </>
  )
}

export default List