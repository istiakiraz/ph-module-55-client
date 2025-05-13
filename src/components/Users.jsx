import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ usersPromise }) => {
  const initialUser = use(usersPromise);

  // console.log(initialUser);

  const [users, setUsers] = useState(initialUser);


  const handleOnSub = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = {
      name,
      email,
    };
    console.log(newUser);

    //create user in the db

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("add a new user", data);
        if (data.insertedId) {

          newUser._id = data.insertedId

          const newUsers = [...users, newUser]

          setUsers(newUsers)

          alert("user add successfully");
        }

        e.target.reset();
      });
  };

  const handleUserDelete =(id)=>{
    console.log('user remove', id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    }).then(res=> res.json())
    .then(data=> 
    {
      if(data.deletedCount){

        const remainingUser = users.filter(user=> user._id !== id);
        setUsers(remainingUser)
        alert('User Remove')

        console.log('after delete', data)

      }
      
      
    }
      )

  }

  return (
    <>
      <div className="card bg-gray-600 w-full max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center pt-5 font-bold">User Form</h1>
        <div className="card-body">
          <form onSubmit={handleOnSub} className="fieldset">
            <label className="text">Name</label>
            <input
              type="text"
              required
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input"
              placeholder="Email"
            />

            <button className="btn btn-neutral mt-4">Add User</button>
          </form>
        </div>
      </div>

      {/* show user */}

      <div className="w-6/12 mx-auto bg-purple-300 p-8 rounded-3xl text-black mt-5">
      <h1 className="text-center text-2xl mb-3  font-bold text-pink-700 "> Total User: {users.length}</h1>
  <table className="table-auto border-collapse border border-gray-300 w-full">
    
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td className="border border-gray-300 px-4 py-2">{user.email}</td>
          <td className="border border-gray-300 px-4 py-2">{user.name}</td>
          <td className="space-x-2">
            <Link to={`user/${user._id}`} className="btn hover:bg-green-500 ">Details</Link>
            <Link to={`update/${user._id}`} className="btn hover:bg-cyan-500 ">Edit</Link>
            <button onClick={()=>handleUserDelete(user._id) } className="btn hover:bg-red-500 ">X</button>
          </td>
        </tr>
        
      ))}
    </tbody>
  </table>
</div>

    </>
  );
};

export default Users;
