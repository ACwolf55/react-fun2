import React, { useEffect } from 'react'
import Button from './Button'

export default function SearchBar(name,num) {

useEffect(()=>{
  console.log(name,num)
})

  return (
    <div className='search-bar'>
    <p>sdfsdf</p>
    <p>{num}</p>
    <p>{name}</p>
    <input></input>
    <Button name={name}/>
    <Button name={name}/>
    </div>
  )
}
