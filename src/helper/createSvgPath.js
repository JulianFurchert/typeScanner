const makerjs = require('makerjs');
const parser = new DOMParser()

const removeDoublePoints = pathArray => {
  let newPathArray = [];
  pathArray.forEach( (point, i, arr) => {
    if(i === 0) {
      newPathArray.push(point);
    }else {
      if(point.x !== arr[i-1].x || point.y !== arr[i-1].y){
        newPathArray.push(point);
      }
    }
  })
  return newPathArray;
}

const arrayToPath = arr => {
  let string = "";
  arr.forEach( val => string = string.concat(val.x + ", " + val.y + ", ") )
  string = string.slice(0, -2);
  return string;
}


const createSvgPath = (letterArray, fontWeight) => {
  let letterModels = [];
  letterArray.forEach(pathArray => {
    pathArray = removeDoublePoints(pathArray);
    let points = arrayToPath(pathArray);
    let model = new makerjs.models.ConnectTheDots(false, points);
    let expand = makerjs.model.expandPaths(model, fontWeight/2, 0);
    letterModels.push(expand);
  });

  let letter = { models: letterModels };
  makerjs.model.combineUnion(letter.models[0], letter.models[1]);

  let svg = makerjs.exporter.toSVG(letter, {fillRule: 'nonzero'});
  let xmlSvg = parser.parseFromString(svg,"text/xml");
  let width = xmlSvg.children[0].getAttribute("width");
  let height = xmlSvg.children[0].getAttribute("height");
  let data = xmlSvg.getElementById("svgGroup").childNodes[0].getAttribute("d");

  return {data, width, height};
}

export default createSvgPath;