import { Link } from "react-router-dom";
import { logoImg, navLinks } from "../utils";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-transparent">
            <div className="container">
                <Link to={"/"}>
                    <img src={logoImg} width="230" alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="fa fa-bars"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        {navLinks.map((nav) => (
                            <li
                                className={`nav-item ${
                                    nav.is_active ? "active" : ""
                                } mr-4`}
                                key={nav.id}
                            >
                                <Link to={nav.route} className="nav-link">
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
