/** @format */

import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("EMAIL:", process.env.EMAIL);
		console.log("PASSWORD:", process.env.PASSWORD);

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});

		if (response.ok) {
			setStatus("Message sent successfully!");
			setName("");
			setEmail("");
			setMessage("");
		} else {
			setStatus("Failed to send message.");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>
			<button type='submit'>Send</button>
			{status && <p>{status}</p>}
		</form>
	);
};

export default ContactForm;
