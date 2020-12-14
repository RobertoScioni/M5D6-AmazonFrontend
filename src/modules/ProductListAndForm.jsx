import React from "react"
import { Form, FormControl, ListGroup } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { Diagnostics, getProducts } from "./FetchData"
import Product from "./Product"
class ProductListAndForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			category: "",
			products: false,
		}
	}
	componentDidMount = async () => {
		if (this.props.match.params.hasOwnProperty("category")) {
			this.setState({ category: this.props.match.params.category })
		}
		let products = await getProducts()
		this.setState({ products })
	}
	render() {
		Diagnostics()
		return (
			<>
				<ListGroup>
					{this.state.products &&
						this.state.products.map((product) => <Product product={product} />)}
				</ListGroup>
				<Form>
					<FormControl type="text" placeholder="name" />
					<FormControl type="text" placeholder="brand" />
					<FormControl type="text" placeholder="description" />
					<FormControl type="number" placeholder="price" />
					<FormControl type="text" placeholder="category" />
				</Form>
			</>
		)
	}
}
export default withRouter(ProductListAndForm)
