import { useState,useEffect } from "react";

function FetchNestedData(){

    const[users, setUsers]=useState([]);

    useEffect(() => {
        async function getUser(){
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            setUsers(data)
        }

        getUser();
    }, []);
return( 
    <>
        <h1>Fetch Nested Data</h1>

        {users.map(user => (
            <li key={user.id}>
                Name: {user.name}<br/>
                Email: {user.email}<br/>
                City Address: {user.address.city}<br/>
                Company Name: {user.company.name}
            </li>
        ))}
    </>
)
}

export default FetchNestedData