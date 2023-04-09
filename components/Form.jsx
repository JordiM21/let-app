import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name == "" || email == "" || country == "") {
			return alert("Completa todos los campos por favor");
		}
		if (!isValidEmail(email)) {
			return alert("Email inválido");
		}
		let data = {
			name,
			email,
			country,
			message,
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
	};

	return (
		<div>
			<form>
				<h2>
					Aprende inglés con un{" "}
					<span>50% OFF</span>
				</h2>
				{submitted ? (
					<div style={{ textAlign: "center" }}>
						<h1>¡Estás muy cerca!</h1>
						<h3
							style={{
								margin: "20px auto",
							}}
						>
							Gracias por tu interés,
							un asesor se pondrá en
							contacto contigo muy
							pronto, por favor revisa
							tu email regularmente
						</h3>
						<p
							style={{
								alignSelf: "flex-end",
							}}
						>
							footer
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
								placeholder="Colombia"
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
						>
							{submitted
								? "enviado!"
								: "enviar"}
						</button>
					</>
				)}
			</form>
		</div>
	);
};

export default Form;
