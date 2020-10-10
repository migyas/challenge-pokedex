import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import store from './store';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Provider store={store}>
                <Routes />
            </Provider>
        </BrowserRouter>
        <GlobalStyles />
    </>
);

export default App;
