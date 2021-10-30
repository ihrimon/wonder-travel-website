import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';


const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data =>{
        fetch('http://localhost:4000/orders', {
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
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input defaultValue={user.name} {...register("title")} />
            <input defaultValue={user.price} {...register("price")} />
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <input type="submit" />
        </form>
    );
};

export default Booking;




/* import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Registration.css';

const Registration = () => {

    const {id} = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth();

    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [useraddress, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    useEffect(() =>{
        fetch(`https://powerful-tor-47395.herokuapp.com/registration/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    const handleRegister = (e) =>{
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = useraddress;
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