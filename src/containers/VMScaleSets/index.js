import React from "react";
import {makeData} from "./utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
    {
        columns: [
            {
                Header: "First Name",
                accessor: "firstName"
            },
            {
                Header: "Last Name",
                id: "lastName",
                accessor: d => d.lastName
            }
        ]
    },
    {
        Header: "Info",
        columns: [
            {
                Header: "Age",
                accessor: "age"
            },
            {
                Header: "Status",
                accessor: "status"
            }
        ]
    },
    {
        Header: "Stats",
        columns: [
            {
                Header: "Visits",
                accessor: "visits"
            }
        ]
    }
];

class VMSacleSets extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={row => {
                        return (
                            <div style={{padding: "20px"}}>
                                <em>
                                    Virtual Machines in ScaleSet : [ ] Increase   [ ] Decrease
                                </em>
                                <br/>
                                <br/>
                                <ReactTable
                                    data={data}
                                    columns={columns}
                                    defaultPageSize={3}
                                    showPagination={false}
                                    SubComponent={row => {
                                        return (
                                            <div style={{padding: "20px"}}>
                                                Another Sub Component!
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}


export default VMSacleSets;
