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

      <div className="benefits">
        <h3>Beneficios Associados Granada</h3>
        <h4>Desconto Em estabelecimentos parceiros</h4>
        <h4>Desconto Em produtos da atlética</h4>
        <h4>Desconto Em entrada de eventos</h4>
        <h4>Desconto Em jogos Organizados pela atlética</h4>
        <h4>Carteirinha de socio</h4>
        <h4>Grupo exclusivo no Whatsapp</h4>
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
              <label for="name">Numero</label>
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
                placeholder="Email para contato"
              />
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
