import React, { Component } from 'react';
import axios from 'axios';
import "./Post.css"


class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            userId: '',
            title: '',
            body: '',

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { id, userId, title, body } = this.state
        return (
            <div className='card-body'>
                <h1>Post API</h1>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="id" placeholder='Id' value={id} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="userId" placeholder='UserId' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" placeholder='Title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" placeholder='Body' value={body} onChange={this.changeHandler} />
                    </div>

                    <button ype="submit" className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default Post;
