import React, { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return <div>SignupForm</div>;
}

export default SignupForm;
