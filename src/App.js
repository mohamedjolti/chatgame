import { Provider } from 'react-redux';
import { store } from './store/store';
import { Chat } from './components/ChatComponent/Chat';
import Private from './components/PrivateComponent/Private';
function App() {
  return (
    <Provider store={store}>

    <div className="App">
       <Private/>
    </div>
    </Provider>
  );
}

export default App;
