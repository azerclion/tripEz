import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { useRecoilState } from "recoil";
import { windowDimensionsStateAtom } from "./Recoil";
import Router from "./Router";
import useWindowDimensions from "./Util/useWindowDimensions";

import SBAggroOTFM from "./assets/fonts/SB_AggroOTF_M.otf";
import SBAggroOTFL from "./assets/fonts/SB_AggroOTF_L.otf";
import SBAggroOTFB from "./assets/fonts/SB_AggroOTF_B.otf";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
body {
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  background-color: #223656;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
@font-face {
  font-family: "SBAggroOTFM";
  src: local("SBAggroOTFM"), local("SBAggroOTFM");
  src: url(${SBAggroOTFM}) format("opentype");
}
@font-face {
  font-family: "SBAggroOTFL";
  src: local("SBAggroOTFL"), local("SBAggroOTFL");
  src: url(${SBAggroOTFL}) format("opentype");
}
@font-face {
  font-family: "SBAggroOTFB";
  src: local("SBAggroOTFB"), local("SBAggroOTFB");
  src: url(${SBAggroOTFB}) format("opentype");
}
`;

function App() {
  const { height, width } = useWindowDimensions();
  const [windowDimensions, windowDimensionsSet] = useRecoilState(
    windowDimensionsStateAtom
  );
  useEffect(() => {
    windowDimensionsSet({ width: width, height: height });
  }, [width, height, windowDimensionsSet]);

  return (
    <>
      <GlobalStyle width={windowDimensions} />
      <Router />
    </>
  );
}

export default App;
