import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import judahTheme from 'typography-theme-judah';

judahTheme.googleFonts = [
  {
    name: 'Raleway',
    styles: ['200', '400', '400i', '700']
  }
];

judahTheme.scaleRatio = 4;
judahTheme.headerFontFamily = ['Raleway', 'sans-serif'];

judahTheme.bodyFontFamily = ['Open Sans', 'sans-serif'];
judahTheme.bodyWeight = 300;

judahTheme.plugins = [new CodePlugin()];

judahTheme.overrideThemeStyles = ({ rhythm }) => ({
  h1: {
    letterSpacing: rhythm(0.5),
    fontSize: rhythm(2),
    fontWeight: 300,
    color: '#080808',
    lineHeight: rhythm(2)
  },
  h2: {
    color: '#484848',
    letterSpacing: rhythm(0.2),
    fontSize: rhythm(1.5)
  },
  h3: {},
  a: {
    color: '#006666',
    lineHeight: rhythm(0.5)
  },
  p: {
    letterSpacing: rhythm(0.08),
    color: '#181818'
  }
});

const typography = new Typography(judahTheme);

export default typography;
