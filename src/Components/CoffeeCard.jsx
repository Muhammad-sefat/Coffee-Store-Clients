import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, category, supplier, taste, quantity, details, photo } =
    coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaning = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaning);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl p-5">
      <figure>
        <img className="w-1/2" src={photo} alt="coffee" />
      </figure>
      <div className="flex justify-between w-full">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{details}</p>
          <p>{quantity}</p>
        </div>
        <div className="pr-2">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item btn-info">View</button>
            <Link to={`updatecoffee/${_id}`}>
              <button className="btn join-item btn-accent">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-warning"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
