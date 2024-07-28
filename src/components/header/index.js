import React, { useContext, useEffect } from 'react';
import './styles.css'
import { UserContext } from '../../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const { login, setLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const active = false;

    useEffect(() => {
        if (active) {
            navigate ('contato')
        } else {
            navigate('fotos')
        }
    }, [])

    return (
        <div>
            <nav>
                <ul>
                    <Link>
                        <li>Home</li>
                    </Link>
                    <Link to='/fotos'>
                        <li> Fotos </li>
                    </Link>
                    <Link to='/contato'>
                    <li>Contato</li>
                    </Link>
                    
                    <li onClick={() => navigate('contato')}>Login</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;