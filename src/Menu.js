import React, {useState,useEffect} from 'react'

export default function Menu(props) {

  props = {
    animal:{name:'dog',color:"blue"},
    loading:true,
    string:'string'
  }



  const [name, setname] = useState('wlarus') - react
  const [arr,setArr]= useState([{name:'pasta',price:5}])

  const [x,y] = useState(z)

  const animation =()=>{
    //bunch asdasdadsd
  }

  
  useEffect(()=>{
    console.log(props)
    axios.get('./getMenu').then((res)=>{
      console.log(res.data)
      setArr(res.data)
    })
  },[])

  [{name:'pasta',
    price:5},
{name:'cake',
price:100},
  {name:'subsanwhich',
price:4}]


  return (
    <div className='Menu'>
       <p>Menu</p>

        {arr.map((item)=>{
         return(
           <div>
            <p>{item.name}</p> 
            <p>{item.price}</p>
           </div>
       )}}
      
        )
       
       <input onchange={e=>setname(e.target.value)}>wlarus
       </input>
       <p>{name}</p>
       <p>{props.loading}</p>
       <p>{props.animal.name}</p>

       <Itemsfeedback/>

        </div>
  )
}
