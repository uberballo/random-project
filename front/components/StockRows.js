
const Stock = ({ stocks }) => {
    const rows = stocks.map(stock =>
        <li>{stock.name}</li>
    )
    return (
        <ul>
            {rows}
        </ul>
    )
}
export default Stock