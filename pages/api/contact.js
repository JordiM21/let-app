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
		<html
		xmlns="http://www.w3.org/1999/xhtml"
		xmlns:o="urn:schemas-microsoft-com:office:office"
	>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="viewport" content="initial-scale=1.0" />
			<meta name="format-detection" content="telephone=no" />
			<title>MOSAICO Responsive Email Designer</title>
	
			<style type="text/css">
				body {
					margin: 0;
					padding: 0;
				}
				img {
					border: 0px;
					display: block;
				}
	
				.socialLinks {
					font-size: 6px;
				}
				.socialLinks a {
					display: inline-block;
				}
	
				.long-text p {
					margin: 1em 0px;
				}
				.long-text p:last-child {
					margin-bottom: 0px;
				}
				.long-text p:first-child {
					margin-top: 0px;
				}
			</style>
			<style type="text/css">
				/* yahoo, hotmail */
				.ExternalClass,
				.ExternalClass p,
				.ExternalClass span,
				.ExternalClass font,
				.ExternalClass td,
				.ExternalClass div {
					line-height: 100%;
				}
				.yshortcuts a {
					border-bottom: none !important;
				}
				.vb-outer {
					min-width: 0 !important;
				}
				.RMsgBdy,
				.ExternalClass {
					width: 100%;
					background-color: #3f3f3f;
					background-color: #3f3f3f;
				}
	
				/* outlook/office365 add buttons outside not-linked images and safari have 2px margin */
				[o365] button {
					margin: 0 !important;
				}
	
				/* outlook */
				table {
					mso-table-rspace: 0pt;
					mso-table-lspace: 0pt;
				}
				#outlook a {
					padding: 0;
				}
				img {
					outline: none;
					text-decoration: none;
					border: none;
					-ms-interpolation-mode: bicubic;
				}
				a img {
					border: none;
				}
	
				@media screen and (max-width: 600px) {
					table.vb-container,
					table.vb-row {
						width: 95% !important;
					}
	
					.mobile-hide {
						display: none !important;
					}
					.mobile-textcenter {
						text-align: center !important;
					}
	
					.mobile-full {
						width: 100% !important;
						max-width: none !important;
					}
				}
				/* previously used also screen and (max-device-width: 600px) but Yahoo Mail doesn't support multiple queries */
			</style>
			<style type="text/css">
				#ko_singleArticleBlock_2 .links-color a,
				#ko_singleArticleBlock_2 .links-color a:link,
				#ko_singleArticleBlock_2 .links-color a:visited,
				#ko_singleArticleBlock_2 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				#ko_singleArticleBlock_1 .links-color a,
				#ko_singleArticleBlock_1 .links-color a:link,
				#ko_singleArticleBlock_1 .links-color a:visited,
				#ko_singleArticleBlock_1 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				#ko_textBlock_1 .links-color a,
				#ko_textBlock_1 .links-color a:link,
				#ko_textBlock_1 .links-color a:visited,
				#ko_textBlock_1 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				#ko_textBlock_2 .links-color a,
				#ko_textBlock_2 .links-color a:link,
				#ko_textBlock_2 .links-color a:visited,
				#ko_textBlock_2 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				#ko_sideArticleBlock_1 .links-color a,
				#ko_sideArticleBlock_1 .links-color a:link,
				#ko_sideArticleBlock_1 .links-color a:visited,
				#ko_sideArticleBlock_1 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				#ko_sideArticleBlock_2 .links-color a,
				#ko_sideArticleBlock_2 .links-color a:link,
				#ko_sideArticleBlock_2 .links-color a:visited,
				#ko_sideArticleBlock_2 .links-color a:hover {
					color: #3f3f3f;
					color: #3f3f3f;
					text-decoration: underline;
				}
	
				.links-color a,
				.links-color a:link,
				.links-color a:visited,
				.links-color a:hover {
					color: #cccccc;
					text-decoration: underline;
				}
			</style>
		</head>
		<!--[if !(gte mso 16)]-->
		<body
			bgcolor="#3f3f3f"
			text="#919191"
			alink="#cccccc"
			vlink="#cccccc"
			style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191"
		>
			<!--<![endif]-->
			<center>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_logoBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="9"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 9px;
											border-spacing: 9px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td align="center" valign="top" style="font-size: 0">
													<div
														style="
															vertical-align: top;
															width: 100%;
															max-width: 184px;
															-mru-width: 0px;
														"
													>
														<!--
					-->
														<table
															role="presentation"
															class="vb-content"
															border="0"
															cellspacing="9"
															cellpadding="0"
															width="184"
															style="
																border-collapse: separate;
																width: 100%;
																mso-cellspacing: 9px;
																border-spacing: 9px;
															"
														>
															<tbody>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		class="links-color"
																	>
																		<!--[if (lte ie 8)]><div style="display: inline-block; width: 166px; -mru-width: 0px"><!
																		[endif]--><a
																			target="_new"
																			href="https://mosaico.io/files/465zm9y/garantia_de_exito.png"
																			style="display: inline-block"
																			><img
																				alt="Garantía de éxito"
																				border="0"
																				hspace="0"
																				align="center"
																				vspace="0"
																				width="166"
																				style="
																					border: 0px;
																					display: block;
																					vertical-align: top;
																					height: auto;
																					margin: 0 auto;
																					color: #3f3f3f;
																					font-size: 13px;
																					font-family: Arial, Helvetica,
																						sans-serif;
																					width: 100%;
																					max-width: 166px;
																					height: auto;
																				"
																				src="https://mosaico.io/srv/f-465zm9y/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F465zm9y%2FComplete%2520Logo.png&amp;method=resize&amp;params=166%2Cnull" /></a
																		>><!--[if (lte ie 8)]></div><![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_titleBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="0"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 0px;
											border-spacing: 0px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td
													align="center"
													valign="top"
													style="font-size: 0; padding: 0 9px"
												>
													<div
														style="
															vertical-align: top;
															width: 100%;
															max-width: 552px;
															-mru-width: 0px;
														"
													>
														<!--
					-->
														<table
															role="presentation"
															class="vb-content"
															border="0"
															cellspacing="9"
															cellpadding="0"
															style="
																border-collapse: separate;
																width: 100%;
																mso-cellspacing: 9px;
																border-spacing: 9px;
															"
															width="552"
														>
															<tbody>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		style="
																			font-weight: normal;
																			color: #3f3f3f;
																			font-size: 22px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: center;
																		"
																	>
																		<span style="font-weight: normal"
																			><strong
																				>¡Bienvenido Futuro Bilingüe!</strong
																			></span
																		>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_singleArticleBlock_2"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="9"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 9px;
											border-spacing: 9px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td align="center" valign="top" style="font-size: 0">
													<div
														style="
															vertical-align: top;
															width: 100%;
															max-width: 552px;
															-mru-width: 0px;
														"
													>
														<!--
					-->
														<table
															role="presentation"
															class="vb-content"
															border="0"
															cellspacing="9"
															cellpadding="0"
															style="
																border-collapse: separate;
																width: 100%;
																mso-cellspacing: 9px;
																border-spacing: 9px;
															"
															width="552"
														>
															<tbody>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		class="links-color"
																		style="padding-bottom: 9px"
																	>
																		<!--[if (lte ie 8)]><div style="display: inline-block; width: 350px; -mru-width: 0px"><!
																		[endif]--><img
																			border="0"
																			hspace="0"
																			align="center"
																			vspace="0"
																			width="350"
																			style="
																				border: 0px;
																				display: block;
																				vertical-align: top;
																				height: auto;
																				margin: 0 auto;
																				color: #3f3f3f;
																				font-size: 13px;
																				font-family: Arial, Helvetica, sans-serif;
																				width: 100%;
																				max-width: 350px;
																				height: auto;
																			"
																			src="https://mosaico.io/srv/f-465zm9y/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F465zm9y%2FGarant%25C3%25ADa%2520de%2520%25C3%25A9xito.png&amp;method=resize&amp;params=350%2Cnull"
																		/>/><!--[if (lte ie 8)]></div><![endif]-->
																	</td>
																</tr>
	
																<tr>
																	<td
																		class="long-text links-color"
																		width="100%"
																		valign="top"
																		align="left"
																		style="
																			font-weight: normal;
																			color: #3f3f3f;
																			font-size: 13px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: left;
																			line-height: normal;
																		"
																	></td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_sideArticleBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="9"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 9px;
											border-spacing: 9px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td align="center" valign="top" style="font-size: 0">
													<div
														style="width: 100%; max-width: 552px; -mru-width: 0px"
													>
														<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><!
														[endif]--><!--
					--><!--
						--><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="184"><!
														[endif]--><!--
				-->
														<div
															class="mobile-full"
															style="
																display: inline-block;
																vertical-align: top;
																width: 100%;
																max-width: 184px;
																-mru-width: 0px;
																min-width: calc(33.333333333333336%);
																max-width: calc(100%);
																width: calc(304704px - 55200%);
															"
														>
															<!--
					-->
															<table
																role="presentation"
																class="vb-content"
																border="0"
																cellspacing="9"
																cellpadding="0"
																width="184"
																align="left"
																style="
																	border-collapse: separate;
																	width: 100%;
																	mso-cellspacing: 9px;
																	border-spacing: 9px;
																	-yandex-p: calc(2px - 3%);
																"
															>
																<tbody>
																	<tr>
																		<td
																			width="100%"
																			valign="top"
																			align="center"
																			class="links-color"
																		>
																			<!--[if (lte ie 8)]><div style="display: inline-block; width: 166px; -mru-width: 0px"><!
																			[endif]--><img
																				alt="Aprende inglés ahora"
																				border="0"
																				hspace="0"
																				align="center"
																				vspace="0"
																				width="166"
																				style="
																					border: 0px;
																					display: block;
																					vertical-align: top;
																					height: auto;
																					margin: 0 auto;
																					color: #3f3f3f;
																					font-size: 13px;
																					font-family: Arial, Helvetica,
																						sans-serif;
																					width: 100%;
																					max-width: 166px;
																					height: auto;
																				"
																				src="https://mosaico.io/srv/f-465zm9y/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F465zm9y%2F1%2520%25281%2529.png&amp;method=resize&amp;params=166%2Cnull"
																			/>/><!--[if (lte ie 8)]></div><![endif]-->
																		</td>
																	</tr>
																</tbody>
															</table>
															<!--
				-->
														</div>
														<!--[if (gte mso 9)|(lte ie 8)]></td><!
														[endif]--><!--
						--><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="368"><!
														[endif]--><!--
				-->
														<div
															class="mobile-full"
															style="
																display: inline-block;
																vertical-align: top;
																width: 100%;
																max-width: 368px;
																-mru-width: 0px;
																min-width: calc(66.66666666666667%);
																max-width: calc(100%);
																width: calc(304704px - 55200%);
															"
														>
															<!--
					-->
															<table
																role="presentation"
																class="vb-content"
																border="0"
																cellspacing="9"
																cellpadding="0"
																width="368"
																align="left"
																style="
																	border-collapse: separate;
																	width: 100%;
																	mso-cellspacing: 9px;
																	border-spacing: 9px;
																	-yandex-p: calc(2px - 3%);
																"
															>
																<tbody>
																	<tr>
																		<td
																			width="100%"
																			valign="top"
																			align="left"
																			style="
																				font-weight: normal;
																				color: #3f3f3f;
																				font-size: 18px;
																				font-family: Arial, Helvetica, sans-serif;
																				text-align: left;
																			"
																		>
																			<span style="font-weight: normal"
																				><strong
																					>Nos complace tenerte aquí</strong
																				></span
																			>
																		</td>
																	</tr>
																	<tr>
																		<td
																			class="long-text links-color"
																			width="100%"
																			valign="top"
																			align="left"
																			style="
																				font-weight: normal;
																				color: #3f3f3f;
																				font-size: 13px;
																				font-family: Arial, Helvetica, sans-serif;
																				text-align: left;
																				line-height: normal;
																			"
																		>
																			<p style="margin: 1em 0px; margin-top: 0px">
																				Es un placer darte la bienvenida a la
																				academia. Estamos emocionados de que hayas
																				decidido unirte a nosotros en este viaje
																				emocionante hacia el<strong>
																					dominio del idioma inglés</strong
																				>.
																			</p>
																			<p
																				style="
																					margin: 1em 0px;
																					margin-bottom: 0px;
																				"
																			>
																				Sabemos que aprender un nuevo idioma puede
																				ser un reto, pero también es una aventura
																				gratificante llena de oportunidades y
																				nuevas experiencias.
																			</p>
																		</td>
																	</tr>
																</tbody>
															</table>
															<!--
				-->
														</div>
														<!--[if (gte mso 9)|(lte ie 8)]></td><!
														[endif]--><!--
						--><!--
					--><!--
				--><!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]-->
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_sideArticleBlock_2"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="9"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 9px;
											border-spacing: 9px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td align="center" valign="top" style="font-size: 0">
													<div
														style="width: 100%; max-width: 552px; -mru-width: 0px"
													>
														<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="552"><tr><!
														[endif]--><!--
					--><!--
						--><!--
						--><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276"><!
														[endif]--><!--
				-->
														<div
															class="mobile-full"
															style="
																display: inline-block;
																vertical-align: top;
																width: 100%;
																max-width: 276px;
																-mru-width: 0px;
																min-width: calc(50%);
																max-width: calc(100%);
																width: calc(304704px - 55200%);
															"
														>
															<!--
					-->
															<table
																role="presentation"
																class="vb-content"
																border="0"
																cellspacing="9"
																cellpadding="0"
																width="276"
																align="left"
																style="
																	border-collapse: separate;
																	width: 100%;
																	mso-cellspacing: 9px;
																	border-spacing: 9px;
																	-yandex-p: calc(2px - 3%);
																"
															>
																<tbody>
																	<tr>
																		<td
																			width="100%"
																			valign="top"
																			align="left"
																			style="
																				font-weight: normal;
																				color: #3f3f3f;
																				font-size: 18px;
																				font-family: Arial, Helvetica, sans-serif;
																				text-align: left;
																			"
																		>
																			<span style="font-weight: normal"
																				><strong
																					>Domina el inglés ahora!</strong
																				></span
																			>
																		</td>
																	</tr>
																	<tr>
																		<td
																			class="long-text links-color"
																			width="100%"
																			valign="top"
																			align="left"
																			style="
																				font-weight: normal;
																				color: #3f3f3f;
																				font-size: 13px;
																				font-family: Arial, Helvetica, sans-serif;
																				text-align: left;
																				line-height: normal;
																			"
																		>
																			<p style="margin: 1em 0px; margin-top: 0px">
																				Nuestro equipo está listo para llevarte de
																				la mano en el aprendizaje del idioma y
																				asegurar tu progreso constante. Dispondrás
																				también de muchos beneficios inmediatos al
																				entrar a la academia.
																			</p>
																			<p
																				style="
																					margin: 1em 0px;
																					margin-bottom: 0px;
																				"
																			>
																				Entre los beneficios ofrecemos
																				<strong>TUTOR PERSONALIZADO&nbsp;</strong
																				>el cual te será asignado al entrar al
																				curso y te hará du examen de nivelación.
																				Este se encargará de resolver todas tus
																				dudas y apoyarte en tu proceso de
																				aprendizaje
																			</p>
																		</td>
																	</tr>
																	<tr>
																		<td valign="top" align="left">
																			<table
																				role="presentation"
																				cellpadding="6"
																				border="0"
																				align="left"
																				cellspacing="0"
																				style="
																					border-spacing: 0;
																					mso-padding-alt: 6px 6px 6px 6px;
																					padding-top: 4px;
																				"
																			>
																				<tbody>
																					<tr>
																						<td
																							width="auto"
																							valign="middle"
																							align="left"
																							bgcolor="#bfbfbf"
																							style="
																								text-align: center;
																								font-weight: normal;
																								padding: 6px;
																								padding-left: 18px;
																								padding-right: 18px;
																								background-color: #bfbfbf;
																								color: #3f3f3f;
																								font-size: 13px;
																								font-family: Arial, Helvetica,
																									sans-serif;
																								border-radius: 4px;
																							"
																						>
																							<a
																								style="
																									text-decoration: none;
																									font-weight: normal;
																									color: #3f3f3f;
																									font-size: 13px;
																									font-family: Arial, Helvetica,
																										sans-serif;
																								"
																								target="_new"
																								href="https://let-app.vercel.app/Beneficios"
																								>Mira todos los beneficios</a
																							>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</td>
																	</tr>
																</tbody>
															</table>
															<!--
				-->
														</div>
														<!--[if (gte mso 9)|(lte ie 8)]></td><!
														[endif]--><!--
						--><!--[if (gte mso 9)|(lte ie 8)]><td align="left" valign="top" width="276" style="; "><!
														[endif]--><!--
				-->
														<div
															class="mobile-full"
															style="
																display: inline-block;
																vertical-align: top;
																width: 100%;
																max-width: 276px;
																-mru-width: 0px;
																min-width: calc(50%);
																max-width: calc(100%);
																width: calc(304704px - 55200%);
															"
														>
															<!--
					-->
															<table
																role="presentation"
																class="vb-content"
																border="0"
																cellspacing="9"
																cellpadding="0"
																width="276"
																align="left"
																style="
																	border-collapse: separate;
																	width: 100%;
																	mso-cellspacing: 9px;
																	border-spacing: 9px;
																	-yandex-p: calc(2px - 3%);
																"
															>
																<tbody>
																	<tr>
																		<td
																			width="100%"
																			valign="top"
																			align="center"
																			class="links-color"
																		>
																			<!--[if (lte ie 8)]><div style="display: inline-block; width: 258px; -mru-width: 0px"><!
																			[endif]--><img
																				border="0"
																				hspace="0"
																				align="center"
																				vspace="0"
																				width="258"
																				style="
																					border: 0px;
																					display: block;
																					vertical-align: top;
																					height: auto;
																					margin: 0 auto;
																					color: #3f3f3f;
																					font-size: 13px;
																					font-family: Arial, Helvetica,
																						sans-serif;
																					width: 100%;
																					max-width: 258px;
																					height: auto;
																				"
																				src="https://mosaico.io/srv/f-465zm9y/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F465zm9y%2F4.png&amp;method=resize&amp;params=258%2Cnull"
																			/>/><!--[if (lte ie 8)]></div><![endif]-->
																		</td>
																	</tr>
																</tbody>
															</table>
															<!--
				-->
														</div>
														<!--[if (gte mso 9)|(lte ie 8)]></td><!
														[endif]--><!--
					--><!--
				--><!--[if (gte mso 9)|(lte ie 8)]></tr></table><![endif]-->
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_textBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="18"
										bgcolor="#ffffff"
										width="570"
										class="vb-container"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 18px;
											border-spacing: 18px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td
													class="long-text links-color"
													width="100%"
													valign="top"
													align="left"
													style="
														font-weight: normal;
														color: #3f3f3f;
														font-size: 13px;
														font-family: Arial, Helvetica, sans-serif;
														text-align: left;
														line-height: normal;
													"
												>
													<h1>Somos más que un simple curso</h1>
													<p style="margin: 1em 0px">
														Estamos cansados de todos esos cursos online que
														ofrecen las mismas cosas básicas y no aprendes en
														realidad el inglés.&nbsp;
													</p>
													<p style="margin: 1em 0px; margin-bottom: 0px">
														Es por eso que LET Academy te ofrece un
														<strong>método de aprendizaje personalizado</strong>
														en el que tendrás contacto 1-1 con tu Tutor Personal
														todo el tiempo, Clases en vivo personalizadas,
														actividades grupales, Aprendizaje didáctico con juegos
														interáctivos y mucho más!
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_singleArticleBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="9"
										bgcolor="#ffffff"
										width="570"
										class="vb-row"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 9px;
											border-spacing: 9px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td align="center" valign="top" style="font-size: 0">
													<div
														style="
															vertical-align: top;
															width: 100%;
															max-width: 552px;
															-mru-width: 0px;
														"
													>
														<!--
					-->
														<table
															role="presentation"
															class="vb-content"
															border="0"
															cellspacing="9"
															cellpadding="0"
															style="
																border-collapse: separate;
																width: 100%;
																mso-cellspacing: 9px;
																border-spacing: 9px;
															"
															width="552"
														>
															<tbody>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		class="links-color"
																		style="padding-bottom: 9px"
																	>
																		<!--[if (lte ie 8)]><div style="display: inline-block; width: 350px; -mru-width: 0px"><!
																		[endif]--><img
																			border="0"
																			hspace="0"
																			align="center"
																			vspace="0"
																			width="350"
																			style="
																				border: 0px;
																				display: block;
																				vertical-align: top;
																				height: auto;
																				margin: 0 auto;
																				color: #3f3f3f;
																				font-size: 13px;
																				font-family: Arial, Helvetica, sans-serif;
																				width: 100%;
																				max-width: 350px;
																				height: auto;
																			"
																			src="https://mosaico.io/srv/f-465zm9y/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2F465zm9y%2Fgarantia_de_exito_2.png&amp;method=resize&amp;params=350%2Cnull"
																		/>/><!--[if (lte ie 8)]></div><![endif]-->
																	</td>
																</tr>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="left"
																		style="
																			font-weight: normal;
																			color: #3f3f3f;
																			font-size: 18px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: left;
																		"
																	>
																		<span style="font-weight: normal"
																			>¡Cambia tu vida en menos de 1 año!<br
																				data-mce-bogus="1"
																		/></span>
																	</td>
																</tr>
																<tr>
																	<td
																		class="long-text links-color"
																		width="100%"
																		valign="top"
																		align="left"
																		style="
																			font-weight: normal;
																			color: #3f3f3f;
																			font-size: 13px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: left;
																			line-height: normal;
																		"
																	>
																		<p style="margin: 1em 0px; margin-top: 0px">
																			Nuestros estudiantes
																			<strong
																				>alcanzan la fluidez en tan solo 9
																				meses</strong
																			>
																			en promedio!
																		</p>
																		<p
																			style="margin: 1em 0px; margin-bottom: 0px"
																		>
																			El método que usamos para alcanzar esto
																			consiste en un estudio personalizado de cada
																			estudiante, lo cual nos permite crear una
																			estructura detallada de aprendizaje basada
																			en su nivel actual y sus requerimientos.
																		</p>
																	</td>
																</tr>
																<tr>
																	<td valign="top" align="left">
																		<table
																			role="presentation"
																			cellpadding="6"
																			border="0"
																			align="left"
																			cellspacing="0"
																			style="
																				border-spacing: 0;
																				mso-padding-alt: 6px 6px 6px 6px;
																				padding-top: 4px;
																			"
																		>
																			<tbody>
																				<tr>
																					<td
																						width="auto"
																						valign="middle"
																						align="left"
																						bgcolor="#bfbfbf"
																						style="
																							text-align: center;
																							font-weight: normal;
																							padding: 6px;
																							padding-left: 18px;
																							padding-right: 18px;
																							background-color: #bfbfbf;
																							color: #3f3f3f;
																							font-size: 13px;
																							font-family: Arial, Helvetica,
																								sans-serif;
																							border-radius: 4px;
																						"
																					>
																						<a
																							style="
																								text-decoration: none;
																								font-weight: normal;
																								color: #3f3f3f;
																								font-size: 13px;
																								font-family: Arial, Helvetica,
																									sans-serif;
																							"
																							target="_new"
																							href="https://let-app.vercel.app/"
																							>Ver casos de éxito</a
																						>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_textBlock_2"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="18"
										bgcolor="#ffffff"
										width="570"
										class="vb-container"
										style="
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 18px;
											border-spacing: 18px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td
													class="long-text links-color"
													width="100%"
													valign="top"
													align="left"
													style="
														font-weight: normal;
														color: #3f3f3f;
														font-size: 13px;
														font-family: Arial, Helvetica, sans-serif;
														text-align: left;
														line-height: normal;
													"
												>
													<h1>¿Te interesa saber los precios?</h1>
													<p style="margin: 1em 0px; margin-bottom: 0px">
														Tenemos precios diferentes para cada país, adaptados a
														la moneda local y a convenios con diversas empresas en
														toda Latinoamérica y España.
														<em
															><strong
																>Responde a esta mail para enviarte más
																información&nbsp;</strong
															></em
														>
													</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#bfbfbf"
					id="ko_bigSocialBlock_1"
					style="background-color: #bfbfbf"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="18"
										bgcolor="#ffffff"
										width="570"
										class="vb-container links-color socialLinks mobile-textcenter"
										style="
											font-size: 6px;
											border-collapse: separate;
											width: 100%;
											background-color: #ffffff;
											mso-cellspacing: 18px;
											border-spacing: 18px;
											max-width: 570px;
											-mru-width: 0px;
										"
									>
										<tbody>
											<tr>
												<td
													width="100%"
													valign="top"
													style="
														font-size: 6px;
														font-weight: normal;
														text-align: center;
													"
													align="center"
													class="links-color socialLinks mobile-textcenter"
												>
													&nbsp;<a
														style="display: inline-block; border-radius: 50px"
														target="_new"
														href="https://www.facebook.com/profile.php?id=100076017257031"
														><img
															border="0"
															src="https://mosaico.io/templates/versafix-1/img/icons/fb-rdcol-96.png"
															width="32"
															height="32"
															alt="Facebook"
															style="
																border: 0px;
																display: inline-block;
																vertical-align: top;
																padding-bottom: 0px;
															"
													/></a>
	
													&nbsp;<a
														style="display: inline-block; border-radius: 50px"
														target="_new"
														href="https://www.instagram.com/learnenglishtogether21/"
														><img
															border="0"
															src="https://mosaico.io/templates/versafix-1/img/icons/inst-rdcol-96.png"
															width="32"
															height="32"
															alt="Instagram"
															style="
																border: 0px;
																display: inline-block;
																vertical-align: top;
																padding-bottom: 0px;
															"
													/></a>
	
													&nbsp;<a
														style="display: inline-block; border-radius: 50px"
														target="_new"
														href="https://www.youtube.com/channel/UC59GSVajljgKmMCQboEyUDQ"
														><img
															border="0"
															src="https://mosaico.io/templates/versafix-1/img/icons/you-rdcol-96.png"
															width="32"
															height="32"
															alt="Youtube"
															style="
																border: 0px;
																display: inline-block;
																vertical-align: top;
																padding-bottom: 0px;
															"
													/></a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
	
				<!-- footerBlock -->
				<table
					role="presentation"
					class="vb-outer"
					width="100%"
					cellpadding="0"
					border="0"
					cellspacing="0"
					bgcolor="#3f3f3f"
					id=""
					style="background-color: #3f3f3f"
				>
					<tbody>
						<tr>
							<td
								class="vb-outer"
								align="center"
								valign="top"
								style="padding-left: 9px; padding-right: 9px; font-size: 0"
							>
								<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
								[endif]--><!--
				-->
								<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
									<table
										role="presentation"
										border="0"
										cellpadding="0"
										cellspacing="0"
										style="
											border-collapse: separate;
											width: 100%;
											mso-cellspacing: 0px;
											border-spacing: 0px;
											max-width: 570px;
											-mru-width: 0px;
										"
										width="570"
										class="vb-row"
									>
										<tbody>
											<tr>
												<td
													align="center"
													valign="top"
													style="font-size: 0; padding: 0 9px"
												>
													<div
														style="
															vertical-align: top;
															width: 100%;
															max-width: 552px;
															-mru-width: 0px;
														"
													>
														<!--
					-->
														<table
															role="presentation"
															class="vb-content"
															border="0"
															cellspacing="9"
															cellpadding="0"
															style="
																border-collapse: separate;
																width: 100%;
																mso-cellspacing: 9px;
																border-spacing: 9px;
															"
															width="552"
														>
															<tbody>
																<tr>
																	<td
																		class="long-text links-color"
																		width="100%"
																		valign="top"
																		align="center"
																		style="
																			font-weight: normal;
																			color: #919191;
																			font-size: 13px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: center;
																		"
																	>
																		<p
																			style="
																				margin: 1em 0px;
																				margin-bottom: 0px;
																				margin-top: 0px;
																			"
																		>
																			Email sent to
																			<a href="mailto:[mail]">[mail]</a>
																		</p>
																	</td>
																</tr>
																<tr>
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		style="
																			font-weight: normal;
																			color: #ffffff;
																			font-size: 13px;
																			font-family: Arial, Helvetica, sans-serif;
																			text-align: center;
																		"
																	>
																		<a
																			href="[unsubscribe_link]"
																			style="
																				color: #ffffff;
																				text-decoration: underline;
																			"
																			target="_new"
																			>Unsubscribe</a
																		>
																	</td>
																</tr>
																<tr style="text-align: center">
																	<td
																		width="100%"
																		valign="top"
																		align="center"
																		class="links-color"
																		style="text-align: center"
																	>
																		<!--[if (lte ie 8)]><div style="display: inline-block; width: 170px; -mru-width: 0px"><!
																		[endif]--><a
																			style="display: inline-block"
																			target="_new"
																			href="https://mosaico.io/?footerbadge"
																			><img
																				alt="MOSAICO Responsive Email Designer"
																				border="0"
																				hspace="0"
																				align="center"
																				vspace="0"
																				width="170"
																				src="https://mosaico.io/img/mosaico-badge.gif"
																				style="
																					border: 0px;
																					display: block;
																					vertical-align: top;
																					height: auto;
																					margin: 0 auto;
																					color: #3f3f3f;
																					font-size: 13px;
																					font-family: Arial, Helvetica,
																						sans-serif;
																					width: 100%;
																					max-width: 170px;
																				" /></a
																		>><!--[if (lte ie 8)]></div><![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!--
			--><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
							</td>
						</tr>
					</tbody>
				</table>
				<!-- /footerBlock -->
			</center>
			<!--[if !(gte mso 16)]-->
		</body>
		<!--<![endif]-->
	</html>
		`,
	};


	transporter.sendMail(customMailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});

	res.status(200);
}
