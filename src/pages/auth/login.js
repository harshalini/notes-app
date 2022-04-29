import { AccLinks } from "../../components/allComp"
export const Login = () => {
    return (
        <div>
            <div className="account-page">
                <div className="account-container">
                    <div className="form-container">
                        <AccLinks />
                        <form className="login-form">
                            <input type="text" placeholder="Username" required />
                            <input type="password" placeholder="Password" required />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">Remember me</label>
                            </div>
                            <button type="submit" className="account-btn"
                            >Login</button>
                            <a href="#" className="fr-pswd">Forgot password?</a>
                            <button type="submit" className="account-btn"
                            >Login as Guest</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
