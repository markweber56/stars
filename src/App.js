import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <body className="App-body">
			<StarRating />
		  </body>
      </header>
    </div>
  );
}

export default App;
