import React from 'react'
import {Link} from 'react-router-dom'


export default function Nav(props){
   console.log(props.location)
   if(props.location.pathname !== '/'){
       return (
           <div>
               <Link to="/dashboard">
                <button type="button">Home</button>
               </Link>
               <Link to="/post/:postid">
                <button type="button">New Post</button>
               </Link>
               <Link to="/">
                <button type="button">Logout</button>
               </Link>
           </div>
       )
   }
   return null
}

