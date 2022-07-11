import React from 'react'

export default function Menu(props) {

  const [name, setname] = useState('asd')

  return (
    <div className='Menu'>
       <p>Menu</p> 
       <button onClick={function}>start</button>
       <p>{props.Appname}</p>
       <p>{props.x}</p>
        </div>
  )
}
