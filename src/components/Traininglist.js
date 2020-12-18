import React, {useState, useEffect, useRef} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    const gridRef = useRef();

    useEffect(() => {
        getTrainings();
    }, [])

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }
    

    const columns = [
        { headername: 'Date', field: 'date', sortable: true, filter: true },
        { headername: 'Duration', field: 'duration', sortable: true, filter: true },
        { headername: 'Activity', field: 'activity', sortable: true, filter: true },
        { headername: 'Firstname', field: 'customer.firstname', sortable: true, filter: true },
        { headername: 'Lastname', field: 'customer.lastname', sortable: true, filter: true }

    ]

    return(
        <div>
            <h1>Trainings</h1>
            <div className="ag-theme-material" style={{height:'700px', width:'90%', margin:'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    suppressCellSelection={true}
                    onGridReady={ params => {
                        gridRef.current = params.api
                    }}
                    columnDefs={columns}
                    rowData={trainings}
                    pagination="true"
                    paginationPageSize="10"
                >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Traininglist;