import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Sells from "../../pages/Sells/Sells";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sells" element={<Sells />} />
        </Route>
    )
)

export default AppRouter;