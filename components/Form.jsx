import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from 'react-toastify';

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [phone, setPhone] = useState("")

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name == "" || email == "" || country == "" || phone == "") {
			return toast.error("Completa todos los campos por favor");
		}
		if (!isValidEmail(email)) {
			return toast.error("Email inválido");
		}
		let data = {
			name,
			email,
			country,
			message,
			phone,
		};
		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response succeeded!");
		});
		reset();
	};
	const reset = () => {
		setSubmitted(true);
		setName("");
		setEmail("");
		setMessage("");
		setCountry("");
		setPhone("")
	};

	return (
		<div className='shadow-lg bg-white shadow-blue-400 w-full sm:w-96 mx-auto p-4 rounded-md my-4'>
			<form>
				<h2 className='text-[var(--color1)] text-lg text-center'>
					Aprende inglés con un{" "}<br />
					<span className='text-[var(--color2)]'>50% OFF</span>
				</h2>
				{submitted ? (
					<div style={{ textAlign: "center" }}>
						<h1>¡Estás muy cerca!</h1>
						<h3
							style={{
								margin: "20px auto",
							}}
						>
							¡Estás cada vez más cerca de hablar inglés con fluidez!
							Un asesor se pondrá en
							contacto contigo muy
							pronto, por favor revisa
							tu bandeja de entrada de promociones o spam
						</h3>
						<p
							style={{
								alignSelf: "flex-start",
								fontSize: ".7rem"
							}}
						>
							LET Team
						</p>
					</div>
				) : (
					<>
						<div>
							<TextField
								margin="normal"
								required
								type="text"
								placeholder="Jhon"
								value={name}
								onChange={(
									e
								) => {
									setName(
										e
											.target
											.value
									);
								}}
								fullWidth
								label="Nombre"
								id="fullWidth"
							/>
						</div>
						<div>
							<TextField
								margin="normal"
								required
								type="text"
								placeholder="62654000"
								value={phone}
								onChange={(
									e
								) => {
									setPhone(
										e
											.target
											.value
									);
								}}
								fullWidth
								label="Celular"
								id="fullWidth"
							/>
						</div>
						<div>
							<TextField
								margin="normal"
								required
								type="email"
								placeholder="jhon@gmail.com"
								value={email}
								onChange={(
									e
								) => {
									setEmail(
										e
											.target
											.value
									);
								}}
								fullWidth
								label="Email"
								id="fullWidth"
							/>
						</div>
						<div>
							<TextField
								margin="normal"
								required
								type="text"
								placeholder="España"
								value={country}
								onChange={(
									e
								) => {
									setCountry(
										e
											.target
											.value
									);
								}}
								fullWidth
								label="País de Residencia"
								id="fullWidth"
							/>
						</div>
						<div>
							<TextField
								id="outlined-multiline-static"
								label="Información adicional"
								multiline
								rows={3}
								margin="normal"
								fullWidth
								type="message"
								placeholder="ej: (edad estudiante, parentesco, dudas o sugerencias )"
								value={message}
								onChange={(
									e
								) => {
									setMessage(
										e
											.target
											.value
									);
								}}
							/>
						</div>
						<button
							type="button"
							onClick={(e) => {
								handleSubmit(e);
							}}
							className='bg-[var(--color3)] text-white block mx-auto w-4/5 text-xl py-4 rounded-md my-4'
						>
							{submitted
								? "enviado!"
								: "Comienza Ahora"}
						</button>
					</>
				)}
			</form>
		</div>
	);
};

export default Form;
