import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { /*Link,*/ useHistory } from "react-router-dom";
import "./css/auth.css";
import { emailLogin } from "../../actions";

function Auth({ user, isLoading, emailLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect fired", user);
    if (user) {
      history.push("/");
      localStorage.setItem("__teste", JSON.stringify(user));
    }
  }, [isLoading, user, history]);

  const submitEmailLoginForm = async (e) => {
    e.preventDefault();
    const authData = { email, password };
    await emailLogin(authData);
  };

  return (
    <div className="wrapper fade-in-down">
      <div id="formContent">
        <div className="fade-in first">
          <h1>Administração</h1>
        </div>
        <form onSubmit={submitEmailLoginForm}>
          <input
            className="fade-in second"
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="fade-in third"
            placeholder="senha"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="fade-in fourth" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.isUserReducer.user,
  isLoading: state.isUserReducer.isLoading,
});

const mapDispatcherstoProps = {
  emailLogin: emailLogin,
};
const connectedAuth = connect(mapStateToProps, mapDispatcherstoProps)(Auth);
export { connectedAuth as Auth };
// <div id="formFooter">
//     <Link className="underlineHover" href="/">Forgot Password?</Link>
// </div>
