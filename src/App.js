import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Premium Rooms:
          <input type="number" />
        </label>
        <br />
        <label>
          Economy Rooms:
          <input type="number" />
        </label>
        <br />
        <button type="submit">Optimize</button>
      </form>
      <div>
        <p>Premium Occupancy: 0</p>
        <p>Economy Occupancy: 0</p>
        <p>Total Revenue: 0</p>
      </div>
    </div>
  );
}

export default App;
