import { Link } from "react-router-dom"

export default function Register() {
    return (
        <>
            <div>Register</div>
            <Link to='/login'>
                <p>Have an account? Login then.</p>
            </Link>
        </>
    )
}