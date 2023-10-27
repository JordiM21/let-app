const fs = require('fs'); // Import the 'fs' module

// Load the HTML content from the file
const emailContent = fs.readFileSync('email.html', 'utf8');

export default function (req, res) {
	require("dotenv").config();
	let nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "learnenglishtogether21@gmail.com",
			pass: process.env.password,
		},
		secure: true,
	});
	const mailData = {
		from: "learnenglishtogether21@gmail.com",
		to: "learnenglishtogether21@gmail.com",
		subject: `Nuevo usuario registrado: ${req.body.name}`,
		text:
			req.body.message +
			" | Enviado desde: " +
			req.body.email +
			"quien vive en: " +
			req.body.country,
		html: `
		<p>name: ${req.body.name}</p><br/>
		<p>email: ${req.body.email}</p><br/>
		<p>Country: ${req.body.country}</p><br/>
		<p>phone: ${req.body.phone}</p><br/>
		<p>message: ${req.body.message}</p><br/> `,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	const customMailData = {
		from: "learnenglishtogether21@gmail.com",
		to: req.body.email,
		subject: "Hey " + req.body.name + ", " + "¡Bienvenido a LET Academy!",
		html: emailContent,
	};


	transporter.sendMail(customMailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.status(200);
}
