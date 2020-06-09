import React, { Component } from 'react'
import './Blog.css'
import Posts from './Posts/Posts'
import {Route} from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import {NavLink, Switch} from 'react-router-dom'
import FullPost from './FullPost/FullPost'

class Blog extends Component {

    render() {

        return (
            <div>
                <header>
                    <nav className="Blog">
                        <ul>
                            <li><NavLink to = "/" exact activeClassName = "my-active" activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Home</NavLink></li>
                            <li><NavLink to = "/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path = "/" exact component={Posts}/> 
                    <Route path = "/new-post" component={NewPost} />
                    <Route path = "/:id" component = {FullPost} />
                </Switch>
                
            </div>
        )
    }
}

export default Blog
