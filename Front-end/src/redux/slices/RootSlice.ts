import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        budget: "budget",
        destination: "destination",
        end_date: "end_date",
        id: "id",
        items_needed: "items_needed",
        start_date: "start_date",
        total_luggages: "total_luggages",
        total_people: "total_people",
        trip_type: "trip_type",
    },
    reducers: {
        choosebudget: (state, action) => { state.budget = action.payload},
        choosedestination: (state, action) => { state.destination = action.payload},
        chooseenddate: (state, action) => { state.end_date = action.payload},
        chooseid: (state, action) => { state.id = action.payload},
        chooseitemsneeded: (state, action) => { state.items_needed = action.payload},
        choosestartdate: (state, action) => { state.start_date = action.payload},
        choosetotalluggages: (state, action) => { state.total_luggages = action.payload},
        choosetotalpeople: (state, action) => { state.total_people = action.payload},
        choosetriptype: (state, action) => { state.trip_type = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { choosebudget, choosedestination, chooseenddate, chooseid, chooseitemsneeded, choosestartdate, choosetotalluggages, choosetotalpeople,choosetriptype} = rootSlice.actions