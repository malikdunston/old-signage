import { Component } from "react";
	import "./assets/css/index.min.css";
	import { BrowserRouter as Router, Route } from "react-router-dom";
	import FloorPlan from "./components/FloorPlan.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
		}
	}
	render() {
		const NanoF1 = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 862.1 779" style="enable-background:new 0 0 862.1 779;" xml:space="preserve">
	<style type="text/css">
		.st0 {
			fill: #999999;
		}

		.st1 {
			fill: none;
			stroke: #00FF00;
			stroke-width: 2;
			stroke-miterlimit: 10;
		}

		.st2 {
			opacity: 0.46;
			fill: #FF0000;
		}

		.st3 {
			font-family: 'TimesNewRomanPS-BoldMT';
		}

		.st4 {
			font-size: 9px;
		}

		.st5 {
			display: none;
		}

		.st6 {
			display: inline;
			fill: none;
			stroke: #FFFFFF;
			stroke-width: 4;
			stroke-miterlimit: 10;
		}

		.st7 {
			display: inline;
		}

		.st8 {
			fill: none;
			stroke: #FFFFFF;
			stroke-width: 4;
			stroke-miterlimit: 10;
		}

		.st9 {
			display: inline;
			fill: none;
			stroke: #FFFFFF;
			stroke-miterlimit: 10;
		}
	</style>
	<g id="floor_x5F_1">
		<path class="st0" d="M463,779H71.9v-12.1H0v-92.4h72.7V443.1H34.6V249.3h26.8V42.4h271.9V0H463v43.3h52.8v395.9l102.5-12.4h227.4
		v171.4h16.5v107.1h-17.3v1.7H463V779z" />
	</g>
	<g id="rooms_1_">
		<g>
			<rect x="203.4" y="704.6" class="st1" width="27.7" height="26.8" />
			<text transform="matrix(1 0 0 1 216.7827 718.3335)" class="st2 st3 st4">1305</text>
		</g>
		<g>
			<rect x="186" y="704.6" class="st1" width="17.3" height="26.8" />
			<text transform="matrix(1 0 0 1 195.7827 718.3335)" class="st2 st3 st4">1305A</text>
		</g>
		<g>
			<rect x="153.1" y="704.6" class="st1" width="32.9" height="26.8" />
			<text transform="matrix(1 0 0 1 169.7827 718.3335)" class="st2 st3 st4">1301A</text>
		</g>
		<g>
			<polygon class="st1" points="118.5,704.6 118.5,718.5 124.6,731.5 153.1,731.5 153.1,704.6 		" />
			<text transform="matrix(1 0 0 1 136.7827 718.3335)" class="st2 st3 st4">1301</text>
		</g>
		<g>
			<rect x="118.5" y="659" class="st1" width="15.6" height="31.8" />
			<text transform="matrix(1 0 0 1 126.7827 674.3335)" class="st2 st3 st4">1319</text>
		</g>
		<g>
			<polygon class="st1" points="173.1,659.6 134.1,659.6 134.1,690.8 173.1,690.8 173.1,673 		" />
			<text transform="matrix(1 0 0 1 153.7827 674.3335)" class="st2 st3 st4">1308B</text>
		</g>
		<g>
			<polygon class="st1" points="182.1,673 189.1,673 189.1,659.6 173.1,659.6 173.1,673 		" />
			<text transform="matrix(1 0 0 1 180.7827 666.3335)" class="st2 st3 st4">1308A</text>
		</g>
		<g>
			<rect x="173.1" y="673" class="st1" width="9" height="17.8" />
			<text transform="matrix(1 0 0 1 177.7827 681.3335)" class="st2 st3 st4">1308C</text>
		</g>
		<g>
			<polygon class="st1"
				points="215.5,659.6 189.1,659.6 189.1,673 182.1,673 182.1,690.8 215.5,690.8 		" />
			<text transform="matrix(1 0 0 1 198.7827 675.3335)" class="st2 st3 st4">1308</text>
		</g>
		<g>
			<rect x="215.5" y="616" class="st1" width="15.6" height="74.8" />
			<text transform="matrix(1 0 0 1 222.7827 653.3335)" class="st2 st3 st4">1306</text>
		</g>
		<g>
			<rect x="215.5" y="601" class="st1" width="15.6" height="15" />
			<text transform="matrix(1 0 0 1 222.7827 608.3335)" class="st2 st3 st4">1313</text>
		</g>
		<g>
			<polygon class="st1" points="126.1,548.8 126.1,567 118.5,567 118.5,601 134.1,601 134.1,600.8 215.5,600.8 215.5,601 231.1,601 
			231.1,548.8 		" />
			<text transform="matrix(1 0 0 1 175.7827 575.3335)" class="st2 st3 st4">1314</text>
		</g>
		<g>
			<rect x="118.5" y="548.8" class="st1" width="7.6" height="18.2" />
			<text transform="matrix(1 0 0 1 122.7827 558.3335)" class="st2 st3 st4">1294</text>
		</g>
		<g>
			<rect x="59.6" y="369.6" class="st1" width="38.1" height="48.5" />
			<text transform="matrix(1 0 0 1 78.7827 393.3335)" class="st2 st3 st4">1271</text>
		</g>
		<g>
			<rect x="59.6" y="331.5" class="st1" width="38.1" height="38.1" />
			<text transform="matrix(1 0 0 1 78.7827 350.3335)" class="st2 st3 st4">1270</text>
		</g>
		<g>
			<polygon class="st1"
				points="198.2,299.5 198.2,322 114.2,322 114.2,377.4 264,377.4 264,299.5 		" />
			<text transform="matrix(1 0 0 1 188.7827 346.3335)" class="st2 st3 st4">1280</text>
		</g>
		<g>
			<rect x="198.2" y="260.5" class="st1" width="65.8" height="39" />
			<text transform="matrix(1 0 0 1 230.7827 280.3335)" class="st2 st3 st4">1267</text>
		</g>
		<g>
			<rect x="198.2" y="219.8" class="st1" width="65.8" height="40.7" />
			<text transform="matrix(1 0 0 1 230.7827 239.3335)" class="st2 st3 st4">1265</text>
		</g>
		<g>
			<rect x="198.2" y="179.1" class="st1" width="65.8" height="40.7" />
			<text transform="matrix(1 0 0 1 230.7827 199.3335)" class="st2 st3 st4">1263</text>
		</g>
		<g>
			<rect x="198.2" y="141" class="st1" width="65.8" height="38.1" />
			<text transform="matrix(1 0 0 1 230.7827 160.3335)" class="st2 st3 st4">1261</text>
		</g>
		<g>
			<rect x="114.2" y="260.5" class="st1" width="68.4" height="40.7" />
			<text transform="matrix(1 0 0 1 148.7827 280.3335)" class="st2 st3 st4">1268</text>
		</g>
		<g>
			<polygon class="st1" points="114.2,218.9 114.2,260.5 182.6,260.5 182.6,218.9 134.1,218.9 		" />
			<text transform="matrix(1 0 0 1 148.7827 239.3335)" class="st2 st3 st4">1266</text>
		</g>
		<g>
			<rect x="134.1" y="179.1" class="st1" width="48.5" height="39.8" />
			<text transform="matrix(1 0 0 1 157.7827 199.3335)" class="st2 st3 st4">1262B</text>
		</g>
		<g>
			<rect x="114.2" y="138.4" class="st1" width="19.9" height="80.5" />
			<text transform="matrix(1 0 0 1 125.7827 178.3335)" class="st2 st3 st4">1262</text>
		</g>
		<g>
			<rect x="134.1" y="138.4" class="st1" width="48.5" height="40.7" />
			<text transform="matrix(1 0 0 1 157.7827 160.3335)" class="st2 st3 st4">1262A</text>
		</g>
		<g>
			<rect x="114.2" y="94.3" class="st1" width="45.9" height="28.6" />
			<text transform="matrix(1 0 0 1 136.7827 108.3335)" class="st2 st3 st4">1253</text>
		</g>
		<g>
			<rect x="160.1" y="94.3" class="st1" width="30.3" height="28.6" />
			<text transform="matrix(1 0 0 1 174.7827 108.3335)" class="st2 st3 st4">1252</text>
		</g>
		<g>
			<polygon class="st1"
				points="223.1,94.3 190.4,94.3 190.4,122.8 198.2,122.8 198.2,123 223.1,123 		" />
			<text transform="matrix(1 0 0 1 206.7827 108.3335)" class="st2 st3 st4">1251</text>
		</g>
		<g>
			<polygon class="st1" points="223.1,94.3 223.1,123 198.2,123 198.2,141 264,141 264,94.3 		" />
			<text transform="matrix(1 0 0 1 241.7827 121.3335)" class="st2 st3 st4">1250</text>
		</g>
		<g>
			<rect x="264" y="94.3" class="st1" width="26" height="44.2" />
			<text transform="matrix(1 0 0 1 276.7827 118.3335)" class="st2 st3 st4">1214</text>
		</g>
		<g>
			<rect x="289.9" y="94.3" class="st1" width="76.2" height="62.3" />
			<text transform="matrix(1 0 0 1 327.7827 125.3335)" class="st2 st3 st4">1213</text>
		</g>
		<g>
			<rect x="366.1" y="94.3" class="st1" width="19.9" height="62.3" />
			<text transform="matrix(1 0 0 1 375.7827 125.3335)" class="st2 st3 st4">1212</text>
		</g>
		<g>
			<polygon class="st1"
				points="412.1,94.3 412.1,125 386,125 386,183.4 418.9,183.4 424.5,183.4 439.7,183.4 439.7,94.3 		" />
			<text transform="matrix(1 0 0 1 412.7827 150.3335)" class="st2 st3 st4">1210</text>
		</g>
		<g>
			<rect x="386" y="94.3" class="st1" width="26.1" height="30.7" />
			<text transform="matrix(1 0 0 1 398.7827 109.3335)" class="st2 st3 st4">1211</text>
		</g>
		<g>
			<rect x="289.9" y="156.6" class="st1" width="96.1" height="26.8" />
			<text transform="matrix(1 0 0 1 337.7827 170.3335)" class="st2 st3 st4">1217</text>
		</g>
		<g>
			<polygon class="st1"
				points="289.9,183.4 289.9,138.4 264,138.4 264,545.3 418.9,545.3 418.9,183.4 		" />
			<text transform="matrix(1 0 0 1 337.7827 355.3335)" class="st2 st3 st4">1279</text>
		</g>
		<g>
			<path class="st1"
				d="M526.3,529.8c1.6,3.7,2.9,7.7,3.8,12c2.5,12.2,0.9,23.8-3.5,32.2h23.1v-44.2H526.3z" />
			<text transform="matrix(1 0 0 1 539.7827 552.3335)" class="st2 st3 st4">1127</text>
		</g>
		<g>
			<polygon class="st1" points="573,457.5 526.9,463.1 532.4,503.8 573,503.8 		" />
			<text transform="matrix(1 0 0 1 549.7827 480.3335)" class="st2 st3 st4">1133</text>
		</g>
		<g>
			<polygon class="st1" points="566.1,588.6 573.9,652.7 599,652.7 599,588.6 		" />
			<text transform="matrix(1 0 0 1 584.7827 618.3335)" class="st2 st3 st4">1111</text>
		</g>
		<g>
			<polygon class="st1"
				points="599,566.1 599,573.9 599,588.6 599,652.7 657.9,652.7 657.9,566.1 		" />
			<text transform="matrix(1 0 0 1 628.7827 608.3335)" class="st2 st3 st4">1116</text>
		</g>
		<g>
			<rect x="657.9" y="566.1" class="st1" width="71" height="86.6" />
			<text transform="matrix(1 0 0 1 693.7827 608.3335)" class="st2 st3 st4">1117</text>
		</g>
		<g>
			<rect x="728.9" y="566.1" class="st1" width="72.7" height="86.6" />
			<text transform="matrix(1 0 0 1 764.7827 608.3335)" class="st2 st3 st4">1118</text>
		</g>
		<g>
			<rect x="599" y="517.6" class="st1" width="26" height="48.5" />
			<text transform="matrix(1 0 0 1 611.7827 542.3335)" class="st2 st3 st4">1151A</text>
		</g>
		<g>
			<rect x="625" y="517.6" class="st1" width="23.4" height="48.5" />
			<text transform="matrix(1 0 0 1 636.7827 542.3335)" class="st2 st3 st4">1151B</text>
		</g>
		<g>
			<rect x="648.4" y="517.6" class="st1" width="21.6" height="48.5" />
			<text transform="matrix(1 0 0 1 658.7827 542.3335)" class="st2 st3 st4">1152</text>
		</g>
		<g>
			<rect x="670" y="517.6" class="st1" width="23.4" height="48.5" />
			<text transform="matrix(1 0 0 1 681.7827 542.3335)" class="st2 st3 st4">1153A</text>
		</g>
		<g>
			<rect x="693.4" y="517.6" class="st1" width="23.4" height="48.5" />
			<text transform="matrix(1 0 0 1 704.7827 542.3335)" class="st2 st3 st4">1153B</text>
		</g>
		<g>
			<rect x="738.4" y="517.6" class="st1" width="26" height="48.5" />
			<text transform="matrix(1 0 0 1 751.7827 542.3335)" class="st2 st3 st4">1156</text>
		</g>
		<g>
			<polygon class="st1"
				points="785.1,510.7 772.2,510.7 772.2,517.6 764.4,517.6 764.4,545 785.1,545 		" />
			<text transform="matrix(1 0 0 1 774.7827 529.3335)" class="st2 st3 st4">1158B</text>
		</g>
		<g>
			<rect x="785.1" y="510.7" class="st1" width="16.5" height="34.3" />
			<text transform="matrix(1 0 0 1 793.7827 529.3335)" class="st2 st3 st4">1157</text>
		</g>
		<g>
			<polygon class="st1"
				points="801.6,545 785.1,545 783.1,545 776.1,545 776.1,566.1 801.6,566.1 		" />
			<text transform="matrix(1 0 0 1 787.7827 555.3335)" class="st2 st3 st4">1158</text>
		</g>
		<g>
			<rect x="764.4" y="545" class="st1" width="11.7" height="21.1" />
			<text transform="matrix(1 0 0 1 770.7827 555.3335)" class="st2 st3 st4">1158A</text>
		</g>
		<g>
			<rect x="716.8" y="517.6" class="st1" width="21.6" height="37.2" />
			<text transform="matrix(1 0 0 1 727.7827 536.3335)" class="st2 st3 st4">1154</text>
		</g>
		<g>
			<rect x="706.4" y="451.8" class="st1" width="26.8" height="26" />
			<text transform="matrix(1 0 0 1 720.7827 465.3335)" class="st2 st3 st4">1140</text>
		</g>
		<g>
			<rect x="706.4" y="477.8" class="st1" width="26.8" height="25.1" />
			<text transform="matrix(1 0 0 1 720.7827 490.3335)" class="st2 st3 st4">1141</text>
		</g>
		<g>
			<rect x="733.2" y="451.8" class="st1" width="26.8" height="26" />
			<text transform="matrix(1 0 0 1 746.7827 465.3335)" class="st2 st3 st4">1143</text>
		</g>
		<g>
			<rect x="733.2" y="477.8" class="st1" width="26.8" height="25.1" />
			<text transform="matrix(1 0 0 1 746.7827 490.3335)" class="st2 st3 st4">1142</text>
		</g>
		<g>
			<rect x="626.7" y="451.8" class="st1" width="26.8" height="26" />
			<text transform="matrix(1 0 0 1 640.7827 465.3335)" class="st2 st3 st4">1135</text>
		</g>
		<g>
			<rect x="626.7" y="477.8" class="st1" width="26.8" height="25.1" />
			<text transform="matrix(1 0 0 1 640.7827 490.3335)" class="st2 st3 st4">1136</text>
		</g>
		<g>
			<rect x="653.6" y="451.8" class="st1" width="26.8" height="26" />
			<text transform="matrix(1 0 0 1 666.7827 465.3335)" class="st2 st3 st4">1138</text>
		</g>
		<g>
			<rect x="653.6" y="477.8" class="st1" width="26.8" height="25.1" />
			<text transform="matrix(1 0 0 1 666.7827 490.3335)" class="st2 st3 st4">1137</text>
		</g>
		<g>
			<rect x="716.8" y="554.9" class="st1" width="21.6" height="11.3" />
			<text transform="matrix(1 0 0 1 727.7827 560.3335)" class="st2 st3 st4">1118A</text>
		</g>
		<g>
			<rect x="492.5" y="615.5" class="st1" width="26.8" height="29.4" />
			<text transform="matrix(1 0 0 1 505.7827 630.3335)" class="st2 st3 st4">1104</text>
		</g>
		<g>
			<rect x="492.5" y="644.9" class="st1" width="24.2" height="24.2" />
			<text transform="matrix(1 0 0 1 504.7827 657.3335)" class="st2 st3 st4">1107A</text>
		</g>
		<g>
			<polygon class="st1" points="541.9,615.5 519.4,615.5 519.4,633.7 546.8,633.7 		" />
			<text transform="matrix(1 0 0 1 531.7827 625.3335)" class="st2 st3 st4">1105</text>
		</g>
		<g>
			<polygon class="st1"
				points="546.8,633.7 519.4,633.7 519.4,644.9 516.8,644.9 516.8,653.6 551.4,653.6 551.4,651 		" />
			<text transform="matrix(1 0 0 1 532.7827 643.3335)" class="st2 st3 st4">1106</text>
		</g>
		<g>
			<polygon class="st1"
				points="516.8,669.2 492.5,669.2 492.5,682.1 551.4,682.1 551.4,653.6 516.8,653.6 		" />
			<text transform="matrix(1 0 0 1 532.7827 667.3335)" class="st2 st3 st4">1107</text>
		</g>
		<g>
			<rect x="118.5" y="601" class="st1" width="15.6" height="58" />
			<text transform="matrix(1 0 0 1 126.7827 630.3335)" class="st2 st3 st4">1318</text>
		</g>
		<g>
			<rect x="199.9" y="630.2" class="st1" width="15.6" height="29.4" />
			<text transform="matrix(1 0 0 1 207.7827 645.3335)" class="st2 st3 st4">1310</text>
		</g>
		<g>
			<rect x="160.9" y="630.2" class="st1" width="39" height="29.4" />
			<text transform="matrix(1 0 0 1 180.7827 644.3335)" class="st2 st3 st4">1310A</text>
		</g>
		<g>
			<rect x="134.1" y="630.2" class="st1" width="26.8" height="29.4" />
			<text transform="matrix(1 0 0 1 148.7827 644.3335)" class="st2 st3 st4">1310B</text>
		</g>
		<g>
			<rect x="199.9" y="600.8" class="st1" width="15.6" height="29.4" />
			<text transform="matrix(1 0 0 1 207.7827 617.3335)" class="st2 st3 st4">1312</text>
		</g>
		<g>
			<rect x="160.9" y="600.8" class="st1" width="39" height="29.4" />
			<text transform="matrix(1 0 0 1 180.7827 616.3335)" class="st2 st3 st4">1312A</text>
		</g>
		<g>
			<rect x="134.1" y="600.8" class="st1" width="26.8" height="29.4" />
			<text transform="matrix(1 0 0 1 148.7827 616.3335)" class="st2 st3 st4">1312B</text>
		</g>
	</g>
	<g id="staircase">
		<g>
			<rect x="358.3" y="25" class="st1" width="79.7" height="47.6" />
			<text transform="matrix(1 0 0 1 397.7827 50.3335)" class="st2 st3 st4">1202</text>
		</g>
		<g>

			<ellipse transform="matrix(0.9802 -0.198 0.198 0.9802 -98.354 110.5901)" class="st1" cx="503.8"
				cy="547.1" rx="26.8" ry="39.8" />
			<text transform="matrix(1 0 0 1 503.7827 547.3335)" class="st2 st3 st4">1103</text>
		</g>
		<g>
			<polygon class="st1" points="837.1,680.4 837.1,623.3 820.7,623.3 820.7,505.5 801.6,505.5 801.6,652.7 819.8,652.7 819.8,680.4 
					" />
			<text transform="matrix(1 0 0 1 810.7827 593.3335)" class="st2 st3 st4">1162</text>
		</g>
		<g>
			<rect x="25" y="699.5" class="st1" width="71.9" height="42.4" />
			<text transform="matrix(1 0 0 1 60.7827 720.3335)" class="st2 st3 st4">1273</text>
		</g>
	</g>
	<g id="restroom">
		<g>
			<rect x="570.5" y="517.6" class="st1" width="28.6" height="56.3" />
			<text transform="matrix(1 0 0 1 584.7827 545.3335)" class="st2 st3 st4">1109</text>
		</g>
	</g>
	<g id="walls" class="st5">
		<polygon class="st6" points="25,699.5 25,741.9 96.9,741.9 96.9,754 438,754 438,682.1 819.8,682.1 819.8,680.4 837.1,680.4 
		837.1,623.3 820.7,623.3 820.7,451.8 619.8,451.8 490.8,467.4 490.8,68.3 438,68.3 438,25 358.3,25 358.3,67.4 86.5,67.4 
		86.5,274.3 59.6,274.3 59.6,418.1 97.7,418.1 97.7,699.5 	" />
		<rect x="203.4" y="704.6" class="st6" width="27.7" height="26.8" />
		<rect x="186" y="704.6" class="st6" width="17.3" height="26.8" />
		<rect x="153.1" y="704.6" class="st6" width="32.9" height="26.8" />
		<polygon class="st6" points="118.5,704.6 118.5,718.5 124.6,731.5 153.1,731.5 153.1,704.6 	" />
		<rect x="118.5" y="659" class="st6" width="15.6" height="31.8" />
		<polygon class="st6" points="173.1,659.6 134.1,659.6 134.1,690.8 173.1,690.8 173.1,673 	" />
		<polygon class="st6" points="182.1,673 189.1,673 189.1,659.6 173.1,659.6 173.1,673 	" />
		<rect x="173.1" y="673" class="st6" width="9" height="17.8" />
		<polygon class="st6" points="215.5,659.6 189.1,659.6 189.1,673 182.1,673 182.1,690.8 215.5,690.8 	" />
		<rect x="215.5" y="616" class="st6" width="15.6" height="74.8" />
		<rect x="215.5" y="601" class="st6" width="15.6" height="15" />
		<polygon class="st6" points="126.1,548.8 126.1,567 118.5,567 118.5,601 134.1,601 134.1,600.8 215.5,600.8 215.5,601 231.1,601 
		231.1,548.8 	" />
		<rect x="118.5" y="548.8" class="st6" width="7.6" height="18.2" />
		<rect x="59.6" y="369.6" class="st6" width="38.1" height="48.5" />
		<rect x="59.6" y="331.5" class="st6" width="38.1" height="38.1" />
		<polygon class="st6" points="198.2,299.5 198.2,322 114.2,322 114.2,377.4 264,377.4 264,299.5 	" />
		<rect x="198.2" y="260.5" class="st6" width="65.8" height="39" />
		<rect x="198.2" y="219.8" class="st6" width="65.8" height="40.7" />
		<rect x="198.2" y="179.1" class="st6" width="65.8" height="40.7" />
		<rect x="198.2" y="141" class="st6" width="65.8" height="38.1" />
		<rect x="114.2" y="260.5" class="st6" width="68.4" height="40.7" />
		<polygon class="st6" points="114.2,218.9 114.2,260.5 182.6,260.5 182.6,218.9 134.1,218.9 	" />
		<rect x="134.1" y="179.1" class="st6" width="48.5" height="39.8" />
		<rect x="114.2" y="138.4" class="st6" width="19.9" height="80.5" />
		<rect x="134.1" y="138.4" class="st6" width="48.5" height="40.7" />
		<rect x="114.2" y="94.3" class="st6" width="45.9" height="28.6" />
		<rect x="160.1" y="94.3" class="st6" width="30.3" height="28.6" />
		<polygon class="st6" points="223.1,94.3 190.4,94.3 190.4,122.8 198.2,122.8 198.2,123 223.1,123 	" />
		<polygon class="st6" points="223.1,94.3 223.1,123 198.2,123 198.2,141 264,141 264,94.3 	" />
		<rect x="264" y="94.3" class="st6" width="26" height="44.2" />
		<rect x="289.9" y="94.3" class="st6" width="76.2" height="62.3" />
		<rect x="366.1" y="94.3" class="st6" width="19.9" height="62.3" />
		<polygon class="st6"
			points="412.1,94.3 412.1,125 386,125 386,183.4 418.9,183.4 424.5,183.4 439.7,183.4 439.7,94.3 	" />
		<rect x="386" y="94.3" class="st6" width="26.1" height="30.7" />
		<rect x="358.3" y="25" class="st6" width="79.7" height="47.6" />
		<rect x="289.9" y="156.6" class="st6" width="96.1" height="26.8" />
		<polygon class="st6" points="289.9,183.4 289.9,138.4 264,138.4 264,545.3 418.9,545.3 418.9,183.4 	" />
		<g class="st7">
			<path class="st8" d="M512.1,586c14.2-3.3,22.3-22.9,18-44.2c-4.4-21.6-19.7-36.7-34.2-33.7c-14.5,2.9-22.8,22.8-18.4,44.4
			c3,14.9,11.2,26.7,20.8,31.6" />
		</g>
		<path class="st6"
			d="M526.3,529.8c1.6,3.7,2.9,7.7,3.8,12c2.5,12.2,0.9,23.8-3.5,32.2h23.1v-44.2H526.3z" />
		<rect x="570.5" y="517.6" class="st6" width="28.6" height="56.3" />
		<polygon class="st6" points="573,457.5 526.9,463.1 532.4,503.8 573,503.8 	" />
		<polygon class="st6" points="566.1,588.6 573.9,652.7 599,652.7 599,588.6 	" />
		<polygon class="st6" points="599,566.1 599,573.9 599,588.6 599,652.7 657.9,652.7 657.9,566.1 	" />
		<rect x="657.9" y="566.1" class="st6" width="71" height="86.6" />
		<rect x="728.9" y="566.1" class="st6" width="72.7" height="86.6" />
		<polygon class="st6" points="837.1,680.4 837.1,623.3 820.7,623.3 820.7,505.5 801.6,505.5 801.6,652.7 819.8,652.7 819.8,680.4 	
		" />
		<rect x="599" y="517.6" class="st6" width="26" height="48.5" />
		<rect x="625" y="517.6" class="st6" width="23.4" height="48.5" />
		<rect x="648.4" y="517.6" class="st6" width="21.6" height="48.5" />
		<rect x="670" y="517.6" class="st6" width="23.4" height="48.5" />
		<rect x="693.4" y="517.6" class="st6" width="23.4" height="48.5" />
		<rect x="738.4" y="517.6" class="st6" width="26" height="48.5" />
		<rect x="785.1" y="510.7" class="st6" width="16.5" height="34.3" />
		<polygon class="st6" points="801.6,545 785.1,545 783.1,545 776.1,545 776.1,566.1 801.6,566.1 	" />
		<rect x="764.4" y="545" class="st6" width="11.7" height="21.1" />
		<rect x="716.8" y="517.6" class="st6" width="21.6" height="37.2" />
		<rect x="706.4" y="451.8" class="st6" width="26.8" height="26" />
		<rect x="706.4" y="477.8" class="st6" width="26.8" height="25.1" />
		<rect x="733.2" y="451.8" class="st6" width="26.8" height="26" />
		<rect x="733.2" y="477.8" class="st6" width="26.8" height="25.1" />
		<rect x="626.7" y="451.8" class="st6" width="26.8" height="26" />
		<rect x="626.7" y="477.8" class="st6" width="26.8" height="25.1" />
		<rect x="653.6" y="451.8" class="st6" width="26.8" height="26" />
		<rect x="653.6" y="477.8" class="st6" width="26.8" height="25.1" />
		<rect x="716.8" y="554.9" class="st6" width="21.6" height="11.3" />
		<rect x="492.5" y="615.5" class="st6" width="26.8" height="29.4" />
		<rect x="492.5" y="644.9" class="st6" width="24.2" height="24.2" />
		<polygon class="st6" points="541.9,615.5 519.4,615.5 519.4,633.7 546.8,633.7 	" />
		<polygon class="st6"
			points="546.8,633.7 519.4,633.7 519.4,644.9 516.8,644.9 516.8,653.6 551.4,653.6 551.4,651 	" />
		<polygon class="st6"
			points="516.8,669.2 492.5,669.2 492.5,682.1 551.4,682.1 551.4,653.6 516.8,653.6 	" />
		<rect x="118.5" y="601" class="st6" width="15.6" height="58" />
		<rect x="199.9" y="630.2" class="st6" width="15.6" height="29.4" />
		<rect x="160.9" y="630.2" class="st6" width="39" height="29.4" />
		<rect x="134.1" y="630.2" class="st6" width="26.8" height="29.4" />
		<rect x="199.9" y="600.8" class="st6" width="15.6" height="29.4" />
		<rect x="160.9" y="600.8" class="st6" width="39" height="29.4" />
		<rect x="134.1" y="600.8" class="st6" width="26.8" height="29.4" />
		<rect x="25" y="699.5" class="st6" width="71.9" height="42.4" />
		<g class="st7">
			<polygon class="st8"
				points="785.1,510.7 772.2,510.7 772.2,517.6 764.4,517.6 764.4,545 785.1,545 		" />
		</g>
	</g>
	<g id="you" class="st5">
		<circle class="st9" cx="487.6" cy="643.5" r="8" />
	</g>
</svg>`;
		return <Router>
			<Route exact
				path="/"
				render={()=>{
					return <div>
						<FloorPlan
							location={{
							// passed from route as props...
								campus: "main",
								building: "nano",
								floor: 1,
								room: "00A"
							}}
							svg={NanoF1}>
						</FloorPlan>
					</div>
				}}
			/>
		</Router>
	}
}

export default App;