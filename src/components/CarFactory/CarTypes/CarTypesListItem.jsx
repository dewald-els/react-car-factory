import useStore from '../../../store/store'
import LiBoxWithShadow from '../shared/BoxWithShadow'

const CarTypesListItem = ({ carType }) => {
    const image = `img/types/${carType.id}.svg`
    const alt = `${carType.name} car type`

    const setSectionSelectedValue = useStore(state => state.setSectionSelectedValue)

    const handleClick = () => {
        setSectionSelectedValue('types', carType)
    }

    return (
        <LiBoxWithShadow>
            <button onClick={ handleClick }>
                <img src={image} alt={ alt } width="75" />
                <h4>{carType.name}</h4>
            </button>
        </LiBoxWithShadow>
    )
}

export default CarTypesListItem