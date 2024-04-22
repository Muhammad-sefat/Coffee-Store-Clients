import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
const AddCoffee = () => {
  const handleCoffeeForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      category,
      supplier,
      taste,
      quantity,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Coffee Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center bg-amber-950 text-white p-3">
        Coffee House
      </h1>
      <Link to={"/"}>Back To Home</Link>
      <div>
        <form
          onSubmit={handleCoffeeForm}
          className="border border-amber-900 rounded-md  w-[80%] mx-auto my-5 p-8 bg-stone-300"
        >
          <h1 className="text-center text-3xl font-semibold py-3">
            Add New Coffee
          </h1>
          <p className="w-[70%] mx-auto pb-5 text-center">
            {" "}
            How do you start your day? With a cup of joe from the local coffee
            shop? Or maybe you're more of an at-home kinda person and brew your
            own cup. Regardless of where your morning cup is from, I'm sure it
            starts your day off right.
          </p>
          <div className="flex  gap-5">
            <div className="w-[50%]">
              <label className="font-semibold ">Coffee Name</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="name"
                placeholder="Enter coffee name"
              />
              <br />
              <label className="font-semibold ">Coffee Supplier</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="supplier"
                placeholder="Enter your supplier"
              />
              <br />
              <label className="font-semibold ">Coffee Category</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="category"
                placeholder="Enter your category"
              />
            </div>
            <div className="w-[50%]">
              <label className="font-semibold ">Coffee Quantity</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="quantity"
                placeholder="Enter your chef"
              />
              <br />
              <label className="font-semibold ">Taste</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="taste"
                placeholder="Enter your taste"
              />
              <br />
              <label className="font-semibold ">Details</label>
              <br />
              <input
                className="border border-gray-500 p-1 rounded-md w-full mt-2"
                type="text"
                name="details"
                placeholder="Enter your details"
              />
            </div>
          </div>
          <label className="font-semibold ">Photo URL</label>
          <br />
          <input
            className="border border-gray-500 p-1 rounded-md w-full mt-2"
            type="text"
            name="photo"
            placeholder="Enter photo URL"
          />
          <input
            className="w-full bg-amber-700 text-white font-semibold p-2 rounded-md my-4"
            type="submit"
            value=" Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
