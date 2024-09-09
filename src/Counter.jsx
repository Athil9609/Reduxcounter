import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,add } from './Redux/counterSlice';


function Counter() {
  const count=useSelector((state)=>state.counterReducer.counter)
  console.log(count);

  const [num,setNum]=useState(0)

  const dispatch=useDispatch()
  
  return (
    <>
<div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
       <div className='w-75  p-5 shadow'>
        <div className='ms-4'>
            <h1 className='text-center text-primary'>Counter</h1>
            <h2 className='text-center'>{count}</h2>
        </div>
        <div className='d-flex justify-content-around mt-5'>
             <button onClick={()=>{dispatch(increment())}} className='btn btn-outline-success'>+ Increment</button>
             <button onClick={()=>{dispatch(decrement())}} className='btn btn-outline-danger'>- Decrement</button>
             <button onClick={()=>{dispatch(reset())}} className='btn btn-outline-primary'>Reset</button>

           
        </div>
        <div className='d-flex mt-5'>
               <input type="number" className='form-control' onChange={(e)=>{setNum(e.target.value)}} />
               <button className='btn btn-outline-info' onClick={()=>{dispatch(add(num))}}>count</button>
            </div>
         </div>
    
</div>    </>
  )
}

export default Counter