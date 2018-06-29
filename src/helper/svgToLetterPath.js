import arcToBezier from 'svg-arc-to-cubic-bezier';
import _ from 'lodash';
import parseSVG from 'svg-path-parser';
const opentype = require('opentype.js/dist/opentype.min.js');

_.rename = (obj, key, newKey) => {
  if(_.includes(_.keys(obj), key)) {
    obj[newKey] = _.clone(obj[key], true)
    delete obj[key]
  }
  return obj
}

const convertArc = (previousPoint, currentPoint) =>{
  return arcToBezier({
    px: previousPoint.x,
    py: previousPoint.y,
    cx: currentPoint.x,
    cy: currentPoint.y,
    rx: currentPoint.rx,
    ry: currentPoint.ry,
    xAxisRotation: currentPoint.xAxisRotation,
    largeArcFlag: currentPoint.largeArcFlag,
    sweepFlag: currentPoint.sweep,
  });
}

const svgToLetterPath = path => {
  var letterPath = new opentype.Path();
  let commands = parseSVG(path);
  let commandsArray =  [];

  commands.forEach( (command,i,arr) => {
    if(command.code === 'A'){
      let curves = convertArc(arr[i-1], command);
      curves.forEach( curve => {
        curve.type = 'C';
        commandsArray.push(curve);
      });
    }
    else {
      delete command.command;
      commandsArray.push(_.rename(command, 'code', 'type'))
    }
  })

  letterPath.commands = commandsArray;
  return letterPath;
}

export default svgToLetterPath;