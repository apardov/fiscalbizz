import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App.jsx";
import {TaxCalculate} from "../pages/Tax/TaxCalculate.jsx";
import {RentCalculate} from "../pages/Rent/RentCalculate.jsx";
import {Login} from "../pages/Login/Login.jsx";
import {NewHouseSale} from "../pages/House/NewHouseSale.jsx";

export const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<App/>}>
						<Route index element={<Login/>}/>
						<Route path={"/tax"} element={<TaxCalculate/>}/>
						<Route path={"/rent"} element={<RentCalculate/>}/>
						<Route path={"/housesale"} element={<NewHouseSale/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}