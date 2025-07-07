import { Link } from 'react-router-dom';
import Banner from '../../componentes/Banner';
import BannerGradiente from '../../componentes/BannerGradiente';
import Newsletter from '../../componentes/Newsletter';
import Pedidos from '../../componentes/Pedidos';
import TagsCategorias from '../../componentes/TagsCategorias';
import './MyAccount.css';

export default function MyAccount() {
    return (
        <section className='MyAccount'>
            <BannerGradiente titulo='Minha conta' />
            <ul className='filtro'>
                <li className='select'>
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
        </section>
    )
}