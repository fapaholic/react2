import React, { useState } from 'react';
import Nav from '../comps/nav';

const Contact = (props) => { // Receive props as a parameter
    // State for storing user input
    const [message, setMessage] = useState('');

    // Function to handle input change
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic (e.g., send the message to a server)
        console.log('Message submitted:', message);
        // Reset message input field
        setMessage('');
    }

    return (
        <div>
            <Nav />
            <div className='w-[90%] grid place-items-center h-[90vh] m-auto'>
                <div className="container mx-auto mt-8 flex ">

                    <div className='w-[50%] divide-y divide-slate-200 border border-black p-[50px] shadow-lg shadow-black/40 rounded-[20px] ease-in-out duration-300 hover:shadow-black/75 hover:shadow-2xl'>
                        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                        {/* Access and use props here */}
                        <p className="text-lg mb-2 w-[400px]">Email: {props.email}</p>
                        <p className="text-lg mb-2 w-[400px]">Phone: {props.phone}</p>
                        <p className="text-lg mb-2 w-[400px]">Address: {props.address}</p>
                    </div>

                    <form onSubmit={handleSubmit} className='w-[50%] p-[50px]'>
                        <div className="mb-4">
                            <label className="block text-lg mb-1" htmlFor="message">Your Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                rows="4"
                                placeholder="Enter your message..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;
