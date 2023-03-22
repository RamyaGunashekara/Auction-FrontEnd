import './Product.css';

function Product(props) {
    return (
        <div>
            <table id="customers">
                <tbody>
                    <tr>
                        <td>Product Name</td>
                        <td>{props.productName}</td>
                    </tr>
                    <tr>
                        <td>Short Description</td>
                        <td>{props.shortDescription}</td>
                    </tr>
                    <tr>
                        <td>Detailed Description</td>
                        <td>{props.detailedDescription}</td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>{props.category}</td>
                    </tr>
                    <tr>
                        <td>Start Price</td>
                        <td>${props.startPrice}</td>
                    </tr>
                    <tr>
                        <td>Bid End Date</td>
                        <td>{props.bidEndDate}</td>
                    </tr>
                </tbody>
         </table>
        </div>
    );
}

export default Product;  