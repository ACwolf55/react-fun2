import React,{useState} from 'react'

export default function Button(name) {


  return (
    <div className='button'>
    <button onClick={()=>setNum(10)}>click me</button>
    <p>{name}</p>
    <span id='somethng'>sdfadfgdf</span>
    <p>num</p>
    </div>
  )
}
