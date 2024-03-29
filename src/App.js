import './style.scss'
import Login from './components/Login';

function App() {

  return (
    <div className='container'>
      <header className='header'>
        <h3 className='logo'>Brand name</h3>

        <p className='head__items'>Home</p>
        <p className='head__items'>Product</p>
        <p className='head__items'>Pricing</p>
        <p className='head__items'>Contact</p>

        <p className='header__item'>Login</p>
        <button className='header__btn'>Become a member</button>
      </header>
      <div className="hero ">
        <h1 className="title">Sign in</h1>
        <p className="subTitle">Sign in and start managing your candidates!</p>

        <div className='inp-btn'>
          <input className="inp" type="text" placeholder="Login" onChange={(e) => setUsername(e.target.value)} />
          <input className="inp" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <div className='bottom'>
            <div id="inputPreview">

              <input name="cssCheckbox" id="demo_opt_1" type="checkbox" class="css-checkbox" onChange={(e) => setRemember(e.target.checked)} />
              <label className='bottom__title' for="demo_opt_1">Remember me</label>

              <p className='forgot'>Forgot password?</p>
            </div>
          </div>

          <button className="btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
