import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/redux/store";
import App from "./app/App.jsx";
import "./app/styles/index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
}
