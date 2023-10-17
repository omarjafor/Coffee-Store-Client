import { useLoaderData } from "react-router-dom";


const UpdateManager = () => {
    const manager = useLoaderData();
    const { _id, name, email, password, salary, date, details, photo } = manager;

    const handleUpdateManager = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const salary = e.target.salary.value;
        const date = e.target.date.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;

        const updatedManager = { name, email, password, salary, date, details, photo }

        fetch(`http://localhost:5000/managers/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedManager)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update a Manager</h2>
            <form onSubmit={handleUpdateManager}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Manager Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Manager Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Manager Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" defaultValue={email} placeholder="Manager Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Manager Password</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="password" defaultValue={password} placeholder="Manager Password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Salary</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary" defaultValue={salary} placeholder="Salary" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Joining Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="date" defaultValue={date} placeholder="Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-gray-700 text-white hover:text-black" />

            </form>
        </div>
    );
};

export default UpdateManager;