export const API_BASE_URL = import.meta.env.VITE_CAR_FACTORY_API
const defaultConfig = {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    }
}
export const fetchAsync = async (endpoint, config = defaultConfig) => {
    try {
        const response = await fetch(API_BASE_URL + endpoint, config)
        
        if (!response.ok) {
            throw new Error('Could not complete request to ' + endpoint)
        }

        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, null]
    }
}