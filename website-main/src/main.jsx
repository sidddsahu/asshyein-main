import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./pages/Redux/Store.js";
import App from "./App.jsx";

// CSS imports
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/animate.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/style.css";

// JS imports
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/jquery-ui.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <Provider store={store}>
      <ToastContainer position='top-right' autoClose={5000} />
      <App />
    </Provider>
  </BrowserRouter>
);
