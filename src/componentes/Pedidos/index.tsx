import { AbBotao } from 'ds-alurabooks';
import './Pedidos.css';
import { Link } from 'react-router-dom';

export default function Pedidos() {
    return (
        <section className='pedidos'>

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

            <div className='pedidos-container'>

                <h2>Pedidos</h2>
                <div className='pedidos-content'>
                    <div className='pedidos-informacoes'>
                        <p>Pedido: <strong>123456</strong></p>
                        <p>Data do pedido: <strong>20/06/2025</strong></p>
                        <p>Valor total: <strong>R$ 90,00</strong></p>
                        <p>Entrega realizada em: <strong>27/06/2025</strong></p>
                    </div>
                    <AbBotao texto='Detalhes' />
                </div>
            </div>
        </section>
    )
}