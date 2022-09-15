import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Routes } from './navigation/routes/routes';
import history from '~client/history';
import configureStore from '~store/configureStore';
import '~gui-library/src/style/global.less';
import './styles/global.less';

const store = configureStore(history);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('content'));
