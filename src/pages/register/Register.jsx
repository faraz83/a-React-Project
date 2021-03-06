import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className='registerLogo'>FWS</h3>
                <span className='registerDesc'>Connect with friends and the world around you on FWS. </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="UserName" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Password Again" className="registerInput" />
                    <button className='registerButton'>Sign Up</button>
                    <button className="registerLoginButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
