import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthProvider";

const REACT_APP_BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

function LoginForm() {
    // State to hold email and password
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            console.log("BACKEND_API", REACT_APP_BACKEND_API_URL)
            const response = await fetch(`${REACT_APP_BACKEND_API_URL}/token`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        'grant_type': 'password',
                        'username': email,
                        'password': password,
                    }).toString()
                }
            );

            // Assuming the token is returned in the response
            const resp = response.json(); // Adjust according to your API response
            // localStorage.setItem('access_token', token); // Save the token in local storage
            login(resp);
            console.log("repose", resp)
            console.log('Login successful!', resp);
            navigate('/')
            // Optionally, redirect the user or update UI

            // console.log(localStorage.getItem('token'))
        }
        catch (err) {
            console.error('Login failed:', err);
            setError('Login failed. Please check your credentials.' + err);
        }
        // finally {
        //     setLoading(false); // End loading
        // }
    };

    // if (loading) {
    //     return <div>Loading...</div>; // Loading state
    // }

    return (
        <div className="bg-white-100 flex h-full items-center py-16 dark:bg-neutral-800">
            <div className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                Don't have an account yet?
                                <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
                                    Sign up here
                                </a>
                            </p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-y-4">
                                    {/* Form Group - Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-black focus:ring-1 focus:ring-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                required
                                                aria-describedby="email-error"
                                            />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                    </div>
                                    {/* End Form Group */}

                                    {/* Form Group - Password */}
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="../examples/html/recover-account.html">Forgot password?</a>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-black focus:ring-1 focus:ring-black dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                required
                                                aria-describedby="password-error"
                                            />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                    </div>
                                    {/* End Form Group */}

                                    {/* Checkbox */}
                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <div className="ms-3">
                                            <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                                        </div>
                                    </div>
                                    {/* End Checkbox */}

                                    {/* Error Message */}
                                    {error && <p className="text-red-600">{error}</p>}

                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            {/* End Form */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
