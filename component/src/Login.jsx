import React from 'react'

export const users = [
    {
        username: "selin",
        password: "123"
    },
    {
        username: "baran",
        password: "444"
    }
]
function Login() {
  return (

    <div>
        <div>
            <p>username</p>
            <input type="text" />
        </div>
        <div>
            <p>password</p>
            <input type="text" />

        </div>

        <button>Log in</button>

    </div>


  )
}

export default Login
