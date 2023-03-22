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
        console.log(url);
        const response = await fetch(url)
        const data = await response.json();
        setProducts(data.product);
        setBids(data.bids);
        setIsLoading(false);
    }

    return (
        <div>
            <div className='header'>
                <button class="button-1" onClick={fetchBids}>Get</button>
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
            <div><br></br></div>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>Bid Amount</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    {!isLoading && bids.map((bid) => {
                        return (
                            <tr>
                                <td>${bid.amount}</td>
                                <td>{bid.firstName}</td>
                                <td>{bid.email}</td>
                                <td>{bid.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Auction;  