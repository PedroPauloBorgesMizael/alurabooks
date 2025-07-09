import { useEffect, useState } from 'react';
import './Pedidos.css';
import { AbBotao } from 'ds-alurabooks';
import { IPedido } from '../../interfaces/IPedido';
import http from '../../http';

export default function Pedidos() {

    const formatador = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'})

    const [pedidos, setPedidos] = useState<IPedido[]>([])
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        http.get<IPedido[]>("pedidos")
        .then(reposta => setPedidos(reposta.data))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <section className='pedidos'>
            <h2>Meus pedidos</h2>

            {pedidos.map(pedido => 
                <div className='pedido' key={pedido.id}>
                <ul>
                    <li>Pedido: <strong>{pedido.id}</strong></li>
                    <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                    <li>Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                    <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                </ul>
                <AbBotao texto='Detalhes' />
            </div>
            )}
        </section>
    )
}