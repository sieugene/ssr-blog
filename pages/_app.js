import "../styles/global.css";
import { Provider } from "react-redux";
import { reduxStore } from "./../redux/store";

export default function App({ Component, pageProps }) {
  // const reduxStore = initStore();
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
