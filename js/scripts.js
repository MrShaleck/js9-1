	function getTriangleArea(a, h) {
	
	if ( (a > 0) && (h > 0) ) {
		return a*h/2;
	}
	else if ( (a <= 0) || (h <= 0) ) {
	console.log('Nieprawid³owe dane!');
	};

	

};

var triangle1Area = getTriangleArea(7, 7);
var triangle2Area = getTriangleArea(9, 5);
var triangle3Area = getTriangleArea(11, 16);

console.log( getTriangleArea(10,6) );
console.log( triangle1Area);
console.log( triangle2Area);
console.log( triangle3Area);
