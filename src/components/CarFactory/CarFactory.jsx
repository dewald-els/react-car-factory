import { useEffect, useState } from "react"
import AppContainer from "../shared/AppContainer"
import CarColours from "./CarColours/CarColours"
import CarFactoryBuild from "./CarFactoryBuild/CarFactoryBuild"
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

    const SectionComponent = carFactorySectionComponents[currentSection]

    return (
        <main>
            <AppContainer>
                <h1>The Car Factory</h1>
                <p>Let's customise your car. Choose on of the options below to get started.</p>
                <CarFactorySections
                    sectionClicked={(section) => setCurrentSection(section)} />

                <CarFactoryBuild />

                {currentSection && <SectionComponent />}
            </AppContainer>
        </main>
    )
}
export default CarFactory