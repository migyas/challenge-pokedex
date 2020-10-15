import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ModalDetail from '../components/ModalDetail';

import Pokedex from '../pages/Pokedex';
import Search from '../pages/Search';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/pokemon/:pokemon" component={ModalDetail} />
        <Route path="/pokedex/" component={Pokedex} />
        <Redirect to={"/"}/>
    </Switch>
);

export default Routes;
