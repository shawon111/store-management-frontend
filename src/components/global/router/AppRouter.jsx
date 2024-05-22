import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import Sells from "../../pages/Sells/Sells";
import AddNewProduct from "../../pages/Products/AddNewProduct";
import AddNewSell from "../../pages/Sells/AddNewSell";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/products">
                <Route index element={<Products />} />
                <Route path="new" element={<AddNewProduct />}/>
            </Route>
            <Route path="/sells">
                <Route index element={<Sells />} />
                <Route path="new" element={<AddNewSell />} />
            </Route>
        </Route>
    )
)

export default AppRouter;