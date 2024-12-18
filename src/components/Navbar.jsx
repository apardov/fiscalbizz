import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
	return (
		<>
			<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="FiscalBizz" width="50" height="50" className={"rounded-circle"}/>
					</Link>
					<Link className="navbar-brand brand me-5" to={"/"}>FiscalBizz</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
					        aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse mt-4" id="navbarNav">
						<ul className="navbar-nav ms-3">
							<li className="nav-item">
								<Link className="nav-link" to={"/"}>Inicio</Link>
							</li>
							<li className="nav-item dropdown mb-3">
								<a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
								   aria-expanded="false">
									Aplicaciones
								</a>
								<ul className="dropdown-menu custom-dropdown-menu">
									<li>
										<Link to={"/tax"} className={"dropdown-item"}>Calculo Impuesto</Link>
									</li>
									<li>
										<Link to={"/rent"} className={"dropdown-item"}>Arrendamiento</Link>
									</li>
									<li>
										<Link to={"/housesale"} className={"dropdown-item"}>IVA Viviendas Nuevas</Link>
									</li>
								</ul>
							</li>
						</ul>
						{/*<div className={"ms-auto"}>
							<button className="btn btn-outline-secondary me-4" type="submit">Login</button>
						</div>*/}
					</div>
				</div>
			</nav>
		</>
	)
}