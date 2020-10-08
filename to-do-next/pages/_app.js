import '../src/assets/tailwind.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import reducers from '../src/reducers/index';
import thunk from 'redux-thunk';
import "../src/assets/antd.css";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, applyMiddleware(thunk));

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store} >
      <Component {...pageProps} />;
    </Provider>
  )
};

export default MyApp;

