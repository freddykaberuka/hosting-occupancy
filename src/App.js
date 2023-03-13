import React, { useState } from "react";
import "./App.css";
import guestData from './guests.json'

function App() {
  const [numPremiumRooms, setNumPremiumRooms] = useState(0);
  const [numEconomyRooms, setNumEconomyRooms] = useState(0);
  const [premiumOccupancy, setPremiumOccupancy] = useState(0);
  const [economyOccupancy, setEconomyOccupancy] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  
  const handleFormSubmit = e => {
    e.preventDefault();

    const [premiumGuests, economyGuests] = [guestData, numPremiumRooms, numEconomyRooms];

    setPremiumOccupancy(premiumGuests.length);
    setEconomyOccupancy(economyGuests.length);
    setTotalRevenue(premiumGuests.reduce((acc, guest) => acc + 100, 0) + economyGuests.reduce((acc, guest) => acc + 50, 0));
  };
  return (
    <div className="App">
      <form>
        <label>
          Premium Rooms:
          <input type="number" value={numPremiumRooms} onChange={e => setNumPremiumRooms(parseInt(e.target.value))}/>
        </label>
        <br />
        <label>
          Economy Rooms:
          <input type="number" value={numEconomyRooms} onChange={e => setNumPremiumRooms(parseInt(e.target.value))}/>
        </label>
        <br />
        <button type="submit">Optimize</button>
      </form>
      <div>
        <p>Premium Occupancy: {premiumOccupancy}</p>
        <p>Economy Occupancy: {economyOccupancy}</p>
        <p>Total Revenue: {totalRevenue}</p>
      </div>
    </div>
  );
}

export default App;
