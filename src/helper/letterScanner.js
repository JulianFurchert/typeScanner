let lastIndex;
const baseScale = 3;

const letterScan = (letterPoints, gridPoints, settings) => {
  let newLetterPoints = [];
  gridPoints = transformGridPoints(gridPoints, settings);

  letterPoints.forEach( path => {
    let newPath = [];
    path.forEach( (point, index) => {
      if( index === 0 ) point = getClosestPoint(point, gridPoints);
      else point = getClosestLink(point, gridPoints);
      newPath.push({"x": point.x, "y": point.y});
    });
    newLetterPoints.push(newPath);
  });
  return newLetterPoints
}
export default letterScan;


const transformGridPoints = (gridPoints, settings) =>{
  let newGridPoints = [];
  let zoom = baseScale * settings.zoom;
  let zommCenterX = ( 1100 * settings.zoom - 1100 ) / 2;
  let zommCenterY = ( 1400 * settings.zoom - 1400 ) / 2;
  let xPos = zommCenterX;
  let yPos = zommCenterY;

  gridPoints.forEach( point => {
    let x = ( point.x * zoom ) - xPos;
    let y = ( point.y * zoom ) - yPos;
    newGridPoints.push({"x": x, "y": y, "links": point.links })
  });
  return newGridPoints;
}

const getClosestPoint = (point, gridPoints) => {
  let distances = [];

  gridPoints.forEach( gridPoint => {
    distances.push( dist(point.x, point.y, gridPoint.x, gridPoint.y) )
  });

  lastIndex = findClosestIndex(distances, 0);
  return gridPoints[lastIndex];
}


const getClosestLink = (point, gridPoints) => {
  let distances = [];
  let links = gridPoints[lastIndex].links;

  links.forEach( link => {
    distances.push( dist(point.x, point.y, gridPoints[link].x, gridPoints[link].y) )
  });

  let linkIndex = findClosestIndex(distances, 0);
  lastIndex = links[linkIndex];
  return gridPoints[lastIndex];
}


const findClosestIndex = (distances, value) => {
  let closestIndex = 0;
  let closestDist = distances[0];

  distances.forEach( (distance, index)  => {
    if( closestDist > distance ){
      closestIndex = index;
      closestDist = distance;
    }
  });

  return closestIndex;
}


const dist = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;
  var c = Math.sqrt( a*a + b*b );
  return c;
}


