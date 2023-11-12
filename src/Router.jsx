import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home.jsx";
import Public from "./Public.jsx";
import Private from "./Private.jsx";
import Login from "./Login.jsx";
import Layout from "./Layout.jsx";
import RequireAuth from "./RequireAuth.jsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/public",
                    element: <Public/>,
                },
                {
                    path: "/private",
                    element: <RequireAuth><Private/></RequireAuth>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
            ]
        }
    ]
);

export default function Router() {
    return <RouterProvider router={router}/>
}