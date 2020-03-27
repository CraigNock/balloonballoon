import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto'
  }

  html, body {
    max-width: 100vw;
  }


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
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
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

  body {
    line-height: 1.25;
    background: #222;
    color: white;
  }


/*CLOUDS*/ 

.background-wrap {
  background: #87ceeb;
  opacity:90%;
  bottom: 0;
	left: 0;
	padding-top: 50px;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
}

/* KEYFRAMES */
@keyframes animateCloud {
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
}

/* ANIMATIONS */
.x1 {
	animation: animateCloud 35s linear infinite;
	transform: scale(0.65);
}

.x2 {
	animation: animateCloud 20s linear infinite;
	transform: scale(0.3);
}

.x3 {
	animation: animateCloud 30s linear infinite;
	transform: scale(0.5);
}

.x4 {
	animation: animateCloud 18s linear infinite;
	transform: scale(0.4);
}

.x5 {
	animation: animateCloud 25s linear infinite;
	transform: scale(0.55);
}

.x6 {
	animation: animateCloud 22s linear infinite;
	transform: scale(0.45);
}

.x7 {
	animation: animateCloud 40s linear infinite;
	transform: scale(0.25);
}

.cloud {
	background: #fff;
	border-radius: 100px;
	box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
	height: 120px;
	position: relative;
	width: 350px;
}

.cloud:after, .cloud:before {
    background: #fff;
	content: '';
	position: absolute;
	z-indeX: -1;
}

.cloud:after {
	border-radius: 100px;
	height: 100px;
	left: 50px;
	top: -50px;
	width: 100px;
}

.cloud:before {
	border-radius: 200px;
	width: 180px;
	height: 180px;
	right: 50px;
	top: -90px;
}

`;