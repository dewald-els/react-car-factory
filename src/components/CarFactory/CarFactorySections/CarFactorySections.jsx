import useStore from "../../../store/store"

const sections = ['types', 'colours', 'seats', 'rims']
const CarFactorySections = ({ sectionClicked }) => {

    const selectedCarType = useStore(state => state.selectedCarType)

    console.log(selectedCarType);
    
    const carFactorySectionList = sections.map(carSection =>
        <button onClick={() => sectionClicked(carSection)} key={ carSection }>
            <b>Car {carSection}</b>
        </button>
    )

    return (
        <ul>
            {carFactorySectionList}
        </ul>
    )
}
export default CarFactorySections