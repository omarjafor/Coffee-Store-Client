import { useLoaderData } from "react-router-dom";


const Managers = () => {

    const managers = useLoaderData();

    const handleDelete = id => {
        console.log(id);
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
                            managers.map(manage => <tr key={manage._id}>
                                <th>1</th>
                                <td>{manage.name}</td>
                                <td>{manage.email}</td>
                                <td>{manage.password}</td>
                                <td>{manage.salary}</td>
                                <td>{manage.date}</td>
                                <td>
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