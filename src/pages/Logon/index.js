import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; //esse é uma biblioteca q tem todos os icones possiveis do react, tem material design (md), font awesome (fa), feather icons q é oq ele utilizara (FI)

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            // console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert("Falha no login, tente novamente.")
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BeTheHero"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro</Link>
                        {/* Utilizando o link ele não precisa recarregar o React inteiro / a pagina toda, ele só troca de rota */}
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes"/>
        </div>

    )
}