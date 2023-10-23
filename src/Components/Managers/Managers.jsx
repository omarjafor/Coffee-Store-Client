import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Managers = () => {

    const managersLoaded = useLoaderData();

    const handleDelete = id => {
        fetch(`https://coffee-store-server-n715s62ht-omarjafor.vercel.app/managers/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                const remaining = managers.filter(mng => mng._id !== id);
                setManagers(remaining);
            }
        })
    }

    return (
        <div>
            <h2>Users: {managers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Salary</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="list-decimal">
                        {
                            managers?.map((manage, index) => <tr key={manage._id}>
                                <th>{index+1}</th>
                                <td>{manage.name}</td>
                                <td>{manage.email}</td>
                                <td>{manage.password}</td>
                                <td>{manage.salary}</td>
                                <td>{manage.date}</td>
                                <td>
                                    <Link to={`/updatemanager/${manage._id}`}>
                                        <button className="btn">Edit</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(manage._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Managers;