import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AuctionPage.css";

function AuctionPage() {
  const [latestPrice, setLatestPrice] = useState(
    Math.floor(Math.random() * 1000)
  );
  const [currentAuction, setCurrentAuction] = useState("Example Auction");

  const handleNewPrice = () => {
    const inputPrice = Number(document.getElementById("formBasicPrice").value);
    if (inputPrice > latestPrice) {
      setLatestPrice(inputPrice);
    }
  };
  return (
    <div className="auctionPage-container">
      <div className="auctionPage-subcontainer">
        <h1>Auction Page</h1>
        <h2>Current Auction: {currentAuction}</h2>
        <h3>Latest Price: {latestPrice}</h3>
        <Form.Group controlId="formBasicPrice">
          <Form.Control type="text" placeholder="Enter a new price" />
        </Form.Group>
        <Button onClick={handleNewPrice}>Add New Price</Button>
      </div>
    </div>
  );
}

export default AuctionPage;
