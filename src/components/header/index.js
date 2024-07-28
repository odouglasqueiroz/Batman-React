import React, { useContext } from 'react';
import './styles.css'
import { UserContext } from '../../contexts/userContext';

function Header(){
    const {login, setLogin} = useContext (UserContext);

    return(
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Fotos</li>
                    <li>Contato</li>
                    <li onClick={() => setLogin (!login)}>{login ? 'Deslogar' : 'Login'}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;