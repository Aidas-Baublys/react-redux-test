import { useState } from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes: {props.cakes}</h2>
      <label>
        How many cakes would you like to buy?
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      </label>
      <button onClick={() => props.buyCake(number)}>Buy {number}!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cakes: state.cake.cakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
