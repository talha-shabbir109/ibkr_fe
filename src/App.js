// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   );
// }

// export default App;


import "./App.css";
import LoginForm from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
