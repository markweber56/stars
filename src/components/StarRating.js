import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { createArray } from "../util/Utils";

// default function for onSelect does nothing
const Star = ({ selected = false, onSelect = f => f }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function starRating({ numStars = 5 }) {
	// value sent to useState is default value for the state variable
	const [selectedStars, setSelectedStars] = useState(0);
	return (
		<>
			{createArray(numStars).map((n, i) => (
				<Star 
					key={i} 
					selected={selectedStars > i} 
					onSelect={() => setSelectedStars(i + 1)}
				/>
			))}
			<p>
				{selectedStars} of {numStars} stars
			</p>
		</>
	);
};
// return createArray(numStars).map((n, i) => <Star key={i} />);