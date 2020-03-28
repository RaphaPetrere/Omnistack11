import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; //esse é uma biblioteca q tem todos os icones possiveis do react, tem material design (md), font awesome (fa), feather icons q é oq ele utilizara (FI)

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BeTheHero"/>
                
                <form>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID"/>
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