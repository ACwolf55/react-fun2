import axios from 'axios'
import React,{useEffect,useState} from 'react'
import axios from 'axios'

export const DashBoard = (props) => {

    const [kangaroo,setKangaroo] =useState([])

    // props={
    //     arr={arr} num={num} jetplane={0} lding={loading}
    // }

useEffect(()=>{
    console.log(props)
    axios.get('/kangaroo/APi').then((res)=>{
        console.log(res.data)
        setKangaroo(res.data)
    })

},[])

  return (
    <div className='dashboard'>



    {kangaroo.length==0? <p>Loading</p> :
    
    <div className='karong-map'>
   {kangaroo.map((item)=>{
        return(
            <div className='single-kargoo-info'>
                <p>{item.name}</p>
                <p>{item.habitat}</p>
                <p>{item.vert}</p>
            </div>
        )
    })}
    </div>
    }

    <p>{props.arr[1]}</p>

    </div>
  )
}
