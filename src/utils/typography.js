import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import judahTheme from 'typography-theme-judah';

judahTheme.googleFonts = [
  {
    name: 'Raleway',
    styles: ['200', '400', '400i', '700']
  },
  {
    name: 'Open Sans',
    styles: ['200', '400', '400i', '700']
  },
  {
    name: 'PT Sans Narrow',
    styles: ['200', '300']
  }
];

judahTheme.scaleRatio = 4;
judahTheme.headerFontFamily = ['Raleway', 'sans-serif'];

judahTheme.bodyFontFamily = ['Open Sans', 'sans-serif'];
judahTheme.bodyWeight = 300;

judahTheme.plugins = [new CodePlugin()];

judahTheme.overrideThemeStyles = ({ rhythm }) => ({
  h1: {
    letterSpacing: rhythm(0.3),
    fontSize: rhythm(1.5),
    fontWeight: 300,
    color: '#080808'
  },
  h2: {
    color: '#484848',
    letterSpacing: rhythm(0.1),
    fontSize: rhythm(1.5)
  },
  h3: {},
  a: {
    color: 'black',
    lineHeight: rhythm(0.5)
  },
  p: {
    letterSpacing: rhythm(0.08),
    color: '#181818'
  },
  li: { fontFamily: 'PT Sans Narrow' }
});

const typography = new Typography(judahTheme);

export default typography;
