import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api'

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile () {

    const [incidents, setIncidents] = useState([]); //ce vai pegar um conjunto de informações do backend, então começa vazio
    
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers : {
                Authorization : ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers : {
                    Authorization : ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err) {
            alert("Erro ao deletar caso, tente novamente!");
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower onClick={handleLogout} size={18} color="#E02041"/>

                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                                    <li key={incident.id}>
                                    <strong>CASO:</strong>
                                    <p>{incident.title}</p>
                
                                    <strong>DESCRIÇÃO</strong>
                                    <p>{incident.description}</p>
                
                                    <strong>VALOR</strong>
                                    <p>{Intl.NumberFormat('pt-BR', { style : 'currency', currency : 'BRL'}).format(incident.value)}</p>
                                    {/* Noice, esse Intl é uma biblioteca JS que tem formatação de numero e data 
                                    Ai vc passa como parametro a lingua, o objeto de configuração que formatará o valor passado*/}
                                    
                                    <button onClick={() => handleDeleteIncident(incident.id)} type="button"> {/* passou uma arrow function pq senão ele ia deletar todos os incidents, n um em especifico*/}
                                        <FiTrash2 size={20} color="#a8a8b3"/>
                                    </button>
                                </li>
                ))}                {/* pra cada incident, ele vai retornar esse JSX */}
            </ul>
        </div>
    );
}