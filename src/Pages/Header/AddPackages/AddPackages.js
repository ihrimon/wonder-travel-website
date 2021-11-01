import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddPackages = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://evening-brushlands-52503.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added')
                    reset();
                }
            })
    }
    return (
        <div className="container w-lg-25 shadow-lg my-5">
            <h4 className="text-center py-4">Add Package</h4>
            <div className="text-start">
                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Package Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} placeholder="package title here" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("description")} placeholder="some text here" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" {...register("price")} placeholder="$ price" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Price</label>
                        <input className="form-control" id="exampleFormControlInput1" {...register("img")} placeholder="image url" required />
                    </div>

                    <span className="w-50 mx-auto" style={{ display: "block" }}>
                        <input type="submit" className="btn theme-btn w-100 text-center " />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddPackages;