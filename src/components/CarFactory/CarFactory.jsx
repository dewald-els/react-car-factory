import { useEffect, useState } from "react"
import AppContainer from "../shared/AppContainer"
import CarColours from "./CarColours/CarColours"
import CarFactorySections from "./CarFactorySections/CarFactorySections"
import CarRims from "./CarRims/CarRims"
import CarSeats from "./CarSeats/CarSeats"
import CarTypes from "./CarTypes/CarTypes"

const carFactorySectionComponents = {
    colours: CarColours,
    rims: CarRims,
    seats: CarSeats,
    types: CarTypes
}

const CarFactory = () => {
    
    const [currentSection, setCurrentSection] = useState('')

    const DynamicComponent = carFactorySectionComponents[currentSection]

    return (
        <main>
            <AppContainer>
                <h1>The Car Factory</h1>
                <p>Let's customise your car</p>
                <CarFactorySections
                    sectionClicked={(section) => setCurrentSection(section)} />

                {currentSection && <DynamicComponent />}
            </AppContainer>
        </main>
    )
}
export default CarFactory