import React from "react";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./style.css";

import data from "./data";

const ss_columns = [
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Subscription',
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
        Header: () => <strong>SKU</strong>,
        accessor: 'sku.name'
    },
    {
        Header: 'Tier',
        accessor: 'sku.tier',
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value}</div>)
    },
    {
        Header: () => (
            <span>
        <i className="fa-tasks"/> Capacity
      </span>
        ),
        accessor: "sku.capacity",
        Cell: row => (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#dadada",
                    borderRadius: "2px"
                }}
            >
                <div
                    style={{marginLeft: "0.5em"}}
                >{row.value}</div>
                <div
                    style={{
                        width: `${row.value}%`,
                        height: "100%",
                        backgroundColor:
                            row.value > 10
                                ? "#ff2e00"
                                : row.value > 5
                                ? "#ffbf00"
                                : "#85cc00",
                        borderRadius: "2px",
                        transition: "all .2s ease-out"
                    }}
                />
            </div>
        )
    },
    {
        Header: 'Provisioning State',
        accessor: 'provisioningState',
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value.toLowerCase() === "succeeded" ? <span class="greenDot"></span> :
            <span className="redDot"></span>}</div>)
    },
    {
        Header: 'Over Provisioned',
        accessor: 'overprovision', // Custom value accessors!'overprovision'
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value ? <span class="redDot"></span> : <span className="greenDot"></span>}</div>)
    }
];

const vm_columns = [
    {
        Header: 'Name',
        accessor: 'computerName'
    },
    {
        Header: 'OS',
        accessor: 'osName'
    },
    {
        Header: 'IP',
        accessor: 'ip',
        Cell: row => (<div
            style={{textAlign: "center"}}
        >{row.value}</div>)
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
    }
];


class VMScaleSets extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <ReactTable
                data={data}
                columns={ss_columns}
                loading={false}
                filterable={true}
                className="-striped -highlight"
                // onFetchData: () => null,   @todo: Fetching Data from server
                // SubComponent={row => {
                //     // this is the broken part
                //
                //     // NOTE: you need to return your component if there a {}
                //     // and the correct semantics for the LI wrapper is UL (not DIV)
                //     return (
                //         <ul>
                //             {row.original.vms.map((vm, i) => {
                //                 // console.log(item)
                //                 return <li key={i}>{vm.computerName}</li>
                //             })}
                //         </ul>
                //     )
                // }}
                /*sorted={[{ // the sorting model for the table
                    id: 'subscription',
                    desc: false
                }, {
                    id: 'location',
                    desc: false
                }]}*/

                SubComponent={row => {
                    return (
                        <div style={{padding: "20px"}}>
                            <em>
                                List of Virtual Machines running inside Scale Set
                            </em>
                            <br/>
                            <br/>
                            <ReactTable
                                data={row.original.vms}
                                columns={vm_columns}
                                defaultPageSize={row.original.vms.length}
                                showPagination={false}
                            />
                        </div>
                    );
                }}
            />);
    }
}


export default VMScaleSets;
