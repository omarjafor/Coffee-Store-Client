

const AddManager = () => {

    const handleAddManager = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const salary = e.target.salary.value;
        const date = e.target.date.value;
        const details = e.target.details.value;

        const manager = { name, email, password, salary, date, details, photo }

        fetch('https://coffee-store-server-n715s62ht-omarjafor.vercel.app/managers', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(manager)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Manager</h2>
            <form onSubmit={handleAddManager}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Manager Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Manager Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Manager Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Manager Email" className="input input-bordered w-full" />
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
                            <input type="text" name="password" placeholder="Manager Password" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Salary</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="salary" placeholder="Salary" className="input input-bordered w-full" />
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
                            <input type="text" name="date" placeholder="Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-700 text-white hover:text-black" />

            </form>
        </div>
    );
};

export default AddManager;