'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("full name", fullname);
    console.log("email", email);
    console.log("message", message);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="bg-[#f9f9f9] m-8 p-4 flex flex-col gap-5">
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="messsage">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type your message here..."
            id="message"
            className="h-32"
          ></textarea>
        </div>
        <button type="Submit" className="primary-btn">
          Submit
        </button>
      </form>

      <div className="container flex felx-col">
        <div className="text-red-500 px-5 py-2">Error message</div>
      </div>
    </div>
  );
};

export default ContactForm;
