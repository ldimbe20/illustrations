/** @format */

import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";



const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		message: false,
	});
	const [enableButton, setEnableButton] = useState(false);

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!enableButton) return;

		let isValid = true;

		if (!name) {
			isValid = false;
		}
		if (!email || !validateEmail(email)) {
			isValid = false;
		}
		if (!message) {
			isValid = false;
		}

		if (!isValid) {
			setTouched({
				name: true,
				email: true,
				message: true,
			});
			setEnableButton(true);
			return;
		}

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
			setTouched({
				name: false,
				email: false,
				message: false,
			});
		} else {
			setStatus("Failed to send message.");
		}
	};

	const handleBlur = (field: string) => {
		setTouched({
			...touched,
			[field]: true,
		});
	};

	const getEmailError = () => {
		if (!email && touched.email) {
			return "Email is required.";
		}
		if (email && !validateEmail(email) && touched.email) {
			return "Invalid email format.";
		}
		return "";
	};

	useEffect(() => {
		const isValid = name && email && validateEmail(email) && message;
		setEnableButton(isValid);
	}, [name, email, message]);

	return (
		<div className='container mx-auto py-10 px-5 tracking-widest flex flex-col justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-md bg-slate-100 border-2 border-slate-500 rounded-none p-8 space-y-6'
			>
				<div className='mb-6'>
					<div className='relative flex items-center text-slate-400 focus-within:text-slate-600'>
						<IoPersonSharp className='w-5 h-5 absolute ml-3 pointer-events-none' />
						<input
							type='text'
							id='name'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							onBlur={() => handleBlur("name")}
							required
							className='peer pl-10 text-slate-900 placeholder-slate-400 text-sm rounded-none transition-all duration-700 ease-in-out focus:border-b-2 outline-none block w-full p-2.5 border-b-2 border-transparent focus:border-slate-500 focus:border-l-0'
						/>
					</div>
					{touched.name && !name && (
						<p className='mt-2 font-medium text-slate-900 italic text-sm transition-all duration-700 ease-in-out'>
							Name is required.
						</p>
					)}
				</div>
				<div className='mb-6'>
					<div className='relative flex items-center text-slate-400 focus-within:text-slate-600'>
						<AiOutlineMail className='w-5 h-5 absolute ml-3 pointer-events-none' />
						<input
							type='email'
							id='email'
							placeholder='you@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={() => handleBlur("email")}
							required
							className='peer pl-10 text-slate-900 placeholder-slate-400 text-sm rounded-none transition-all duration-700 ease-in-out focus:border-b-2 outline-none block w-full p-2.5 border-b-2 border-transparent focus:border-slate-500 focus:border-l-0'
						/>
					</div>
					{touched.email && getEmailError() && (
						<p className='mt-2 font-medium italic text-slate-900 text-sm transition-all duration-700 ease-in-out'>
							{getEmailError()}
						</p>
					)}
				</div>
				<div className='mb-6'>
					<div className='relative flex items-center text-slate-400 focus-within:text-slate-600'>
						<TbMessageCircle2Filled className='w-5 h-5 absolute ml-3 pointer-events-none' />
						<input
							type='text'
							id='message'
							placeholder='Message...'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onBlur={() => handleBlur("message")}
							required
							className='peer pl-10 text-slate-900 placeholder-slate-400 text-sm rounded-none transition-all duration-700 ease-in-out focus:border-b-2 outline-none block w-full p-2.5 border-b-2 border-transparent focus:border-slate-500 focus:border-l-0'
						/>
					</div>
					{touched.message && !message && (
						<p className='mt-2 font-medium italic text-slate-900 text-sm transition-all duration-700 ease-in-out'>
							Message is required.
						</p>
					)}
				</div>
				<div className='flex justify-center'>
					<button
						className={`bg-slate-900 border-2 border-slate-100 text-white font-bold py-2 px-4 rounded-none transition-all duration-700 ease-in-out ${
							!enableButton
								? "opacity-50 cursor-not-allowed"
								: "hover:bg-white hover:text-slate-900 hover:border-slate-900"
						}`}
						disabled={!enableButton}
					>
						Send
					</button>
				</div>

				{status && (
					<p className='mt-4 text-center text-sm transition-all duration-700 ease-in-out'>
						{status}
					</p>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
