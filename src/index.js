import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
// import FilterableProductTable from "./components/FilterableProductTable";
//import productsData from "./products";

// import Calculator from "./components/Calculator";

import VMScaleSets from './containers/VMScaleSets';
// import VirtualMachines from "./containers/VirtualMachines";


ReactDOM.render(
        <VMScaleSets />
    , document.getElementById('root'));

registerServiceWorker();
