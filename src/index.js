import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
/*
import VMScaleSets from './containers/VMScaleSets';
import VirtualMachines from "./containers/VirtualMachines";

*/
// import Time from './components/Time'
// import Counter from './components/Counter'
// import ActionLink from "./components/ActionLink";
// import Toggle from "./components/Toggle";
// import Greeting from "./components/Greetings";
import List from "./components/List";


/*ReactDOM.render(<div>
    <Greeting username={"Reza"} isLoggedIn={true} />
    <Greeting />
</div>, document.getElementById('root'));*/

const numbers = [1,2,3,4,5,6,7];

ReactDOM.render(
    <List numbers = {numbers}/>
, document.getElementById('root'));


registerServiceWorker();
