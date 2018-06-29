import svgToLetterPath from './svgToLetterPath';
import createSvgPath from './createSvgPath';
const opentype = require('opentype.js/dist/opentype.min.js');
const letterNames = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];

const createFont = (letter, alphabet) => {
  let glyphs = [];

  var notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new opentype.Path()
  });
  glyphs.push(notdefGlyph);

  letterNames.forEach( name => {
    let path = createSvgPath( alphabet[name] );
    let letterPath = svgToLetterPath(path);

    let glyph = new opentype.Glyph({
      name: name,
      unicode: name.charCodeAt(0),
      advanceWidth: 650,
      path: letterPath
    });

    glyphs.push(glyph);
  });

  var font = new opentype.Font({
    familyName: 'OpenTypeSans',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,
    glyphs: glyphs
  });
  font.download();
}

export default createFont;