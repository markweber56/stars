import logo from './logo.svg';
import './App.css';
import { FaStar } from "react-icons/fa";

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

function StarRating() {
	return [
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="red" />,
		<FaStar color="grey" />,
		<FaStar color="grey" />
	];
}

export default App;
