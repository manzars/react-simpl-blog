import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Link } from 'react-router-dom'


class Posts extends Component {

    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const posts = response.data.slice(0,4)
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: "Manzar"
                }
            })
            this.setState({posts: updatedPost})
            // console.log(response)
        })
    }

    postClicked = (id) => {
        // this.setState({selectedPost: id})
        this.props.history.push('/' + id)
    }

    render() {

        const posts = this.state.posts.map((post) => {
            return (
                // <Link key = {post.id} to={'/' + post.id}>
                    <Post
                    key = {post.id}
                        title = {post.title}
                        author = {post.author}
                        Clicked = {() => this.postClicked(post.id)}
                    />
                // </Link>
            ) 
        })

        return (
            <section className="Posts">
                    {posts}
            </section>
        )
    }
}

export default Posts
