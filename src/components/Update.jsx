import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {

    const user = useLoaderData()
  

    const handleEditUser = (e)=>{
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;

        const userInfo = {
            name, email
        }

        console.log(userInfo);

        // update user 

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: "PUT",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(userInfo)

        }).then(res=>res.json()).then(data=> {
            

            if(data.modifiedCount){
                alert('Update Profile done')
                    
                console.log(data)
                
            }
            
        })

    }

    return (
        <div>
            <div className="card bg-gray-600 w-full max-w-sm mx-auto mt-12 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-green-300 text-center pt-5 font-bold">Edit User Form</h1>
        <div className="card-body">
          <form onSubmit={handleEditUser}  className="fieldset">
            <label className="text">Name</label>
            <input
              type="text"
              required
              name="name"
              className="input"
              placeholder="Name"
              defaultValue={user.name}
            />

            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input"
              placeholder="Email"
              defaultValue={user.email}
            />

            <button className="btn btn-neutral mt-4">Save Edit</button>
          </form>
        </div>
      </div>
        </div>
    );
};

export default Update;