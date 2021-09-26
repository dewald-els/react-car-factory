import ColouredSquare from '../../shared/ColouredSquare'
import styles from './CarFactorySections.module.css'

const CarFactorySectionItem = ({ sectionItemClicked, carSection }) => {

    let selectedValueImage = null

    if (carSection.selectedValue) {
        if (carSection.name === 'colours') {
            selectedValueImage = <ColouredSquare colourHex={ carSection.selectedValue.hex } />
        }
        else {
            selectedValueImage = <img src={ `img/${carSection.name}/${carSection.selectedValue.id}.svg` } width="50" />
        }
    }

    return (
        <button onClick={() => sectionItemClicked(carSection)} className={ styles.CarFactorySectionItem }>
            { selectedValueImage }
            <b>Car {carSection.name}</b>
        </button>
    )
}
export default CarFactorySectionItem