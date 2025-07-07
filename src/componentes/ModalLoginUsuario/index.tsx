import { AbBotao, AbCampoTexto, AbModal } from 'ds-alurabooks';
import axios from 'axios';
import './ModalLoginUsuario.css';

import loginImg from './assets/login.png';
import { useState } from 'react';

interface ModalLoginUsuarioProps {
    aberta: boolean
    aoFechar:() => void
    aoEfetuarLogin:() => void
}

export default function ModalLoginUsuario({ aberta, aoFechar, aoEfetuarLogin }: ModalLoginUsuarioProps) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function submitForm(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        const dados = {
            email,
            senha
        }
        axios.post('http://localhost:8000/public/login', dados)
        .then(resposta => {
            sessionStorage.setItem('token', resposta.data.access_token)
            setEmail('')
            setSenha('')
            aoEfetuarLogin()
        })
        .catch(erro => {
            if(erro?.response?.data?.message) {
                alert(erro.response.data.message)
            } else {
                alert('Erro inesperado')
            }
        })
    }

    return (
        <AbModal
            titulo="Login"
            aberta={aberta}
            aoFechar={aoFechar}
        >
            <section
                className='corpoModalLogin'
            >
                <figure>
                    <img src={loginImg} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
                </figure>


                <div className='content'>

                    <form onSubmit={submitForm}>
                        <AbCampoTexto
                            label='E-mail'
                            value={email}
                            onChange={setEmail}
                            type='email'
                            placeholder='seuemail@book.com.br'
                        />
                        <AbCampoTexto
                            label='Senha'
                            value={senha}
                            onChange={setSenha}
                            type='password'
                            placeholder='********'
                        />

                        <div className='to-enter-button'>
                            <a href='/'>Esqueci minha senha</a>
                            <AbBotao texto='Fazer login' />
                        </div>
                    </form>
                    <div className='register'>
                        <h6>Ainda não tem uma conta?</h6>
                        <AbBotao texto='Criar conta' />
                    </div>
                </div>
            </section>


        </AbModal>
    )
}