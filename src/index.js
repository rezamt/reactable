import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VMScaleSets from './containers/VMScaleSets';
import registerServiceWorker from './registerServiceWorker';
import VirtualMachines from "./containers/VirtualMachines";

ReactDOM.render(<VirtualMachines />, document.getElementById('root'));

registerServiceWorker();
