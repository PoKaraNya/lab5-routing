import {Link, Outlet} from "react-router-dom";


export default function Layout() {

    const logoutHandle = () => {
        localStorage.removeItem('token')
    }

    return (
        <>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/public'>Public route</Link>
                <Link to='/private'>Private route</Link>
            </div>
            <button onClick={logoutHandle}>
                Logout
            </button>
            <div>
                <Outlet/>
            </div>
        </>
    )
}