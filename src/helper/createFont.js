import svgToLetterPath from './svgToLetterPath';
import createSvgPath from './createSvgPath';
const opentype = require('opentype.js/dist/opentype.min.js');
const letterNames = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
const spacing = 50;

const createBasicCharakter = () =>{
  let glyphs = [];

  let notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new opentype.Path()
  });
  glyphs.push(notdefGlyph);

  let spaceGlyph = new opentype.Glyph({
    name: 'space',
    unicode: 32,
    advanceWidth: 248,
    path: new opentype.Path()
  });
  glyphs.push(spaceGlyph);

  return glyphs;
}

const createFont = (alphabet, fontWeight, grid, gridSetting) => {
  let {zoom, xPos, yPos} = gridSetting;
  let fontFamily = `Grid-${zoom}-${xPos}-${yPos}-${fontWeight}`
  let styleName = `${zoom}-${xPos}-${yPos}-${fontWeight}`;
  let glyphs = createBasicCharakter();

  letterNames.forEach( name => {
    let {data, width} = createSvgPath(alphabet[name], fontWeight);
    let letterPath = svgToLetterPath(data);
    let glyph = new opentype.Glyph({
      name: name,
      unicode: name.charCodeAt(0),
      advanceWidth: parseInt(width, 10) + spacing*2,
      path: letterPath
    });
    glyphs.push(glyph);
  });

  var font = new opentype.Font({
    familyName: fontFamily,
    styleName: styleName,
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,
    glyphs: glyphs
  });
  font.download();
}

export default createFont;