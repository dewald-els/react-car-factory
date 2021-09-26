import styles from './CarColours.module.css'

const CarColoursListItem = ({ carColour }) => {
    const boxColourStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '.25rem',
        backgroundColor: carColour.hex,
        border: '2px solid white',
        margin: '0 auto'
    }
    return (
        <li className={ styles.CarColoursListItem }>
            <h4>{ carColour.displayName }</h4>
            <div style={ boxColourStyle }></div>
        </li>
    )
}
export default CarColoursListItem