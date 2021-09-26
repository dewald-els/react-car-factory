import useStore from "../../../store/store"
import CarFactorySectionItem from "./CarFactorySectionItem"
import styles from './CarFactorySections.module.css'

const sectionSelector = state => state.carFactorySections

const CarFactorySections = ({ sectionClicked }) => {

    const sections = useStore(sectionSelector)
    
    const carFactorySectionList = sections.map(carSection =>
        <CarFactorySectionItem 
            sectionItemClicked={() => sectionClicked(carSection.name)} 
            carSection={ carSection }
            key={ carSection.name } />
    )

    return (
        <ul className={ styles.CarFactorySections }>
            {carFactorySectionList}
        </ul>
    )
}
export default CarFactorySections