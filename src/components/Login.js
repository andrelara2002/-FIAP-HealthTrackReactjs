import React, { Component } from 'react';
import '../styles/login.css'
import enterarrow from '../images/enter-arrow.svg'
import heroimage from '../images/login_image.svg'
class Login extends Component {
    constructor(props){
        super()
        this.autenticar = this.autenticar.bind(this)

        this.state = {
            usuarios: 'health',
            senhas: 'track'
        }
    }

    autenticar(){
        const {usuarios, senhas} = this.state

        const usuarioInput = document.getElementById('usuarioInput')
        const senhaInput = document.getElementById('senhaInput')

        let usuario = usuarioInput.value
        let senha = senhaInput.value

        if(usuario === usuarios && senha === senhas){
            alert('autenticacao realizada com sucesso')
        }
        else{
            alert('dados informados de forma errada')
        }
    }

    render() {
        return (
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
        )
    }
}

export default Login;