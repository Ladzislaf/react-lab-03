import RowItem from './RowItem'

const RowList = ({rows}) => {
    return (
        <tbody>
            {rows.map((row, index) => {
                return <RowItem cells={row} key={index}/>
            })}
        </tbody>
    )
}

export default RowList