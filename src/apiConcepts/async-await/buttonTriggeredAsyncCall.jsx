import { useState } from "react"

function ButtonTriggeredAsyncCall(){

    const[users, setusers]=useState([]);

    async function getApi(){
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        setusers(data.results);
    }

    return(
    <>
        <button 
        className="mb-4"
        onClick={getApi}>
            Show Data
        </button>

        {users.map((user, index) => (
            <div key={user.login.uuid}>
                <img src={user.picture.large} alt="User Picture"/>
                <h5>
                    Name: {user.name.first} {user.name.last} <br/>
                </h5>
                <p>
                    UserName: {user.login.username} <br/>
                    Gender: {user.gender} <br/>
                    Email: {user.email} <br/>
                    State: {user.location.state}
                </p>
            </div>
        ))}
    </>
    )
}

export default ButtonTriggeredAsyncCall