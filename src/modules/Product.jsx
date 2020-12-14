import React from "react"
import { Badge, Card, Image } from "react-bootstrap"

class Product extends React.Component {
	render(props) {
		return (
			<Card>
				<Card.Title>
					{this.props.product.name}
					<Badge>{this.props.product.brand}</Badge>{" "}
					<Badge>{this.props.product.category}</Badge>
				</Card.Title>
				<Card.Body>
					{this.props.product.image && <Image src={this.props.product.image} />}
					{this.props.product.description}
				</Card.Body>
				<Card.Footer>{this.props.product.price}</Card.Footer>
			</Card>
		)
	}
}

export default Product
