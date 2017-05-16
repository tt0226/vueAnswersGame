<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth*100/750+"px";
export default {
  name: 'app'
}
</script>

<style>
	html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
			margin: 0;
			padding: 0;
			border: 0;
			font-size: 100%;
			font-weight: normal;
			vertical-align: baseline;
			background: transparent;
			-webkit-tap-highlight-color: rgba(0,0,0,0);
			tap-highlight-color: rgba(0,0,0,0);
	}
	body{font:400 .14rem/1 "Arial","Microsoft Yahei"; color: #fff; background:#3a373f;}
	main, article, aside, figure, footer, header, nav, section, details, summary {display: block;}
	a{text-decoration:none; color: #000;}
	html {box-sizing: border-box;}
	*,
	*:before,*:after {box-sizing: inherit;}
	img,
	object,
	embed {max-width: 100%;}
	img{display: block;}
	html {overflow-y: scroll;}
	ul {list-style: none;}
	blockquote, q {quotes: none;}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {content: ''; content: none;}
	a {margin: 0; padding: 0; font-size: 100%; vertical-align: baseline; background: transparent;}
	abbr[title], dfn[title] {border-bottom: 1px dotted #000; cursor: help;}
	table {border-collapse: separate; border-spacing: 0;}
	th {font-weight: bold; vertical-align: bottom;}
	td {font-weight: normal; vertical-align: top;}
	input, select {vertical-align: middle; outline:none; }
	input[type="radio"] {vertical-align: text-bottom;}
	input[type="checkbox"] {vertical-align: bottom;}
	select, input, textarea {font: 99% sans-serif;}
	table {font-size: inherit; font: 100%;}
	strong {font-weight: bold;}
	td, td img {vertical-align: top;}
	label,
	input[type=button],
	input[type=submit],
	input[type=file],
	button {cursor: pointer;}
	button, input, select, textarea {margin: 0;}
	button,
	input[type=button] {width: auto; overflow: visible;}
	html,body{ width:100%; height:100%; overflow: hidden;}
	.app{ height: 100%;}
</style>
