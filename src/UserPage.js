import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./UserPage.css";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const navigate = useNavigate();
  const [showAuthorizationOptions, setShowAuthorizationOptions] =
    useState(false);
  const [showAuctionList, setShowAuctionList] = useState(false);
  const [showOldAuctions, setShowOldAuctions] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState("");
  const [AuctionList, ShowAuctionList] = useState(
    Array.from({ length: 10 }, (_, i) => `auction ${i + 1}`)
  );

  const [oldAuctions, setOldAuctions] = useState(
    JSON.parse(localStorage.getItem("oldAuctions")) || []
  );
  const [showOperationalAuctions, setShowOperationalAuctions] = useState(false);
  const [selectedOperationalAuction, setSelectedOperationalAuction] =
    useState("");
  const [authorizationKey, setAuthorizationKey] = useState("");
  const [showAuthorizationInput, setShowAuthorizationInput] = useState(false);

  const operationalAuctions = [
    "Auction 1",
    "Auction 2",
    "Auction 3",
    "Auction 4",
    "Auction 5",
  ];

  useEffect(() => {
    localStorage.setItem("oldAuctions", JSON.stringify(oldAuctions));
  }, [oldAuctions]);

  const handleAuthorizationButtonClick = () => {
    setShowAuthorizationOptions(true);
  };

  const handleNewAuctionButtonClick = () => {
    setShowAuctionList(true);
    setShowOldAuctions(false); // hide the old auctions list
    setShowOperationalAuctions(false); // hide the operational auctions list
  };

  const handleOldAuctionButtonClick = () => {
    setShowOldAuctions(true);
    setShowAuctionList(false);
    setShowOperationalAuctions(false); // hide the operational auctions list
  };

  const handleOperationalAuctionButtonClick = () => {
    setShowOperationalAuctions(true);
    setShowAuctionList(false);
    setShowOldAuctions(false); // hide the old auctions list
    setShowAuthorizationInput(false); // hide the authorization key input
  };

  const handleAddButtonClick = () => {
    const updatedAuctions = [...oldAuctions, selectedAuction];
    setOldAuctions(updatedAuctions);
    setSelectedAuction("");
    alert("Request saved");
  };

  const handleAuctionSelect = (e) => {
    setSelectedAuction(e.target.value);
  };

  const handleOperationalAuctionSelect = (e) => {
    setSelectedOperationalAuction(e.target.value);
    setAuthorizationKey(""); // clear any previous authorization key
    setShowAuthorizationInput(true); // show the authorization key input
  };

  const handleAuthorizationKeyChange = (e) => {
    setAuthorizationKey(e.target.value);
  };

  const handleParticipateButtonClick = () => {
    setShowAuthorizationInput(true); // show the authorization key input
    navigate("/auctionPage");
  };


  const handleAuthorizeButtonClick = () => {
    const randomCode = Math.floor(Math.random() * 90000) + 10000;
    const message = Math.random() < 0.5 ? `Your request is accepted and your generation key is ${randomCode}` : "Sorry, your request is refused";
    alert(message);
  };
  
  return (
    <div className="UserPage-container">
      <h1>Welcome, User!</h1>
      <Button variant="primary" onClick={handleAuthorizationButtonClick}>
        Request authorization auction
      </Button>
      {showAuthorizationOptions && (
        <div className="requestBtn">
          <Button variant="secondary" onClick={handleNewAuctionButtonClick}>
            Request new authorization auction
          </Button>
          <Button variant="secondary" onClick={handleOldAuctionButtonClick}>
            View answer to an old authorization auction
          </Button>
          <Button
            variant="secondary"
            onClick={handleOperationalAuctionButtonClick}
          >
            Participate
          </Button>
          {showAuctionList && (
            <div>
              <select
                value={selectedAuction}
                onChange={handleAuctionSelect}
                className="form-select form-select-lg"
              >
                {AuctionList.map((auction) => (
                  <option key={auction} value={auction}>
                    {auction}
                  </option>
                ))}
              </select>
              <Button variant="success" onClick={handleAddButtonClick}>
                Add
              </Button>
            </div>
          )}
          {showOldAuctions && (
            <div>
              <h3>Old Auctions</h3>
              <select className="form-select form-select-lg" onChange={handleAuthorizeButtonClick }>
                {oldAuctions.map((auction, index) => (
                  <option key={index} value={auction}>
                    {auction}
                  </option>
                ))}
              </select>
            </div>
          )}

          {showOperationalAuctions && (
            <div>
              <select
                value={selectedOperationalAuction}
                onChange={handleOperationalAuctionSelect}
                className="form-select form-select-lg"
              >
                <option value="">Select an operational auction</option>
                {operationalAuctions.map((auction, index) => (
                  <option key={index} value={auction}>
                    {auction}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={authorizationKey}
                onChange={handleAuthorizationKeyChange}
                placeholder="Enter authorization key"
              />
              <Button variant="success" onClick={handleParticipateButtonClick}>
                Participate
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserPage;
