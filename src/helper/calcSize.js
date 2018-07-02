
const calcSize = (number, width, height) => {

  let area = height * width;
  let elementArea = parseInt(area / number, 10);

  // Calculate side length if there is no "spill":
  let sideLength = parseInt(Math.sqrt(elementArea),10);

  // We now need to fit the squares. Let's reduce the square size
  // so an integer number fits the width.
  let numX = Math.ceil(width/sideLength);
  sideLength = width/numX;
  while (numX <= number) {
      // With a bit of luck, we are done.
      if (Math.floor(height/sideLength) * numX >= number) {
          // They all fit! We are done!
          return sideLength;
      }
      // They don't fit. Make room for one more square i each row.
      numX++;
      sideLength = width/numX;
  }
  // Still doesn't fit? The window must be very wide
  // and low.
  sideLength = height;
  return sideLength;
}

export default calcSize;