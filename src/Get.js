import React from 'react';
import axios from 'axios';
import './Get.css'

export default function App() {

    const sendData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => {
                console.log(response)

            })
    };





    return (
        <div className="card">
            <div className='card-body'>
                <h2><strong>GET API</strong></h2>

                <button className="btn btn-dark" onClick={sendData}>SUBMIT DATA</button>
            </div>
        </div>
    )
}

