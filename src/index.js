
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import About from "./../src/views/About/About"
import VegCard from './views/Categories/CategoriesVeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "../src/components/Navbar/Navbar"
import Recipe from "../src/views/Recipe/Recipe"
import Footer from './components/Footer/Footer';
import Login from "./views/Login/Login"



const root = ReactDOM.createRoot(document.getElementById('root'));



const router = createBrowserRouter([

    {
        path: "Navbar",
        element: <Navbar />,
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/vegcard",
        element: <VegCard />,
    },
    {
        path: "/recipe",
        element: <Recipe />
    },

    {
        path: "/footer",
        element: <Footer/>
    },

    {
        path: "/login",
        element: <Login/>
    },





])
root.render(<RouterProvider router={router} />)