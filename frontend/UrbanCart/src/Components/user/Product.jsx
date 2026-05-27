import React, { useEffect, useState } from 'react'
import Counter from './Counter';

function Product() {
    let [data,setData]=useState([]);
    async function getData()
    {
        let res=await fetch('http://localhost:5000/api/v1/products');
        let products=await res.json();
        setData(products.data);
    }
    useEffect(()=>{
        getData();
    },[]);
  return (
    <>
      <section className="container-fluid mt-3">
        <div className="row">
            {
                data.map((p)=>(
                    <div className="col-sm-4 mb-4" key={p._id}>
                        <div className="card">
                            <div className="card-header">
                                <h3>{p.pname}</h3>
                            </div>
                            <div className="card-body">
                                <h2>Price:{p.price}</h2>
                                <p>{p.description}</p>
                            </div>
                            <div className="card-footer">
                                <Counter/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </section>
    </>
  )
}

export default Product
