/** @format */

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	console.log("Email:", process.env.EMAIL);
	console.log("Client ID:", process.env.CLIENT);
	console.log("Client Secret:", process.env.CLIENT_SECRET);
	console.log("Refresh Token:", process.env.REFRESH_TOKEN);
	try {
		const { name, email, message } = await request.json();
// need to refreshtokenc before 


		const transporter = nodemailer.createTransport({
			service: "gmail",
			secure: true,
			auth: {
				type: "OAuth2",
				user: process.env.EMAIL,
				clientId: process.env.CLIENT,
				clientSecret: process.env.CLIENT_SECRET,
				refreshToken: process.env.REFRESH_TOKEN,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: "New message from your-website",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Message sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return new NextResponse("Failed to send message.", { status: 500 });
	}
}
