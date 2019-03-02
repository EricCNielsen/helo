import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function Nav(props){
   console.log(props)
   if(props.location.pathname !== '/'){
       return (
           <div>
               <div>
                   <img src={props.profilePic} alt='profile pic' style={{'width': 100, 'height': 100}} />
                   <p>{props.username}</p>
               </div>
               <div>
                <Link to="/dashboard">
                    <button type="button">Home</button>
                </Link>
                <Link to="/post/:postid">
                    <button type="button">New Post</button>
                </Link>
                <Link to="/">
                    <button type="button" onClick={props.logout}>Logout</button>
                </Link>
               </div>
           </div>
       )
   }
   return null
}

const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    }

}

export default connect(mapStateToProps)(Nav)

