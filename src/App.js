import './App.css';
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer.js";
import HooksCakeContainer from "./components/HooksCakeContainer.js";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
