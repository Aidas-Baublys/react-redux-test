import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux";

function HooksCakeContainer() {
  const cakes = useSelector(state => state.cake.cakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cakes: {cakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy only 1 cake</button>
    </div>
  );
}

export default HooksCakeContainer;
