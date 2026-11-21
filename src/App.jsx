import React, { useState } from 'react'
import { X } from 'lucide-react';


const App = () => {

  const [title, setTitle] = useState('')
  const [det, setDet] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
     
    const copyTask=[...task]

    copyTask.push({title,det})
    setTask(copyTask)

    setTitle('');
    setDet('')
  }

  const delNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white  '>
  

    <form onSubmit={(e)=>{
      submitHandler(e);
    }} className='flex lg:w-1/2 gap-5 items-start flex-col p-10  '>

    <h1 className='text-3xl font-bold'>Add notes</h1>

    <input type="text"
    placeholder='Enter Notes Heading'
    className='px-5 w-full outline-none py-2 border-2 rounded font-medium'
    value={title}
    onChange={(e)=>{
    setTitle(e.target.value)
    }}
    />

    <textarea
    placeholder='write  details here'
    className='px-5  w-full h-34 py-2 outline-none border-2 font-medium rounded'
    value={det}
    onChange={(e)=>{
      setDet(e.target.value)
    }}
    />

    <button className='bg-white active:scale-95  text-black w-full px-5 py-2 font-medium outline-none rounded'>Add note</button>

  </form>
     
     <div className='  lg:w-1/2 p-7 lg:border-l-2 '>
     <h1 className='text-4xl font-bold'>Recent notes</h1>
       <div className='flex flex-wrap item-start justify-start gap-5 mt-5 h-[90%] overflow-auto '>
        {task.map(function(elem,idx){
          return <div key={idx} className='flex justify-between flex-col item-start relative h-53 w-40 rounded-2xl pt-10 py-4 px-4 bg-cover bg-[url("https://gallery.yopriceville.com/downloadfullsize/send/14426")] text-black p-4'>
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sxs font-semibold text-gray-700'>{elem.det}</p>
            </div>
            <button onClick={()=>{
                delNote(idx);
            }} className='w-full active:scale-95 bg-red-500
             text-white py-1 text-xs rounded font-bold'>Delete</button>
          </div>;
        })}
        
       </div>
     </div>
</div>
  )
}

export default App