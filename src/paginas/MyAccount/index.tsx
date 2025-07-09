import { Link, Outlet } from 'react-router-dom';
import BannerGradiente from '../../componentes/BannerGradiente';
import './MyAccount.css';

export default function MyAccount() {
    return (
        <>
            <BannerGradiente titulo='Minha conta' />
            <section className='MyAccount'>
                <ul className='filtro'>
                    <li>
                        <Link to='/area-logada/pedidos'>Pedidos</Link>
                    </li>
                    <li>
                        <Link to='/area-logada/trocas'>Trocas</Link>
                    </li>
                    <li>
                        <Link to='/area-logada/cupons'>Cupons</Link>
                    </li>
                    <li>
                        <Link to='/area-logada/dados'>Seus dados</Link>
                    </li>
                </ul>
                <div className="conteudo">
                    <Outlet />
                </div>
            </section>
        </>
    )
}