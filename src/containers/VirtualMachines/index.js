import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import data from "./data";
import IPPubLogo from './ip_pub.svg';


const vm_columns = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Subscritpion',
        accessor: 'subscription'
    },
    {
        Header: 'Resource Group',
        accessor: 'resourcegroup'
    },
    {
        Header: 'Location',
        accessor: 'location'
    },
    {
        Header: 'OS',
        accessor: 'imagePublisher'
    },
    {
        Header: 'Sku',
        accessor: 'size'
    },
    {
        Header: 'Provisioning State',
        accessor: 'statuses[0]',
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value.displayStatus}</div>)
    },
    {
        Header: 'Power State',
        accessor: 'statuses[1]',
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value.displayStatus}</div>)
    },
    {
        Header: 'IPs',
        accessor: 'networkInterfaces',
        Cell: row => {
            return <div>

                <div>Private: {row.value[0].privateIp}</div>
                <div>Public: {row.value[0].publicIp}</div>
            </div>
        }
    }
];


class VirtualMachines extends React.Component {

    render() {
        return (
            <ReactTable
                data={data}
                columns={vm_columns}
                loading={false}
                filterable={true}
                className="-striped -highlight"
            />);
    }

}

export default VirtualMachines
