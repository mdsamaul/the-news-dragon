import {
    Navigate,
    createBrowserRouter
} from "react-router-dom";
import LoginLayout from "../layout/LoginLayout.jsx";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import Login from "../pages/Login/Login/Login.jsx";
import Register from "../pages/Login/Register/Register.jsx";
import News from "../pages/News/News/News.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            }, {
                path: 'register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: 'categorie',
        element: <Main></Main>,
        children: [
            {
                path: 'categorie/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

            }
        ]
    }, {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
])
export default router;