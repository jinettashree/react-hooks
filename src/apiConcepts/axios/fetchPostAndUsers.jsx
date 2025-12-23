import axios from "axios";
import { useState, useEffect } from "react";

function FetchPostAndUser(){

    const[posts, setPosts]=useState([]);
    const[users, setUsers]=useState([]);
    const[search, setSearch]=useState("");
    const[selectedData, setSelectedData]=useState("")

    useEffect(() => {
        async function fetchMultipleApi(){
        try{
            const [postsResponse, usersResponse] = await Promise.all([
                axios.get("https://jsonplaceholder.typicode.com/posts"),
                axios.get("https://jsonplaceholder.typicode.com/users")
            ])
            // console.log("post api called", postsResponse);
            // console.log("user api called",usersResponse)
            setPosts(postsResponse.data);
            setUsers(usersResponse.data)
        }catch (error){
            console.error("Error:", error);
        }
        }

        fetchMultipleApi();
    }, []);

    const filteredPostTitle = posts.filter((post) => 
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    const filteredResults = posts.find((post) => 
        post.id === Number(selectedData)
    );

    const selectedUser = users.find((user) => 
        user.id === Number(filteredResults?.userId)
    );

return(
<>
    <input
    placeholder="Search Title"
    onChange={(e) => setSearch(e.target.value)}/>

    <select onChange={(e) => setSelectedData(e.target.value)}>
        <option value="">Select</option>

        {filteredPostTitle.map(post => (
            <option key={post.id} value={post.id}>
                {post.title}
            </option>
        ))}
    </select>

    {filteredResults && (
        <div>
            <h5>
            Title: {filteredResults.title}<br/>
            Body: {filteredResults.body}<br/>
            </h5>
            <p>User Name: {selectedUser.username}</p>

        </div>
    )
    }


</>
)
}

export default FetchPostAndUser