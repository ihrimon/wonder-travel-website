import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { packageId } = useParams();
    const [singlePackage, setSinglePackage] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://evening-brushlands-52503.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, [])

    const onSubmit = data => {
        fetch('https://evening-brushlands-52503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };

    return (

        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <img height="300px" src={singlePackage.img} alt="" /><br />
                        <h3 className="theme-color mt-3 fw-bold">{singlePackage.name}</h3>
                        <h5>Tour Charge: {singlePackage.price} Rs.</h5>
                        <p>{singlePackage.description}</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="shadow-lg">
                            <h3 className="text-center pt-5 pb-3 theme-color">Order your Favorite Package</h3>
                            <div className="text-start px-0 px-lg-5">
                                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={user.displayName} {...register("name", { required: true })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Email</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue={user.email} {...register("email", { required: true })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={singlePackage.name} {...register("title", { required: true })} placeholder="Package title" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Package Price</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" defaultValue={singlePackage.price} {...register("price", { required: true })} placeholder="$ price" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">User Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address", { required: true })} placeholder="User address" />
                                    </div>

                                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                                        <input type="submit" className="btn theme-btn w-100 text-center" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;