import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous success messages
        setError(''); // Clear previous error messages

        try {
            const response = await axios.post('https://vrv-backend.vercel.app/api/auth/signup', {
                name,
                email,
                password,
                role,
            });
            setMessage(response.data.message); // Display the success message from the API
            navigate('/login'); // Navigate immediately to /login after successful signup
        } catch (err) {
            // Check for server response error or set a generic error message
            setError(err.response?.data?.message || 'Error during signup');
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
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="input-field"
                        required
                        minLength="6" // Optional: Set a minimum password length
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
                    <button type="submit" className="signup-button">
                        Signup
                    </button>
                </form>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}

                {/* Link to Login page */}
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
