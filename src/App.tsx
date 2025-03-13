// The App component is the root component that imports other components
// to break up the HTML rendering task amongst a hierarchy of components

// For how we are just rendering the Labs component,
// which for now it's rendering just the Lab1 component

import Labs from "./Labs";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
    <div>
    <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Labs/Lab2" element={<Labs />} />
          <Route path="/Labs/Lab3" element={<Labs />} />
          <Route path="/" element={<Navigate to="Kambaz"/>}/>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
    </div>
    </Provider>
    </HashRouter>
);}
