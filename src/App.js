import React from "react";
import "./App.css";
import "./index.css";

import { Navbar } from "./components";
import { Features, Footer, Header, WhatAIY } from "./containers";

// function App({ testInitialEntries }) {
//   const RouterComponent = testInitialEntries ? MemoryRouter : Router;
//   const routerProps = testInitialEntries
//     ? { initialEntries: testInitialEntries }
//     : {};

//   return (
//     <RouterComponent {...routerProps}>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/reference-letter" element={<ReferenceLetter />} />
//         <Route path="/personal-statement" element={<PersonalStatement />} />

//         {/* Add other routes if necessary */}
//       </Routes>
//     </RouterComponent>
//   );
// }
// export default App;
const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Header />

      <WhatAIY />
      <Features />
      <Footer />
    </div>
  );
};
export default App;
