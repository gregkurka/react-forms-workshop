import React, { useState } from "react";
import SignupForm from "./components/SignupForm/SignupForm";
import Authenticate from "./components/Authenticate/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignupForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
