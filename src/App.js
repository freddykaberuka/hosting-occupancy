import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import guestData from './guests.json'

function App() {
  const [numPremiumRooms, setNumPremiumRooms] = useState(0);
  const [numEconomyRooms, setNumEconomyRooms] = useState(0);
  const [premiumOccupancy, setPremiumOccupancy] = useState(0);
  const [economyOccupancy, setEconomyOccupancy] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  
  const assignRooms = (guests, premiumRooms, economyRooms) => {
    const premiumGuests = [];
    const economyGuests = [];
    const sortedGuests = guests.slice().sort((a, b) => b - a);

    sortedGuests.forEach(guest => {
      if (guest >= 100 && premiumRooms > 0) {
        premiumGuests.push(guest);
        premiumRooms--;
      } else if (guest < 100 && economyRooms > 0) {
        economyGuests.push(guest);
        economyRooms--;
      }
    });
    return [premiumGuests, economyGuests];
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const [premiumGuests, economyGuests] = assignRooms(guestData, numPremiumRooms, numEconomyRooms);

    setPremiumOccupancy(premiumGuests.length);
    setEconomyOccupancy(economyGuests.length);
    setTotalRevenue(premiumGuests.reduce((acc, guest) => acc + 100, 0) + economyGuests.reduce((acc, guest) => acc + 50, 0));
  };
  return (
    <>
    <Header />
    <div className="admin-dash">
      <form onSubmit={handleFormSubmit} className="form-submit">
        <div>
        <label>
          Premium Rooms:
          <input type="number" value={numPremiumRooms} onChange={e => setNumPremiumRooms(parseInt(e.target.value))}/>
        </label>
        </div>
        <div>
        <label>
          Economy Rooms:
          <input type="number" value={numEconomyRooms} onChange={e => setNumEconomyRooms(parseInt(e.target.value))}/>
        </label>
        </div>
        <div>
        <button type="submit" className="optmize">Optimize</button>
        </div>
      </form>
      <div className="occupancies">
        <div class="card">
          <div class="img">PR</div>
          <p>Premium Occupancy: {premiumOccupancy}</p>
        </div>
        <div class="card">
          <div class="img">ER</div>
          <p>Economy Occupancy: {economyOccupancy}</p>
        </div>
        <div class="card">
          <div class="img">TR</div>
          <p>Total Revenue: {totalRevenue}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
