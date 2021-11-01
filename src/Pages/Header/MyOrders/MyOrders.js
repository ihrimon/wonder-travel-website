import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    const email = user.email

    useEffect(() => {
        axios.post("https://evening-brushlands-52503.herokuapp.com/orders/email", { email: `${email}` })
            .then(res => setMyOrders(res.data));
    }, [])



    // CANCEL ORDER
    const handleCancelOrder = id => {
        swal({
            title: "Are you sure?",
            text: "Cancel for this order.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://evening-brushlands-52503.herokuapp.com/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Deleted Successfully!", "success");
                            }
                        })
                } else {
                    swal("Delete Canceled!");
                }
            });
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3 text-center">My Orders</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead>
                        <tr>
                            <th className="text-start">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Address</th>
                            <th className="text-start">Service</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) =>
                                <tr key={myOrder._id}>
                                    <th className="text-start" scope="row">{index + 1}</th>
                                    <td className="text-start">{myOrder.name}</td>
                                    <td className="text-start">{myOrder.email}</td>
                                    <td className="text-start">{myOrder.address}</td>
                                    <td className="text-start">{myOrder.title}</td>
                                    <td className="text-start">$ {myOrder.price}</td>
                                    {
                                        myOrder.status === 'Pending' ? <td className="text-danger fw-bold">{myOrder.status}</td> : <td className="text-success fw-bold">{myOrder.status}</td>
                                    }
                                    <td><button onClick={() => handleCancelOrder(myOrder._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;