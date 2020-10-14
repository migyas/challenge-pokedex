import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import Search from '../pages/Search';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/pokedex/:pokemon" component={Pokedex} />
        <Redirect to={"/"}/>
    </Switch>
);

export default Routes;
