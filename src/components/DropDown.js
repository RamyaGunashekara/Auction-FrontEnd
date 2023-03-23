import './Auction.css';
import { useState, useEffect } from "react";
import Auction from "./Auction";


function DropDown() {
    const [select, setSelected] = useState('840d42bb-18c6-4678-b23a-c0ea2c230fea');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let ignore = false;
        fetch('http://localhost:5001/api/v1/showBids/', {
            method: 'GET',
            headers: {
                Origin: 'http://localhost:3000/'
            }
        }).then((response) => response.json())
            .then((data) => {
                if (!ignore) {
                    setProducts(data.products);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        return () => {
            ignore = true;
        };
    }, []);

    const handleChange = (event) => setSelected(event.target.value);

    return (
        <div>
            <img src="auction.jpg" alt='logo' width="140px" height="100px"></img>
            <div><br></br></div>
            <div className="header">
                Product
                <select
                    disabled={false}
                    value={select}
                    onChange={(e) => handleChange(e)}
                >
                    {products.map((item) => (
                        <option key={item.id + item.productName} value={item.id}>
                            {item.productName}
                        </option>
                    ))}
                </select>
            </div>
            <Auction
                url={select}></Auction>
        </div>
    );

}

export default DropDown;  