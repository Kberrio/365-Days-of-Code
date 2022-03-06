// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

// The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

// The pattern below should look familiar from prior waypoints:

function testLogicalOr(val) {
	// Only change code below this line

	if (val < 10 || val > 20) {
		return 'Outside';
	} else {
		return 'Inside';
	}

	// Only change code above this line
}

testLogicalOr(15);
