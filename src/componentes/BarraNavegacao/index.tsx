import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import ModalLoginUsuario from "../ModalLoginUsuario"
import { useState } from "react"

const BarraNavegacao = () => {

    const [modalBooleanCadastro, setModalBooleanCadastro] = useState(false);
    const [modalBooleanLogin, setModalBooleanLogin] = useState(false);

    const token = sessionStorage.getItem('token')

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null);

    function aoEfetuarLogin() {
        setModalBooleanLogin(false)
        setUsuarioEstaLogado(true)
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {!usuarioEstaLogado && (<>
                <li>
                    <BotaoNavegacao
                        texto="Login"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalBooleanLogin(true)}
                    />
                    <ModalLoginUsuario
                        aberta={modalBooleanLogin}
                        aoFechar={() => setModalBooleanLogin(false)}
                        aoEfetuarLogin={aoEfetuarLogin}
                    />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalBooleanCadastro(true)}
                    />
                    <ModalCadastroUsuario
                        aberta={modalBooleanCadastro}
                        aoFechar={() => setModalBooleanCadastro(false)} />
                </li>
            </>)}
            {usuarioEstaLogado && (<>
                <li>
                    <Link to="/minha-conta/pedidos">Minha conta</Link>
                </li>
            </>)}
        </ul>
    </nav>)
}

export default BarraNavegacao