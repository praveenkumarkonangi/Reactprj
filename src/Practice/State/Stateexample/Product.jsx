import React, { useState } from 'react'
let Product = () => {
    let [msg, SetMsg] = useState("hello");
    useState(() => {
        console.log("Birth");
        return () => {
            console.log("death")
        }
    }, []);
    return <div>
        <h1>Product : {msg}</h1>
        <button onClick={() => {
            SetMsg("good morning bujji")
        }}>Please Update</button>
    </div>
}
export default Product 