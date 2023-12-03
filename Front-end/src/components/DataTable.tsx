// @ts-ignore
import React, { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'destination', headerName: "Destination", flex: 1},
    { field: 'trip_type', headerName: "Trip Type", flex: 1},
    { field: 'start_date', headerName: "Start Date", flex: 1},
    { field: 'end_date', headerName: "End Date", flex: 1},
    { field: 'total_people', headerName: "Total People", flex: 1},
    { field: 'total_luggages', headerName: "Total Luggages", flex: 1},
    { field: 'budget', headerName: "Budget", flex: 1},
    { field: 'items_needed', headerName: "Items Needed", flex: 1},
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { TravelData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row justify-center mx-auto bg-cover bg-fixed text-center">
            <div>
                <button
                    className="p-3 bg-cyan-100 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add to travel logs
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-cyan-100 rounded m-3 hover:bg-slate-800 hover:text-white" >Update travel logs</Button>
            <Button onClick={deleteData} className="p-3 bg-cyan-100 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete travel logs</Button>
        </div>
        <div className={ open ? "hidden" : "'justify-center mx-auto bg-cyan-100 bg-fixed text-center'"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-cyan-800 my-2 rounded text-white">My trips</h2>
            <DataGrid 
            rows={TravelData} 
            columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable