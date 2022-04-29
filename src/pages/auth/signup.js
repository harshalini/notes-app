import { AccLinks } from "../../components/allComp"
export const SignUp = () => {
    return (
        <div>
            <div className="account-page">
                    <div className="form-container">
                        <AccLinks />
                        <form className="register-form">
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm password" required />
                            <div className="pswd-rem">
                                <input type="checkbox" id="check" />
                                <label id="remember-check">I accept the terms and conditions</label>
                            </div>
                            <button type="submit" className="account-btn">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
