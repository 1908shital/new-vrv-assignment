import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', { name, email, password, role });
            setMessage('Signup successful! You can login now.');
        } catch (err) {
            setMessage('Error during signup');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">Signup</h2>
                <form onSubmit={handleSignup}>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Name" 
                        className="input-field" 
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className="input-field" 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className="input-field" 
                    />
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)} 
                        className="select-field"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Guest">Guest</option>
                    </select>
                    <button type="submit" className="signup-button">Signup</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Signup;
