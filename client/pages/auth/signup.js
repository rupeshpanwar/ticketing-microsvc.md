import React from 'react'

const signup = () => {
    return (
        <form>
            <h1>Signup</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' className="form-control" />
            </div>
            <button className="btn-primary">Sign Up</button>
        </form>
    )
}

export default signup
