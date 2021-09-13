import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";
// import { uiActions } from "./store/ui-slice";

let isInitial = true; //Will NOT change if Component will rendered again

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  // console.log(notification);
  // useEffect(() => {
  //   console.log("useEffect");
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending Cart Data",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-a64f7-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //       { method: "PUT", body: JSON.stringify(cart) }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending Cart Data Failed!");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success",
  //         message: "Sent Cart Data Successfully",
  //       })
  //     );
  //   };
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartData().catch((error) =>
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sending Cart Data Failed",
  //       })
  //     )
  //   );
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
