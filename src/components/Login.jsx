import axios from "axios";
import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [notification, setNotification] = useState('')
  
    const handleLogin = () => {
      axios.post('https://fakestoreapi.com/auth/login ', {
        username: username,
        password: password
      })
        .then(function (response) {
          if (response.status === 200) {
            setNotification('Logged in')
            setUsername("")
            setPassword("")
          }
        })
        .catch(function (error) {
          setNotification('Somthing went wrong!')
        })
    }
    
  } 
  export default Login