import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SpeechProvider appId="f7924af4-e0cf-4f66-81ef-f6111850b6c4" debug logSegments>
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>
);
// 424064b3-aca0-4cee-83b9-ebdcb7368612  appId no longer working

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
