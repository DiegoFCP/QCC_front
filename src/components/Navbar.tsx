import './navbar.css';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='logo'>QCC</div>
            <ul className='nav-links'>
                <li><a href='#inicio'>Inicio</a></li>
                <li><a href='#caracteristicas'>Caracteristicas</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar