import React, {useState, useEffect, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Customerlist() {
    const [customers, setCustomers] = useState([]);

    const gridRef = useRef();

    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        { headername: 'Firstname', field: 'firstname', sortable: true, filter: true },
        { headername: 'Lastname', field: 'lastname', sortable: true, filter: true },
        { headername: 'Streetaddress', field: 'streetaddress', sortable: true, filter: true },
        { headername: 'Postcode', field: 'postcode', sortable: true, filter: true },
        { headername: 'City', field: 'city', sortable: true, filter: true },
        { headername: 'Email', field: 'email', sortable: true, filter: true },
        { headername: 'Phone', field: 'phone', sortable: true, filter: true }
    ]

    return(
        <div>
            <div className="ag-theme-material" style={{height:'700px', width:'90%', margin:'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    suppressCellSelection={true}
                    onGridReady={ params => {
                        gridRef.current = params.api
                    }}
                    columnDefs={columns}
                    rowData={customers}
                    pagination="true"
                    paginationPageSize="10"
                >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Customerlist;