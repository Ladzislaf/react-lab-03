const RowItem = ({cells}) => {
    let highlight
    if(cells.count < 3) highlight = 'medium'
    else highlight = 'normal'
    if(cells.count === 0) highlight = 'low'

    return (
        <tr>
            <td>{cells.id}</td>
            <td>{cells.name}</td>
            <td>{'$'}{cells.price}</td>
            <td className={highlight}>{cells.count}</td>
        </tr>
    );
};

export default RowItem;