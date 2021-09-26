import { useEffect } from "react"
import CarTypesListItem from "./CarTypesListItem"
import styles from './CarTypes.module.css'
import useStore from '../../../store/store'

const CarTypesList = () => {

    const fetchAllCarTypes = useStore(state => state.fetchAllCarTypes)
    const carTypes = useStore(state => state.carTypes)

    useEffect(() => {
        fetchAllCarTypes()
    }, [])

    const carTypesList = carTypes.map(type =>
        <CarTypesListItem carType={type} key={type.id} />
    )

    return (
        <ul className={ styles.CarTypesList }>
            {carTypesList}
        </ul>
    )
}
export default CarTypesList