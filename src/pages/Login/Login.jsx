import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { jwtDecode } from 'jwt-decode'; // Correct import for jwt-decode
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error on every attempt

        try {
            const response = await axios.post('https://vrv-backend.vercel.app/api/auth/login', {
                email,
                password,
            });

            const token = response.data.token;

            console.log('Token:', token);

            // Store the token in localStorage
            localStorage.setItem('token', token);

            // Decode token to retrieve role and other user information
            const decoded = jwtDecode(token);

            console.log('Decoded Token Role:', decoded.role);

            // Redirect based on the role
            switch (decoded.role) {
                case 'Admin':
                    navigate('/home');
                    break;
                case 'User':
                    navigate('/user');
                    break;
                case 'Guest':
                default:
                    navigate('/guest');
                    break;
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleLogin}>
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
                    />
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}

                {/* Link to Signup page */}
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/signup">Signup here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
