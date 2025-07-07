import { Link, Outlet } from 'react-router-dom';
import BannerGradiente from '../../componentes/BannerGradiente';
import './Pedidos,css';

export default function Pedidos() {
    return (
        <div>
            <BannerGradiente titulo='Meus pedidos' />
            
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}