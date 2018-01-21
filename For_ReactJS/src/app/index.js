console.log('Заработало!');
import React from 'react';
import { render } from "react-dom";

import {Footer} from "./components/Foooter.js";

class Div1 extends React.Component {
	render() {
		return (<div class="rounddiv"><p> Hello world! </p></div>);
	}
}

render(<Div1/>, window.document.getElementById("Div1"));
render(<Footer/>, window.document.getElementById("footer"));