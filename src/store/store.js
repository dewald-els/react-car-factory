import create from "zustand";
import { findAllCarColours } from "../api/carColours";
import { findAllCarRims } from "../api/carRims";
import { findAllCarSeats } from "../api/carSeats";
import { findAllCarTypes } from "../api/carTypes";

const useStore = create((set, get) => ({
    carFactorySections: [
        {
            name: 'types',
            selectedValue: null
        },
        {
            name: 'seats',
            selectedValue: null
        },
        {
            name: 'rims',
            selectedValue: null
        },
        {
            name: 'colours',
            selectedValue: null
        }
    ],
    // Configure Actions
    setSectionSelectedValue: (sectionName, selectedCarType) => {
        const carFactorySections = [...get().carFactorySections].map(section => {
            if (section.name === sectionName) {
                return {
                    ...section,
                    selectedValue: selectedCarType
                }
            }
            return section
        })
        set({ carFactorySections })
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