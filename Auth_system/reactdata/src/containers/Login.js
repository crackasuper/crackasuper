import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login }  from '../actions/auth';


const Login = ({ login }) => {
     const [formData, setFormData] = useState({
          email: '',
          password: ''

     });
     const { email, password } = formData;
     const navigate = useNavigate();

     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
     const onSubmit = async e => {
          e.preventDefault();
          const success = await login(email, password);
          if (success) {
              navigate('/')
          }
          
     };
     return (
               <div className="container mt-5">
                    <h1>Sign In</h1>
                    <p>Sign into your Account</p>
                    <form onSubmit= {e => onSubmit(e)}>
                         <div className="form-group">
                              <input 
                                   type="text"
                                   className="form-control"
                                   name="email"
                                   placeholder="email"
                                   value={email}
                                   onChange={e => onChange(e)}
                                   required
                              />
                              <br />
                         </div>
                         <div className="form-group">
                              <input
                                   className = 'form-control'
                                   type="password"
                                   name="password"
                                   placeholder="Password"
                                   value={password}
                                   onChange={e => onChange(e)}
                                   required
                              />
                              <br />
                         </div>
                         <button className = 'btn btn-primary btn-lg' type="submit">Login</button>
                    </form>
                    
                    <p className = "mt-3">
                         Don't have an acount? <Link to="/signup">Sign Up</Link>

                    </p>
                    <p lassName ='mt-3'>
                         Forgot your password? <Link to="/reset_password">reset your password</Link>
                    </p>


               </div>
          );
};
export default connect(null, { login }) (Login);  //export the component