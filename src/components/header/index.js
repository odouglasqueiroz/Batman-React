import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/batman.png";

function Header() {

    return (
        <header>
            <Link to='/home'>
             <img id="logo" src={Logo} />
            </Link>
            <nav>
                <ul>
                    <Link to='/home' style={{ textDecoration: "none" }}>
                        <li>Home</li>
                    </Link>

                    <Link to="/contato" style={{ textDecoration: "none" }}>
                        <li> Contato </li>
                    </Link>

                    <Link to="/fotos" style={{ textDecoration: "none" }}>
                        <li> Fotos </li>
                    </Link>

                    <Link to="/comentarios" style={{ textDecoration: "none" }} >
                        <li> Comentários </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
