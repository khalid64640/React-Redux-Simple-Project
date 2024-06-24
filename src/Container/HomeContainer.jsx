
import Home from "../Components/Home";
import {connect} from 'react-redux'
import { addToCart,removeToCart } from "../Services/Actions/Action";

const mapStateToProps=state=>({
    data:state.cardItems
})

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: () => dispatch(removeToCart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
