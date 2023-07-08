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
		html: `
			<html>
			<head>
		<style>
			h1 {
				margin-bottom: 32px;
				color: #333;
				font-size: 24px;
			}
			h2 {
				color: #555;
				font-size: 20px;
			}
			p {
				margin: 24px 0px;
				color: #777;
				font-size: 20px;
			}
			.header {
				width: 100%;
				object-fit: cover;
			}
			.button {
				transition: ease-in 0.2s all;
				display: inline-block;
				margin: 24px 0px;
				padding: 16px;
				background-color: #004aad;
				color: #fff;
				font-size: 2rem;
				text-decoration: none;
				border-radius: 40px;
			}
			.button:hover {
				background-color: #1571e9;
			}
			.content {
				max-width: 100%;
			}
			.flexCenter {
				display: flex;
				justify-content: center;
				width: 100%;
			}
			img{
				border-radius: 16px;
			}
			body{
				margin: 0px 4px;
			}
		</style>
	</head>
	<body>
		<img class="header" src="https://i.imgur.com/zi8xh7U.png" alt="Banner" />
		<h1>Domina el inglés hoy mismo con nuestra oferta especial</h1>
		<h2>
			${req.body.name}, Agradecemos tu interés en nuestro programa de aprendizaje. ¿Estás
			listo para ser bilingüe?
		</h2>
		<div class="content">
			<p>
				Queremos brindarte la mejor experiencia de aprendizaje del inglés, es
				por eso que ofrecemos tantos beneficios a nuestros estudiantes, tales
				como: tutor personalizado, plan de estudio personalizado, clases
				didácticas, plataforma exclusiva, seguimiento personal, ¡entre muchos
				más!
			</p>
			<img src="https://i.imgur.com/4WKWGu9.png" alt="Beneficios" />
			<div class="flexCenter">
			<a href="https://let-app.vercel.app/Beneficios" target="_blank" style="display: flex; justify-content: center; background-color: #004aad; color: #fff; font-size: 2rem; text-decoration: none; border-radius: 40px; padding: 16px; transition: ease-in 0.2s all; margin: 24px 0px;">
			Beneficios
		</a>		
			</div>
		</div>
		<h2>BENEFICIOS EXCLUSIVOS PARA PADRES</h2>
		<p>
			Entendemos que como padre quieres lo mejor para el futuro de tus hijo, es
			por eso que en LET Academy te enviaremos las estadísticas del progreso
			mensual de tu hijo directamente a tu WhatsApp o correo, así podrás saber
			como avanza en el programa y su aprendizaje detallado.
		</p>
		<img src="https://i.imgur.com/xafh9sv.png" />
		<div class="flexCenter">
			<a href="https://let-app.vercel.app/Beneficios" target="_blank" style="display: flex; justify-content: center; background-color: #004aad; color: #fff; font-size: 2rem; text-decoration: none; border-radius: 40px; padding: 16px; transition: ease-in 0.2s all; margin: 24px 0px;">
			Beneficios para padres
		</a>		
			</div>
			<img src="https://i.imgur.com/ggkrl5u.png" />
			<p>Si llegaste hasta acá responde este correo y te enviaremos toda la informacion de acuerdo a tu ubicación con tu moneda local, puedes especificar detalles si quieres que te llamemos, escribamos por WhatsApp o por cualquier medio, también puedes especificarnos si tienes previos conocimientos y cuales son tus expectativas del programa, Seguimos en contacto. </p>
			<small style="font-size: 0.8rem">Cordiales Saludos, LET Team</small>
			</body>
			</html>
		`,
	};


	transporter.sendMail(customMailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.status(200);
}
