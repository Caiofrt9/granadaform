import styles from './Form.css'

import logo from '../Assets/logo.png'

import { useState } from 'react'

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div id="register">
      <div className="title">
        <img className="logo" src={logo} />
        <h2>Faça parte da nossa atlética.</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Turma" />
        <input type="email" placeholder="E-mail" />
        <input type="number" placeholder="Telefone" />
        <input className="btn" type="submit"></input>
      </form>
    </div>
  )
}

export default Form
