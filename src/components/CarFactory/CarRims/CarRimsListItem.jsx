import LiBoxWithShadow from "../shared/BoxWithShadow"

const CarRimsListItem = ({ carRim }) => {
    const image = `img/rims/${carRim.id}.svg`
    const alt = `A ${carRim.type} car rim`
    return (
        <LiBoxWithShadow>
            <img src={ image } alt={ alt } width="50" />
            <h4>{ carRim.type }</h4>
        </LiBoxWithShadow>
    )
}
export default CarRimsListItem