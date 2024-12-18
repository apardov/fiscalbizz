import './Login.css';

export const Login = () => {
	return (
		<>
			<section className="p-3 p-md-4 p-xl-5 mt-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-md-7 col-lg-5 col-xl-6 col-xxl-5">
							<div className="card border border-light-subtle rounded-4">
								<div className="card-body p-3 p-md-4 p-xl-5">
									<div className="row">
										<div className="col-12">
											<div className="mb-5">
												<h4 className="text-center">Login</h4>
											</div>
										</div>
									</div>
									<form action="#!">
										<div className="row gy-3 overflow-hidden">
											<div className="col-12">
												<div className="form-floating mb-3">
													<input type="email" className="form-control" name="email" id="email"
													       placeholder="name@example.com" required/>
													<label className="form-label">Email</label>
												</div>
											</div>
											<div className="col-12">
												<div className="form-floating mb-3">
													<input type="password" className="form-control" name="password"
													       id="password" value="" placeholder="Password" required/>
													<label className="form-label">Contraseña</label>
												</div>
											</div>
											<div className="col-12">
												<div className="d-grid">
													<button className="btn btn-warning btn-login"
													        type="submit">Ingresar
													</button>
												</div>
											</div>
										</div>
									</form>
									<div className="row">
										<div className="col-12">
											<hr className="mt-5 mb-4 border-secondary-subtle"/>
											<div
												className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
												<a href="#!" className="link-secondary text-decoration-none">Crear
													Cuenta</a>
												<a href="#!" className="link-secondary text-decoration-none">Olvide
													Contraseña</a>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 mb-5 mt-5">
											<div className="d-flex gap-2 gap-sm-3 justify-content-center">
												<a href="#!" className="btn btn-lg btn-outline-danger p-3 lh-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
													     fill="currentColor" className="bi bi-google"
													     viewBox="0 0 16 16">
														<path
															d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
													</svg>
												</a>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}