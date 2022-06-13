const Counter = ({value,onIncClick,onDecClick}) => {
    return (
        <div>
            <span>{value}</span>
            <br/>
            <button type="button" onClick={onIncClick}>Increase</button>
            <button type="button" onClick={onIncClick}>Increase</button>
        </div>
    )
}


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncClick: PropTypes.func.isRequired,
    onDecClick: PropTypes.func.isRequired
};
