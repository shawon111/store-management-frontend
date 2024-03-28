import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../../pages/Home/Home";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />} />
    )
)

export default AppRouter;