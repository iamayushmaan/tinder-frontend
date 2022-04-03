import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Profile Cards */}
      <TinderCards />
      {/* Swipe Or Navigation Buttons */}

      <SwipeButtons />
    </div>
  );
}

export default App;
