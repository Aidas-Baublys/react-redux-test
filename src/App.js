import { Provider } from "react-redux";

import store from './redux/store';
import UserContainer from "./components/UserContainer";
import CakeContainer from "./components/CakeContainer.js";
import HooksCakeContainer from "./components/HooksCakeContainer.js";
import IceCreamContainer from "./components/IceCreamContainer.js";
import ItemContainer from "./components/ItemContainer.js";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
}

export default App;
