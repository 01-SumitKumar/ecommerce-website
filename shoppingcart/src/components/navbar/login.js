// import React, { useState } from 'react';
// import Homepage from '../../pages/homepage/Homepage';
// import './login.css';
// import Signup from './signup';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);

//     // Check email validation
//     const isValidEmail = validateGmail(newEmail);
//     if (!isValidEmail) {
//       setEmailError('Please enter a valid Gmail address.');
//     } else {
//       setEmailError('');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     // Perform login logic here with email and password
//     console.log('Email:', email);
//     console.log('Password:', password);
//     setLoggedIn(true);
//   };
//   if (loggedIn) {
//     return (
//       <div>
//         <h2>Welcome to the Product Page!</h2>
//         <Homepage/>
//       </div>
//     );
//   }
// //   else{
// //     return (
// // <div>
// //   <Signup/>
// // </div>
// //     );
// //   }

//   const validateGmail = (email) => {
//     // Regular expression for Gmail validation
//     const gmailRegex = /^(?=.*[a-z]).{8,}$/;
//     return gmailRegex.test(email);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email"
//           />
//           {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './login.css';

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                    // return (
                    //         <div>
                    //           <h2>Welcome to the Product Page!</h2>
                    //           <Homepage/>
                    //         </div>
                    //       );
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login-container">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login