import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import Index from "./pages/Index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm />} />
        <Route path="/index" element={<Index />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
