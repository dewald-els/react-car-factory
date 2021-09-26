import useStore from '../../../store/store'
import AppContainer from '../../shared/AppContainer'

const CarFactoryOuput = () => {

    const sections = useStore(state => state.carFactorySections)
    
    const sectionFinder = type => sections.find(section => section.name === type)
    
    const colour = sectionFinder('colours')
    const type = sectionFinder('types')
    const rims = sectionFinder('rims')
    const seats = sectionFinder('seats')

    return (
        <AppContainer>
            <h1>Your car is ready</h1>
            <p>
                Your { colour.selectedValue.displayName } coloured { type.selectedValue.name } 
                with { rims.selectedValue.name } and { seats.selectedValue.material } seats is ready for collection!
            </p>
        </AppContainer>
    )
}
export default CarFactoryOuput