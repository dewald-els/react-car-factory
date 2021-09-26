import useStore from "../../../store/store"
import LiBoxWithShadow from "../shared/BoxWithShadow"

const CarRimsListItem = ({ carRim }) => {
    const image = `img/rims/${carRim.id}.svg`
    const alt = `A ${carRim.type} car rim`

    const setSectionSelectedValue = useStore(state => state.setSectionSelectedValue)

    const handleClick = () => {
        setSectionSelectedValue('rims', carRim)
    }

    return (
        <LiBoxWithShadow>
            <button onClick={ handleClick }>
                <img src={image} alt={alt} width="50" />
                <h4>{carRim.type}</h4>
            </button>
        </LiBoxWithShadow>
    )
}
export default CarRimsListItem