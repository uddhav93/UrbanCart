import React, { useEffect, useState } from 'react'
import './../assets/css/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Home() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    async function getData()
    {
        try {
                  let res= await axios.get('http://localhost:5000/api/v1/products');
                  //setData(res.data);
                  let products=res.data;
                  setData(products.data);
        } catch (error) {
          console.error("the error is:",error.message)
        }
    }
    getData()
  },[])
  return (
    <>
      <section className='hero-style'>
        <div className='sect'>
          <h1>UrbanCart</h1>
          <h4 className='text-white'>Your one stop place for groceries</h4>
          <Link to='/product'><button className="btn btn-primary text-white">Shop here</button></Link>
        </div>
      </section>
      <br />
       <section className="conatiner-fluid px-3">
        <div className="row">
            {
              data.slice(0,4).map((p)=>(
                <div className="col-sm-3" key={p._id}>
                  <div className="card">
                    <div className="card-header">
                      <h3>{p.pname}</h3>
                    </div>
                    <div className="card-body">
                      <h4>Price:{p.price}</h4>
                      <p>{p.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </section>
      <br />
    </>
  )
}

export default Home
