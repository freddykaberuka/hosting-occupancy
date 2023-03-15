import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import guestData from './guests.json'
import { assignRooms} from './helpers/helperFunction'
import { BrowserRouter as Router } from 'react-router-dom';

const FormField=({ label, value, onChange }) => {
  return (
    <div>
      <label>
        {label}:
        <input type="number" value={value} onChange={onChange}/>
      </label>
    </div>
  );
}

const App=()=> {
  const [numPremiumRooms, setNumPremiumRooms] = useState(0);
  const [numEconomyRooms, setNumEconomyRooms] = useState(0);
  const [premiumOccupancy, setPremiumOccupancy] = useState(0);
  const [economyOccupancy, setEconomyOccupancy] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  


  const handleFormSubmit = e => {
    e.preventDefault();

    const [premiumGuests, economyGuests] = assignRooms(guestData, numPremiumRooms, numEconomyRooms);

    const premiumOccupancyCount = premiumGuests.length;
    const economyOccupancyCount = economyGuests.length;
    const premiumRevenue = premiumGuests.reduce((acc, guest) => acc + 100, 0);
    const economyRevenue = economyGuests.reduce((acc, guest) => acc + 50, 0);
    const totalRevenueValue = premiumRevenue + economyRevenue;

    setPremiumOccupancy(premiumOccupancyCount);
    setEconomyOccupancy(economyOccupancyCount);
    setTotalRevenue(totalRevenueValue);
  };
  return (
    <>
    <Router>
    <Header />
    </Router>
    <div className="admin-dash">
      <form onSubmit={handleFormSubmit} className="form-submit">
        <div>
        <FormField label="Premium Rooms" value={numPremiumRooms} onChange={e => setNumPremiumRooms(parseInt(e.target.value))}/>
        </div>
        <div>
         <FormField label="Economy Rooms" value={numEconomyRooms} onChange={e => setNumEconomyRooms(parseInt(e.target.value))}/>
        </div>
        <div>
        <button type="submit" className="optmize">Optimize</button>
        </div>
      </form>
      <div className="occupancies">
        <div className="card">
          <div className="img">PR</div>
          <p>Premium Occupancy: {premiumOccupancy}</p>
        </div>
        <div className="card">
          <div className="img">ER</div>
          <p>Economy Occupancy: {economyOccupancy}</p>
        </div>
        <div className="card">
          <div className="img">TR</div>
          <p>Total Revenue: {totalRevenue}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
