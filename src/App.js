import { Provider } from "react-redux";

import store from './redux/store';
import CakeContainer from "./components/CakeContainer.js";
import HooksCakeContainer from "./components/HooksCakeContainer.js";
import IceCreamContainer from "./components/IceCreamContainer.js";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
