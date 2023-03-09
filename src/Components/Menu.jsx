import './Menu.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import header from '../img/header.png';

const Menu = () => {
    return (
        <div className='centrar'>
            <header className="Cabecera mt-2 d-flex justify-content-arrownd">
                <div className="text-center mt-3">
                    <img src={header} alt="Header" style={{ width: "300px", height: "auto" }}/>
                </div>
                <div className='menu_header centrar'>
                    <h1 className="Cabecera-h1">
                        <a href="#" className="Cabecera-a">
                            Personajes
                        </a>
                    </h1>
                    <h1 className="Cabecera-h1">
                        <a href="#" className="Cabecera-a">
                            Episodios
                        </a>
                    </h1>
                    <h1 className="Cabecera-h1">
                        <a href="#" className="Cabecera-a">
                            Lugares
                        </a>
                    </h1>
                </div>
            </header>
        </div>
    )
};

export default Menu;