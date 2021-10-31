/* import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';


const Booking = () => {
    const { reset} = useForm();
    const { user } = useAuth();
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    const handleOrderSubmit = e => {
        e.preventDefault();
        e.preventDefault();
        const userName = user.displayName;
        const email = user.email;
        const address = user.address;
        const date = regDate
        const title = service.name;
        const charge = price.charge;
        const status = 'Pending';

        const regService = {userName, email, date, address, title, charge, status};

        fetch('https://evening-brushlands-52503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(regService)
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
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
                        <img height="300px" width="300px" src={service.image} alt="" /><br />
                        <h3>{service.name}</h3>
                        <h5>Shipping Charge: {service.charge} Rs.</h5>
                        <p>{package.description}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="container mb-4 registration">
                            <h2 className="mb-3 text-center"><span style={{ color: "#ED1C24" }}>Registration</span> Service</h2>
                            <div className="form">
                                <form onSubmit={handleOrderSubmit}>
                                    <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Your Name" defaultValue={user.displayName} required /><br /><br />
                                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" defaultValue={user.email} required /><br /><br />
                                    <input type="text" placeholder="Package title" defaultValue={'title.name'} /><br /><br />
                                    <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" /><br /><br />
                                    <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                                    <input type="number" placeholder="Package Price" defaultValue={'price.charge'} /><br /><br />
                                    <button className="btn btn-success" type="submit">Submit</button>
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
 */



/* import React from 'react';
import swal from 'sweetalert';

const Registration = () => {
    const [service, setService] = useState({});
    const {user} = useAuth();
    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [useraddress, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    const handleRegister = (e) =>{
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = user.address;
        const date = regDate
        const title = service.name;
        const charge = service.charge;
        const status = 'Pending';

        const regService = {name, email, date, address, title, charge, status};
        swal({
            title: "Are you sure?",
            text: "Registration for this service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willConfirm) => {
            if (willConfirm) {
                fetch('https://powerful-tor-47395.herokuapp.com/registration', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(regService)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        swal("Good!", "Registration Successful!", "success");
                        e.target.reset();
                    }
                })
            } else {
              swal("Your Registration Cancel");
              e.target.reset();
            }
          });
    }

    return (
        <div>
            <Header />
            <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
                    <img height="300px" width="300px" src={service.image} alt="" /><br />
                    <h3>{service.name}</h3>
                    <h5>Shipping Charge: {service.charge} Rs.</h5>
                    <p>{service.description}</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="container mb-4 registration">
                <h2 className="mb-3 text-center"><span style={{color: "#ED1C24"}}>Registration</span> Service</h2>
                    <div className="form">
                        <form onSubmit={handleRegister}>
                            <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user.displayName} required /><br /><br />
                            <input onBlur={(e) => setUseremail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br /><br />
                            <input type="text" placeholder="Service title" defaultValue={service.name} /><br /><br />
                            <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" /><br /><br />
                            <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                            <input type="number" placeholder="Delivery Charge" defaultValue={service.charge} /><br /><br />
                        <button className="btn addBtn" type="submit">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration; */




/* import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
    const { packageId } = useParams();
    const { reset} = useForm();
    const [service, setService] = useState({});
    const { user } = useAuth();

    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userAddress, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    useEffect(() => {
        fetch(`https://powerful-tor-47395.herokuapp.com/registration/${packageId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleRegister = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = userAddress;
        const date = regDate
        const title = name.name;
        const charge = service.charge;
        const status = 'Pending';

        const regService = { name, email, date, address, title, charge, status };

        fetch('https://evening-brushlands-52503.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(regService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5">
                        <img height="300px" width="300px" src={service.image} alt="" /><br />
                        <h3>{service.name}</h3>
                        <h5>Shipping Charge: {service.charge} Rs.</h5>
                        <p>{service.description}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="container mb-4 registration">
                            <h2 className="mb-3 text-center"><span style={{ color: "#ED1C24" }}>Registration</span> Service</h2>
                            <div className="form">
                                <form onSubmit={handleRegister}>
                                    <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user.displayName} required /><br /><br />
                                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br /><br />
                                    <input type="text" placeholder="Service title" defaultValue={service.name} /><br /><br />
                                    <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                                    <input type="number" placeholder="Delivery Charge" defaultValue={service.charge} /><br /><br />
                                    <button className="btn addBtn" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking; */



import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';


const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

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
                <div className="w-50 mx-auto shadow-lg">
                    <h3 className="text-center mt-5 pt-5 pb-3 theme-color">Please, Order your favorite package</h3>
                    <div className="text-start px-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" defaultValue={user.displayName} {...register("name", { required: true })} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" defaultValue={user.email} {...register("email", { required: true })} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Package Title</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" defaultValue={user.name} {...register("title", { required: true })} placeholder="Package title" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Package Price</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" defaultValue="" {...register("price", { required: true })} placeholder="$ price" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" defaultValue="" {...register("address", { required: true })} placeholder="User address" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" defaultValue="" {...register("number", { required: true })} placeholder="number" />
                            </div>

                            <span className="w-50 mx-auto" style={{display: "block"}}>
                            <input type="submit" className="btn theme-btn w-100 text-center " />
                            </span>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Booking;