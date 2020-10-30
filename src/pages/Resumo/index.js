import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Header from '../../components/Header'
import PassosImage from '../../images/passos-img.svg'
import '../../styles/Resumo.css'

class Resumo extends Component {

    constructor(props) {
        super()
        this.state = {
            passos: 0,
            altura: 0,
            peso: 0,
            imc: {
                valor: 0,
                situacao: 'indeterminado'
            },
            pressaoArterial: {
                diastolica: 0,
                sistolica: 0
            }
        }
    }

    render() {
        return (
            <div id='mainResumo'>
                <Header></Header>
                <div class='card'>
                    <h1>{this.state.passos}</h1>
                    <h2>Passos</h2>
                    <img src={PassosImage}></img>
                </div>
                <div class='card'>
                    <h1>{this.state.peso}Kg</h1>
                    <h2>Peso</h2>
                </div>

                <div class='card'>
                    <h1>{this.state.altura}m</h1>
                    <h2>Altura</h2>
                </div>

                <div class='card'>
                    <h1>{this.state.imc.valor} IMC</h1>
                    <h2>{this.state.imc.situacao}</h2>
                </div>

                <div class='card'>
                    <h1>{this.state.pressaoArterial.diastolica}/{this.state.pressaoArterial.sistolica}</h1>
                    <h2>Pressão Arterial</h2>
                </div>
                <div class="card" id="card-button">
                    <button>Esportes</button>
                </div>
                <div class="card" id="card-button">
                    <button>Alimentos</button>
                </div>
            </div>
        )
    }
}

export default Resumo;