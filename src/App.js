import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import data from "./data.json";

console.log(data);

function App() {
  return (
    <div className="container">
      <Header />
      <Profile data={data} />
      <Posts data={data} />
    </div>
  );
}

export default App;