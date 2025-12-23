import { useState, useEffect } from "react"
import axios from "axios"
function FetchData(){

    const[products, setProducts]=useState([]);
    const[search, setSearch]=useState("");
    const[selectedProduct, setSelectedProduct]=useState("");

    useEffect(() =>{
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
    }, []);

    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    const selectedProductData = products.find((product) => 
        product.id === Number(selectedProduct)
    );

return(
<>
    <input
    placeholder="Search Title"
    onChange={(e) => {setSearch(e.target.value)}}
    />

    <select onChange={(e) => {setSelectedProduct(e.target.value)}}>
        <option value="">Select Product</option>

    
    {filteredProducts.map((product) => (
        <option key={product.id} value={product.id}> 
            {product.title}
        </option>
    ))}
    </select>

    {selectedProductData && (
    <div>
        <img src={selectedProductData.image}/>
        <h4>{selectedProductData.title}</h4>
        <p>Price: ${selectedProductData.price}</p>
        <p>Category: {selectedProductData.category}</p>
    </div>  
)}

</>
)
}

export default FetchData