const ColouredSquare = ({ colourHex, size = 50 }) => {
    const boxColourStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '.25rem',
        backgroundColor: colourHex,
        border: '2px solid white',
        margin: '0 auto'
    }
    return (
        <div style={ boxColourStyle }></div>
    )
}
export default ColouredSquare