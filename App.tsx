import React, { useState } from "react";

function LoginForm() {
  return (
    <div className="form-box login">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <div className="forgot-link">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="form-box register">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <i className="bx bxs-envelope"></i>
        </div>

        <div className="select-box">
          <select name="role" required>
            <option value="" disabled selected hidden>
              Select One
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="factor">Factor</option>
          </select>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default function App() {
  const [isActive, setIsActive] = useState(false);

  // دمج التنسيقات مباشرة لحل مشكلة استيراد الملف الخارجي
  const cssStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    .main-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #081b29;
    }

    .container {
      position: relative;
      width: 850px;
      height: 550px;
      background: transparent;
      border: 2px solid #00abf0;
      box-shadow: 0 0 25px #00abf0;
      overflow: hidden;
      border-radius: 15px;
    }

    .form-box {
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 40px;
      transition: .6s ease-in-out;
      color: #fff;
      z-index: 1;
    }

    .form-box.login { left: 0; }
    .container.active .form-box.login { left: -50%; }
    .form-box.register { right: -50%; }
    .container.active .form-box.register { right: 0; }

    .form-box h1 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 20px;
    }

    .input-box, .select-box {
      position: relative;
      width: 100%;
      height: 50px;
      margin: 15px 0;
    }

    .input-box input,
    .select-box select {
      width: 100%;
      height: 100%;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, .2);
      border-radius: 40px;
      outline: none;
      font-size: 16px;
      color: #fff;
      padding: 0 45px 0 20px;
      transition: 0.3s;
    }

    .input-box input:focus,
    .select-box select:focus {
      border-color: #00abf0;
    }

    .input-box i {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
    }

    .select-box select {
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }

    .select-box::after {
      content: '\\eb60';
      font-family: 'boxicons';
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      pointer-events: none;
      color: #fff;
    }

    .select-box select option {
      background: #081b29;
      color: #fff;
    }

    .forgot-link {
      text-align: right;
      margin: -10px 0 15px;
    }

    .forgot-link a {
      color: #fff;
      font-size: 14.5px;
      text-decoration: none;
    }

    .btn {
      width: 100%;
      height: 45px;
      background: #00abf0;
      border: none;
      outline: none;
      border-radius: 40px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      cursor: pointer;
      font-size: 16px;
      color: #fff;
      font-weight: 600;
      transition: 0.3s;
    }

    .btn:hover {
      background: #0081b5;
      box-shadow: 0 0 15px #00abf0;
    }

    .toggle-box {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      background: #00abf0;
      transition: .6s ease-in-out;
      border-radius: 150px 0 0 150px;
      z-index: 10;
    }

    .container.active .toggle-box {
      left: 0;
      border-radius: 0 150px 150px 0;
    }

    .toggle-panel {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      transition: .6s ease-in-out;
    }

    .toggle-left { left: 0; transform: translateX(0); }
    .container.active .toggle-left { transform: translateX(-100%); }
    .toggle-right { right: -100%; transform: translateX(0); }
    .container.active .toggle-right { right: 0; }

    .toggle-panel h1 { font-size: 30px; margin-bottom: 10px; }
    .toggle-panel button {
      background: transparent;
      border: 2px solid #fff;
      margin-top: 20px;
      width: 150px;
      height: 45px;
      border-radius: 40px;
      cursor: pointer;
      color: #fff;
      font-weight: 600;
    }
  `;

  return (
    <div className="main-wrapper">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <style>{cssStyles}</style>

      <div className={`container ${isActive ? "active" : ""}`}>
        <LoginForm />
        <RegisterForm />

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="register-btn" onClick={() => setIsActive(true)}>
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="login-btn" onClick={() => setIsActive(false)}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
