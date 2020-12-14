import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductListAndForm from "./modules/ProductListAndForm"

function App() {
	return (
		<Router>
			<Route exact path="/" component={ProductListAndForm} />
			<Route exact path="/:category" component={ProductListAndForm} />
			<Route exact path="/:user/cart" component={ProductListAndForm} />
		</Router>
	)
}

export default App
