import {useState} from 'react'
import './css/SortTable.css'
import RowList from './RowList'

const byField = (field, type) => { // сортировка массива объектов
    switch (type) {
        case 'asc': return (a, b) => a[field] > b[field] ? 1 : -1;
        case 'desc': return (a, b) => a[field] < b[field] ? 1 : -1;
    }
}

const SortTable = () => {
    const [rows, setRows] = useState([
        {id: 1, name: "apple", price: 5, count: 2},
        {id: 2, name: "orange", price: 19, count: 25},
        {id: 3, name: "banana", price: 25, count: 30},
        {id: 4, name: "pineapple", price: 40, count: 7},
        {id: 5, name: "cucumber", price: 14, count: 1},
        {id: 6, name: "tomato", price: 25, count: 0},
        {id: 7, name: "carrot", price: 7, count: 45},
    ]);
    // asc - по возрастанию, desc - по убыванию
    const [sort, setSort] = useState('asc')

    const sortTable = (e) => {
        let copy = Object.assign([], rows);
        let val = e.target.value
        let field

        switch (val) {
            case 'Row': field = 'id'; break
            case 'Name': field = 'name'; break
            case 'Price': field = 'price'; break
            case 'Count': field = 'count'; break
        }

        copy.sort(byField(field, sort))

        if(sort === 'asc') setSort('desc')
        else setSort('asc')

        setRows(copy)
    }

    return (
        <table className="productsTable">
            <caption>Products</caption>
            <thead>
                <tr>
                    <th><input type="button" value={'Row'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Name'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Price'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Count'} onClick={sortTable}/></th>
                </tr>
            </thead>
            <RowList rows={rows}/>
        </table>
    )
}

export default SortTable
