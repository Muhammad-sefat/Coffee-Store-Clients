import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-center text-5xl font-bold py-5 text-white bg-amber-950">
        Coffee House
      </h1>
      <ol className="text-center font-medium">
        <li>
          <Link to={"/addcoffee"}>AddCoffee</Link>
        </li>
      </ol>
      <div className="px-10 mx-auto">
        <h2 className="text-3xl font-semibold py-5">My All Coffee</h2>
        <div className="py-5 grid md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
