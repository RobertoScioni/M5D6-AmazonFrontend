const server = process.env.REACT_APP_SERVER

const Diagnostics = () => {
	console.log("FetchData component self Diagnostic routine")
	console.log("server is: ", server)
}
/**
 * get a list of all the products, can be filtered by category
 * @param {*} category
 */
const getProducts = async (category) => {
	let url = server + "/products/"
	console.log("getProductsUrl---", url)
	try {
		let response = await fetch(url, { method: "GET" })
		response = await response.json()
		console.log("response---", response)
		return response
	} catch (error) {
		console.error(error)
	}
}

/**
 * get all the reviews of a product
 * @param {*} productID
 */
const getReviews = (productID) => {}
/**
 * add a procuct to the catalog
 * @param {*} product
 */
const addProduct = (product) => {}
/**
 * add a review to a product
 * @param {*} productID
 * @param {*} review
 */
const addReview = (productID, review) => {}
const updateProduct = (productID, product) => {}
const updateReview = (reviewID, Review) => {}

export {
	Diagnostics,
	getProducts,
	getReviews,
	addProduct,
	addReview,
	updateProduct,
	updateReview,
}
