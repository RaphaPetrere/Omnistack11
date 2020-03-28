import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                {/* garante q uma rota é chamada por momento */}
                {/* Pq utilizamos o exact : O react route tem como padrão utilizar o path q começa com o texto passado
                logo, como todo caminho começa com um /, ele sempre ia cair no Login, ai passando o parametro exact
                ele só cai no login se for só / msm, se for /register vai pro register */}
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>

            </Switch>
        </BrowserRouter>
    )
}