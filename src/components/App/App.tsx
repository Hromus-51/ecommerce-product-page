import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//==========================================
import Header from '../Header/Header';
import Main from '../Main/Main';
//==========================================
import GlobalStyles from '../../styles/global';
import { store, persistor } from '../../redux/store';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Header />
                    <Main />
                </PersistGate>
            </Provider>
            <GlobalStyles />
        </>
    );
}

export default App;