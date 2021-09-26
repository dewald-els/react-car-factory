import create from "zustand";
import { findAllCarColours } from "../api/carColours";
import { findAllCarRims } from "../api/carRims";
import { findAllCarSeats } from "../api/carSeats";
import { findAllCarTypes } from "../api/carTypes";

const useStore = create((set, get) => ({
    selectedCarType: null,
    selectedCarSeats: null,
    selectedCarRims: null,
    selectedCarColour: null,
    // Configure Actions
    setSelectedCarType: selectedCarType => {
        set({ selectedCarType })
    },
    setSelectedCarSeats: selectedCarSeats => {
        set({ selectedCarSeats })
    },
    setSelectedCarRims: selectedCarRims => {
        set({ selectedCarRims })
    },
    setSelectedCarColour: selectedCarColour => {
        set({ selectedCarColour })
    },
    // Car Types
    carTypes: [],
    carTypesError: '',
    // Colours
    carColours: [],
    carColoursError: '',
    // Seats
    carSeats: [],
    carSeatsError: '',
    // Rims
    carRims: [],
    carRimsError: '',
    // Async Actions
    fetchAllCarTypes: async () => {
        
        const types = get().carTypes
        
        if (types.length) {
            return
        }
        
        const [ carTypesError, carTypes ] = await findAllCarTypes()
        if (carTypesError !== null) {
            set({ carTypesError })
        }
        else {
            set({ carTypes })
        }
    },
    fetchAllCarColours: async () => {
        
        const colours = get().carColours        
        if (colours.length) {
            return
        }

        const [ carColoursError, carColours ] = await findAllCarColours()
        if (carColoursError !== null) {
            set({ carColoursError })
        }
        else {
            set({ carColours })
        }
    },
    fetchAllCarSeats: async () => {
        const seats = get().carSeats        
        if (seats.length) {
            return
        }
        const [ carSeatsError, carSeats ] = await findAllCarSeats()
        if (carSeatsError !== null) {
            set({ carSeatsError })
        }
        else {
            set({ carSeats })
        }
    },
    fetchAllCarRims: async () => {
        const rims = get().carRims        
        if (rims.length) {
            return
        }
        const [ carRimsError, carRims ] = await findAllCarRims()
        if (carRimsError !== null) {
            set({ carRimsError })
        }
        else {
            set({ carRims })
        }
    }
}))

export default useStore