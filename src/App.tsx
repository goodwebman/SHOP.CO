import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Nav/Navigation'
import HomePage from './pages/HomePage'

function App() {
	return (
		<Router>
			<div style={{ flex: 1 }}>
				<Navigation />
				<Routes>
					<Route path='/SHOPCO' element={<HomePage />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
