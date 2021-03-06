import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'

class Auth extends Component {
    constructor(){
        super()

        this.state= {
            username: '',
            password: ''
        }
        this.register=this.register.bind(this)
        this.login=this.login.bind(this)
    }

    async register () {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/register', user)
            this.setState({
                username: res.data.username,
                password: res.data.password
            })
            this.props.history.push('/dashboard')

        } catch (err){
            alert('Username taken.')
            console.log(err)
        }
    }



    async login () {
         try {
            let res = await axios.post('/auth/login', this.state)
            console.log(updateUser)
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        } catch (err) {
            alert('Your username or password sucks. Try again')
        }
    }

    handleChange (prop, val) {
        this.setState({
            [prop]:val
        })
    }

    render() {
        const {username, password} = this.state
        return (
            <div>
                <input type='text' value={username} onChange={(e) => this.handleChange('username', e.target.value)} placeholder='username' style={{margin: '3px'}}/>
                <input type='password' value={password} onChange={(e) => this.handleChange('password', e.target.value)} placeholder='password' style={{margin: '3px'}} />

                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}


export default connect( null, {updateUser})(Auth)