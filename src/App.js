import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <h1>React Movie Search</h1>
        <label>MOVIE NAME</label>
        <input type="text" placeholder="Enter a Movie Name" />
        <button onClick="">Add a Movie</button>
        <button onClick="">Search</button>
      </form>
    </div>
  );
}
