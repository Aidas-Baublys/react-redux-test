import { connect } from "react-redux";

import { buyIceCream } from "../redux";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of ice cream: {props.iceCream}</h2>
      <button onClick={props.buyIceCream}>Ice cream me!</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    iceCream: state.iceCream.iceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
