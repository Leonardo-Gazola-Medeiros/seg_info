import { Component, useRef, useState } from "react";
import './register.scss';
import { useNavigate } from 'react-router-dom';
// import ReactInputMask from 'react-input-mask';
// import MaskedInput from 'react-text-mask';
// import axios from 'axios';


export default function Register() {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [role, setRole] = useState('')

    return (
        <div className='register_wrapper'>
            <h1>Cadastrar novo usuário</h1>
            <form>
                <div className="form_wrapper">
                    <div className="input_wrapper">
                        <label htmlFor='name'>Nome</label>
                        <input placeholder='digite o nome' id='name' required onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor='surname'>Sobrenome</label>
                        <input placeholder='digite o sobrenome' id='surname' required onChange={(e) => { setSurname(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className="input_wrapper">
                        <label htmlFor='cpf'>CPF</label>
                        <input placeholder='digite o CPF' id='cpf' required onChange={(e) => { setCpf(e.target.value) }}></input>
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor='phone'>Telefone</label>
                        <input placeholder='digite o telefonee' id='phone' required onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className='input_wrapper'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='digite o email' id='email' required onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='confirm_email'>Confirmar email</label>
                        <input type='email' placeholder='confirme o email' id='confirm_email' required onChange={(e) => { setConfirmEmail(e.target.value) }}></input>
                    </div>
                </div>
                <div className="form_wrapper">
                    <div className='input_wrapper'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='digite a senha' id='password' required onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                    <div className='input_wrapper'>
                        <label htmlFor='confirm_password'>Confirmar senha</label>
                        <input type='password' placeholder='confirme a senha' id='confirm_password' required onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
                    </div>
                </div>
                <button className='register'>Cadastrar</button>
            </form>
        </div>
    )
}
