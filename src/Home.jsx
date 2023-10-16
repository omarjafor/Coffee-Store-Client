import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";
import Header from "./Components/Header";


const Home = () => {
    
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="m-10">
            <div> <h1 className="text-3xl font-bold underline">Coffee Store Client</h1></div>
            <Header></Header>
            <h2 className="text-2xl font-bold">Total Coffee in the Menus : {coffees.length} </h2>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    coffees.map(coffee => <CoffeeCard
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