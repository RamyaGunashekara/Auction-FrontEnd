import './Auction.css';
import { useState, useEffect } from "react";
import Auction from "./Auction";


function DropDown() {
    const [select, setSelected] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/api/v1/showBids/', {
            method: 'GET',
            headers: {
                Origin: 'http://localhost:3000/'
            }
        }).then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
        <div className="header">
            <select
                disabled={false}
                value={select}
                onChange={(e) => setSelected(e.currentTarget.value)}
            >
            {products.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.productName}
                </option>
                
            ))}
            </select>
        </div>
            <Auction
                url = {select}></Auction>
        </div>
    );

}

export default DropDown;  