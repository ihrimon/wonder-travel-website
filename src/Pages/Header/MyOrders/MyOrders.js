import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setServices] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // CANCEL ORDER
    const handleCancelOrder = id => {
        const url = `http://localhost:4000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = myOrders.filter(order => order._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3">My Orders</h2>
            <h4>{user.displayName}</h4>
            <table class="table border table-hover">
                <thead>
                    <tr>
                        <th className="text-start">SL.</th>
                        <th className="text-start">Name</th>
                        <th className="text-start">Email</th>
                        {/* <th className="text-start">Reg. Date</th> */}
                        <th className="text-start">Address</th>
                        <th className="text-start">Service</th>
                        <th className="text-start">Amount</th>
                        <th className="text-start">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((MyOrder, index) =>
                            <tr key={MyOrder._id}>
                                <th className="text-start" scope="row">{index + 1}</th>
                                <td className="text-start">{MyOrder.name}</td>
                                <td className="text-start">{MyOrder.email}</td>
                                <td className="text-start">{MyOrder.address}</td>
                                <td className="text-start">{MyOrder.title}</td>
                                <td className="text-start">{MyOrder.price}</td>
                                <td className="text-start">
                                    <button className="btn btn-sm btn-success">Approve</button>
                                </td>
                                {
                                    MyOrder.status === 'Pending' ? <td className="text-danger fw-bold">{MyOrder.status}</td> : <td className="text-success fw-bold">{MyOrder.status}</td>
                                }
                                <td><button onClick={() => handleCancelOrder(MyOrder._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;