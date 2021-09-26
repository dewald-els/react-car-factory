import useStore from '../../../store/store'
import ColouredSquare from '../../shared/ColouredSquare'
import styles from './CarColours.module.css'

const CarColoursListItem = ({ carColour }) => {
    


    const setSectionSelectedValue = useStore(state => state.setSectionSelectedValue)

    const handleClick = () => {
        setSectionSelectedValue('colours', carColour)
    }

    return (
        <li className={ styles.CarColoursListItem } onClick={ handleClick }>
            <h4>{ carColour.displayName }</h4>
            <ColouredSquare colourHex={ carColour.hex } />
        </li>
    )
}
export default CarColoursListItem