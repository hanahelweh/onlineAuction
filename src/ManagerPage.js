import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Manager.css';
function ManagerPage() {
  const navigate = useNavigate();
  const [showControlAuctions, setShowControlAuctions] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [requestStudy, setRequestStudy] = useState(null);
  const [oldAuctions, setOldAuctions] = useState([]);
  const [showStudyAuctions, setShowStudyAuctions] = useState(false);
  const [accepted, setAccepted] = useState(false); // added state variable

  useEffect(() => {
    const storedAuctions = localStorage.getItem("oldAuctions");
    if (storedAuctions) {
      setOldAuctions(JSON.parse(storedAuctions));
    }
  }, []);

  const handleControlAuctionsClick = () => {
    setShowControlAuctions(!showControlAuctions);
    setShowStudyAuctions(false);
  };

  const handleAuctionSelect = (event) => {
    const selectedAuction = event.target.value;
    setSelectedAuction(selectedAuction);
  };

  const handleRequestStudy = (event) => {
    const requestStudy = event.target.value;
    setRequestStudy(requestStudy);
  };

  const handleStudyAuctionsClick = () => {
    setShowStudyAuctions(!showStudyAuctions);
    setShowControlAuctions(false);
  };

  const handleAcceptClick = () => {
    setAccepted(true); // set accepted to true when the "Accept" button is clicked
  };

  const renderAcceptedMessage = () => {
    // conditionally render the message with the authorization key
    const authorizationKey = Math.random().toString(36).substr(2, 10);
    return <p>accepted and the authorization key is: {authorizationKey}</p>;
  };
  const handleEndAuction = () =>{
    alert('the winner is hana');
    navigate('/login');
  }

  return (
    <div className="Manager-container">
      <div className="SubManag-container">
        <h1>Manager Page</h1>
        <div className="buttons">
        <Button
          className="btn btn-primary"
          onClick={handleControlAuctionsClick}
        >
          Control Auctions
        </Button>
        <Button className="btn btn-primary" onClick={handleStudyAuctionsClick}>
          Study Request Auctions
        </Button>
        </div>
        {showControlAuctions && (
          <div className="form-group mt-3">
            <label htmlFor="auctionSelect">Select Auction:</label>
            <select
              className="form-control"
              id="auctionSelect"
              onChange={handleAuctionSelect}
            >
              <option value="">--Select--</option>
              {oldAuctions.map((auction) => (
                <option key={auction} value={auction}>
                  {auction}
                </option>
              ))}
            </select>
          </div>
        )}

        {showStudyAuctions && (
          <div className="form-group mt-3">
            <label htmlFor="studyAuctionSelect">Select Auction:</label>
            <select
              className="form-control"
              id="studyAuctionSelect"
              onChange={handleRequestStudy}
            >
              <option value="">--Select--</option>
              {oldAuctions.map((auction) => (
                <option key={auction} value={auction}>
                  {auction}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedAuction && (
          <div className="auctionStatus mt-3">
            <p>Status is:</p>
            <Button onClick={handleEndAuction}>End</Button>
          </div>
        )}
        {requestStudy && (
          <div className="auctionStatus mt-3">
            <p>details request and user</p>
            <Button
              onClick={() => {
                const authKey = Math.floor(Math.random() * 1000000);
                alert(`accepted and the authorization key is: ${authKey}`);
              }}
            >
              Accept
            </Button>
            <Button onClick={() => {
                alert(`refused`);
              }}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default ManagerPage;
