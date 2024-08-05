import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/batman.png";

function Footer() {
  return (
    <>
      <footer>
        <img id="logos" src={Logo} />
        <span>Os direitos reservados ©</span>
        <span>Desenvolvido por: Douglas Queiroz</span>

        <nav className="footer-navigation">
          <ul className="footer-list">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>

            <Link to="/contato" style={{ textDecoration: "none" }}>
              <li> Contato </li>
            </Link>

            <Link to="/fotos" style={{ textDecoration: "none" }}>
              <li> Fotos </li>
            </Link>

            <Link to="/comentarios" style={{ textDecoration: "none" }}>
              <li> Comentários </li>
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
