import useStore from '../../../store/store'
import LiBoxWithShadow from '../shared/BoxWithShadow'
import styles from './CarSeats.module.css'

const CarSeatsListItem = ({ carSeat }) => {

    const image = `img/seats/${carSeat.id}.svg`
    const alt = `${carSeat.material} seat option`

    const setSelectedSeats = useStore(state => state.setSelectedSeats)

    const handleClick = () => {
        setSelectedSeats(carSeat)
    }

    return (
        <LiBoxWithShadow>
            <button onClick={ handleClick }>
                <img src={ image } alt={ alt } width="50" />
                <h4>{ carSeat.material }</h4>
            </button>
        </LiBoxWithShadow>
    )
}
export default CarSeatsListItem