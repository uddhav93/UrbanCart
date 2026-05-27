import React, { useState } from 'react'

function Counter() {
    let [count,setCount]=useState(0);
    function inc()
    {
        setCount(c=>c+1);
    }
    function dec()
    {
        setCount(c=>c>0?c-1:0);
    }
  return (
    <>
        <div className="d-flex justify-content-center gap-4">
            <button className="btn btn-success" onClick={inc}>+</button>
            <span>{count}</span>
            <button className="btn btn-danger" onClick={dec}>-</button>
        </div>
    </>
  )
}

export default Counter
