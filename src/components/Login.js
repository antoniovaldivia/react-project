import React from "react"

const Login = () => {
  return (
    <main className="container flex-grow">
    <ul className="display-box-grid">
      <li>
      </li>
      <li>
        <section className="container-box">
          <h1>Sign in</h1>
          <form className="login-form">
            <ul>
              <li>
                <label>E-mail or username</label>
                <input type="text" placeholder="E-mail or username" className="login-form-input"/>
              </li>
              <li>
                <label>Password</label>
                <input type="password" placeholder="Password" className="login-form-input"/>
              </li>
              <li>
                <input type="checkbox" name="remember" value="{1}" className="login-form-checkbox"/>
                <label>Remember me</label>
              </li>
              <li>
                <input type="submit" name="submit" value="Log in" className="login-form-submit"/>
              </li>
              <li>
              <Link to="/">Create account</Link>
              </li>
              <li>
              <Link to="/">Forgot password?</Link>
              </li>
              <li>
              <Link to="/">Resend activation e-mail</Link>
              </li>
            </ul>
          </form>
        </section>
      </li>
      <li />
    </ul>
  </main>
  )
}

export default Login