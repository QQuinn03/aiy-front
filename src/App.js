import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ReferenceLetter, PersonalStatement, HomePage } from "./components";

function App({ testInitialEntries }) {
  const RouterComponent = testInitialEntries ? MemoryRouter : Router;
  const routerProps = testInitialEntries
    ? { initialEntries: testInitialEntries }
    : {};

  return (
    <RouterComponent {...routerProps}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reference-letter" element={<ReferenceLetter />} />
        <Route path="/personal-statement" element={<PersonalStatement />} />

        {/* Add other routes if necessary */}
      </Routes>
    </RouterComponent>
  );
}
export default App;
