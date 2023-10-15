import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";


const Home = () => {
    
    const coffeesLoaded = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesLoaded);

    return (
        <div className="m-10">
            <div> <h1 className="text-3xl font-bold underline">Coffee Store Client</h1></div>
            <h2 className="text-2xl font-bold">Total Coffee in the Menus : {coffeesLoaded.length} </h2>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    coffeesLoaded.map(coffee => <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;