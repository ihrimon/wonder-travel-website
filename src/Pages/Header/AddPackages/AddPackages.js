import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddPackages.css';

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
        <div className="container w-25 shadow-lg my-5">
            <h4 className="text-center py-4">Add Package</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Package Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" {...register("name")} placeholder="package title here" required />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" {...register("description")} placeholder="some text here" rows="3" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" {...register("price")} placeholder="$ price" required />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                    <input class="form-control" id="exampleFormControlInput1" {...register("img")} placeholder="image url" required />
                </div>

                <input type="submit" className="btn btn-success #e8604c w-75 text-center" />
            </form>
        </div>
    );
};

export default AddPackages;