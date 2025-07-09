import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'
import http from "../../http";

interface ModalCadastroUsuarioProps {
    aberta: boolean
    aoFechar: () => void
}

const ModalCadastroUsuario = ({ aberta, aoFechar }: ModalCadastroUsuarioProps) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')

    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        http.post('public/registrar', usuario)
            .then(() => {
                setNome('')
                setEmail('')
                setSenha('')
                setEndereco('')
                setCep('')
                setComplemento('')
                aoFechar()
                alert('Usuário foi cadastrado com sucesso!')
            })
            .catch(() => {
                alert('OPS! Alguma coisa deu errado')
            })
    }

    return (<AbModal 
        titulo="Cadastrar" 
        aberta={aberta}
        aoFechar={aoFechar}    
    >
        <section className="corpoModalCadastro">
            <figure>
                <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={aoSubmeterFormular}>
                <AbCampoTexto 
                    label="Nome"
                    value={nome}
                    onChange={setNome}
                    placeholder="Seu nome completo"
                />
                <AbCampoTexto 
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                    placeholder="seuemail@books.com.br"
                />
                <AbCampoTexto 
                    label="Endereço"
                    value={endereco}
                    onChange={setEndereco}
                    placeholder="Sua rua e número"
                />
                <AbCampoTexto 
                    label="Complemento"
                    value={complemento}
                    onChange={setComplemento}
                    placeholder="Apto/casa, bloco, referência"
                />
                <AbCampoTexto 
                    label="CEP"
                    value={cep}
                    onChange={setCep}
                    placeholder="XXXXX-XXX"
                />
                <AbCampoTexto 
                    label="Senha"
                    value={senha}
                    onChange={setSenha}
                    type="password"
                    placeholder="*********"
                />
                <AbCampoTexto 
                    label="Confirmação da senha"
                    value={senhaConfirmada}
                    onChange={setSenhaConfirmada}
                    type="password"
                    placeholder="*********"
                />
                <div className="acoes">
                    <AbBotao texto="Cadastrar"/>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalCadastroUsuario