const Square = (props) => {
    const {
        value,
        index,
        onSquareClick
    } = props;

    return <button className="square" onClick={() => onSquareClick(index)}>{value}</button>
};

export default Square;