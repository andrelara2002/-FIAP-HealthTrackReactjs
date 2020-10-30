import React, { Component } from 'react';
import '../../styles/login.css'
import enterarrow from '../../images/enter-arrow.svg'
import heroimage from '../../images/login_image.svg'
import Header from '../../components/Header'
import '../../styles/root.css'


class Login extends Component {
    constructor(props) {
        super()
        this.autenticar = this.autenticar.bind(this)

        this.state = {
            usuarios: 'health',
            senhas: 'track'
        }
    }

    autenticar() {
        const { usuarios, senhas } = this.state

        const usuarioInput = document.getElementById('usuarioInput')
        const senhaInput = document.getElementById('senhaInput')
        const buttonElement = document.querySelector('button')

        let usuario = usuarioInput.value
        let senha = senhaInput.value

        if (usuario === usuarios && senha === senhas) {
            alert('autenticacao realizada com sucesso')
            this.props.history.push('./resumo')
        }
        else {
            usuarioInput.style.borderColor = 'lightcoral';
            senhaInput.style.borderColor = 'lightcoral';
            buttonElement.style.background = 'red';

            usuarioInput.placeholder = 'Usuario: health';
            senhaInput.placeholder = 'Senha: track';
        }
    }

    render() {
        return (
            <div id='main'>
                <Header></Header>
                <div class='mainLogin'>
                    <h2>Vamos Começar</h2>
                    <h1>Faça seu Login</h1>

                    <img src={heroimage} id='heroimage' alt='Hero'></img>

                    <label for='usuario'>Usuario</label>
                    <input type='text' name='usuario' id='usuarioInput'></input>
                    <label for='senha'>Senha</label>
                    <input type='text' name='senha' id='senhaInput'></input>
                    <button onClick={this.autenticar}><img src={enterarrow} alt='Entrar'></img></button>
                </div>
            </div>

        )
    }
}

export default Login;