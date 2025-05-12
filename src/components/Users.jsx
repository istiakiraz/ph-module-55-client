import React from 'react';

const Users = () => {


    const handleOnSub=(e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;

      const newUser = {
            name,
            email
        }
        console.log(newUser);


        //create user in the db 

        fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=> res.json())
        .then(data => {
            console.log( 'add a new user', data);
        })


    }



    return (   
    <div className="card bg-gray-600 w-full max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center pt-5 font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleOnSub} className="fieldset">

          <label className="text">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <button className="btn btn-neutral mt-4">Add User</button>
        </form>
      </div>
    </div>
    );
};

export default Users;