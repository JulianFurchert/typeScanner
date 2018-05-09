const dist = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.sqrt( a*a + b*b );
  return c;
}

export default dist;