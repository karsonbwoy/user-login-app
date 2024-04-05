import { Link } from "react-router-dom"


export default function Login() {
    return (
        <>
            <div>Login</div>
            <Link to='/register'>
                <p>No account? Register then.</p>
            </Link>
        </>
    )
}