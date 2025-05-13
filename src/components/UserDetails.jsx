import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData()
    console.log(user);

    return (
        <div>
            hellikdfdf
        </div>
    );
};

export default UserDetails;