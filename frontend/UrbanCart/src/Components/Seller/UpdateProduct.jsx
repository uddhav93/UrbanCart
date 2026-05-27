import React from 'react'

function UpdateProduct() {
    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 m-auto">
                        <div className="card">
                            <div className="card-header">
                                <h3 className='card-title text-center'>Update Product</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <label className='form-label'>Product name</label>
                                    <input type="text" className='form-control mb-3' placeholder='enter product name' />
                                    <br />
                                    <label className='form-label'>Price</label>
                                    <input type="number" className='form-control mb-3' placeholder='enter price of product' />
                                    <br />
                                    <label className='form-label'>Description</label>
                                    <textarea className='form-control mb-3' placeholder='enter product description'></textarea>
                                    <div className="form-check mb-3">
                                        <input type="checkbox" name="agree" className='form-check-input' id='agree' />
                                        <label className='form-check-label'>I agree to termas and conditions</label>
                                    </div>
                                    <button className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdateProduct
