import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import Index from "./pages/Index";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./components/AuthProvider";
import jwtDecode from "jwt-decode";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				{" "}
				<Routes>
					<Route element={<ProtectedRoutes />}>
						{" "}
						<Route path="/" element={<Index />} />
					</Route>
					{/* <Route path="/" element={<LoginForm />} /> */}
					<Route path="/login" element={<LoginForm />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
