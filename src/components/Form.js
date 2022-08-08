import styles from './Form.css'

import logo from '../Assets/logo.png'

import { useState } from 'react'

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault()

    console.log('alo')
  }

  const showDetails = () => {
    console.log('teste')
  }

  return (
    <div id="container">
      <div className="title">
        <img className="logo" src={logo} />
        <h2>Cadastro de Associados - Atlética Granada</h2>
      </div>

      <div className="form">
        <form
          action="https://formsubmit.co/silvacaio295@gmail.com"
          method="POST"
        >
          <div className="input-group">
            <div className="input-box">
              <label for="name">Nome</label>
              <input
                id="name"
                type="text"
                name="nome"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="input-box">
              <label for="name">Telefone</label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="(xx) xxxx-xxxx"
              />
            </div>
            <div className="input-box">
              <label for="name">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email para contato"
              />
            </div>
          </div>

          <div className="plan">
            <div className="plan-title">
              <h2>Escolha seu plano de associação.</h2>
              <h4>
                Plano 1: Descontos em lojas parceiras, descontos em produtos da
                atlética, descontos em jogos da atlética.
              </h4>
              <h4>
                Plano 2: Todos os benefícios do Plano 1 + direito a 1 Kit Caneca
                + Tirante sem custos adicionais.
              </h4>
            </div>

            <div className="plan-group">
              <div className="plan-input">
                <input type="radio" id="plano1" name="plano1" />
                <label for="plano1">
                  Plano 1: R$ 70,00. Renovação por R$ 50,00.
                </label>
              </div>

              <div className="plan-input">
                <input type="radio" id="plano2" name="plano1" />
                <label for="plano2">
                  Plano 2: R$ 100,00. Renovação por R$ 80,00
                </label>
              </div>
            </div>
          </div>

          <div className="sports">
            <h2>Esportes que você pratica.</h2>
            <div className="sport-box">
              <div className="check-box">
                <input id="checkbox-1" type="checkbox" name="futebol" />
                <label for="checkbox-1">Futebol</label>
              </div>
              <div className="check-box">
                <input id="checkbox-2" type="checkbox" name="futsal" />
                <label for="checkbox-2">Futsal</label>
              </div>
              <div className="check-box">
                <input id="checkbox-3" type="checkbox" name="võlei" />
                <label for="checkbox-3">Vôlei</label>
              </div>
              <div className="check-box">
                <input id="checkbox-4" type="checkbox" name="handelbol" />
                <label for="checkbox-4">Handebol</label>
              </div>
              <div className="check-box">
                <input id="checkbox-5" type="checkbox" name="atletismo" />
                <label for="checkbox-5">Atletismo</label>
              </div>
              <div className="check-box">
                <input id="checkbox-6" type="checkbox" name="xadrez" />
                <label for="checkbox-6">Xadrez</label>
              </div>
              <div className="check-box">
                <input id="checkbox-7" type="checkbox" name="truco" />
                <label for="checkbox-7">Truco</label>
              </div>
              <div className="check-box">
                <input id="checkbox-8" type="checkbox" name="E-sports" />
                <label for="checkbox-8">E-sports</label>
              </div>
              <div className="check-box">
                <input id="checkbox-9" type="checkbox" name="outros" />
                <label for="checkbox-9">Outros</label>
              </div>
            </div>
          </div>
          <input type="submit" onclick={handleSubmit}></input>
        </form>
      </div>
    </div>
  )
}

export default Form
