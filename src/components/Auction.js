import './Auction.css';
import Product from './Product';
import { useState } from "react";


function Auction(props) {
    const [products, setProducts] = useState([]);
    const [bids, setBids] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchBids() {
        setIsLoading(true);
        const url = 'http://localhost:5001/api/v1/showBids/' + props.url;
        const response = await fetch(url)
        const data = await response.json();
        setProducts(data.product);
        setBids(data.bids);
        setIsLoading(false);
    }

    return (
        <div>
            <div>
                <button className="button-1" onClick={fetchBids}>Fetch Details</button>
            </div>
            {isLoading && <p>Loading....</p>}
            {!isLoading &&
                <Product 
                    productName={products.productName}
                    shortDescription={products.shortDescription}
                    startPrice={products.startPrice}
                    detailedDescription={products.detailedDescription}
                    category={products.category}
                    bidEndDate={products.bidEndDate}></Product>}
            <div><br></br><br></br><br></br></div>
            <h2>BIDS</h2>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>Bid Amount</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                    {!isLoading && bids.map((bid) => {
                        return (
                            <tr>
                                <td>${bid.amount}</td>
                                <td>{bid.firstName}</td>
                                <td>{bid.lastName}</td>
                                <td>{bid.email}</td>
                                <td>{bid.phone}</td>
                                <td>{bid.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Auction;  