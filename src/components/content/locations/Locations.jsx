import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import QueryService from '../../../services/getApi';
import ItemsLocations from './itemsLocations/ItemsLocations';
import './Locations.scss'

function Locations() {

    const locations = new QueryService();

    const [items, setItems] = useState([])
    const [sorted, setSorted] = useState([])
    const [pageCount, setPageCount] = useState()

    function changePage(page) {
        locations.getLocationsPage(page)
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
            })
    }

    function selectFilterName(f) {
        if (f) {
            const result = items.filter(el => el.name.includes(f.target.value))
            setSorted(result)
            console.log(sorted);
        } else {
            setSorted(sorted.length = 0)
            console.log(sorted);
        }

    }
    function selectFilterType(f) {
        const result = items.filter(el => el.type.includes(f.target.value))
        setSorted(result)
        console.log(result);
    }
    function selectFilterDimension(f) {
        const result = items.filter(el => el.dimension.includes(f.target.value))
        setSorted(result)
        console.log(result);
    }

    useEffect(() => {
        locations.getLocations()
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log(body);
            })
    }, [])

    return (
        <div className="wrapper-locations">
            <div className="header-locations">
                <ul>
                    <li>
                        <label for="name">Name</label>
                        <input type="text" id="name" onChange={(e) => selectFilterName(e)} />

                    </li>
                    <li>
                        <label for="type">Type</label>
                        <input type="text" id="type" onChange={(e) => selectFilterType(e)} />

                    </li>
                    <li>
                        <label for="dimension">Dimension</label>
                        <input type="text" id="dimension" onChange={(e) => selectFilterDimension(e)} />

                    </li>
                </ul>
            </div>
            <div className="items-locations">
                <div className="header-items">
                    <div className="name-item">Name</div>
                    <div className="type-item">Type</div>
                    <div className="dimension-item">Dimension</div>
                </div>
                {!sorted.length ?
                    items.map((el) => <ItemsLocations
                        name={el.name}
                        type={el.type}
                        dimension={el.dimension} />) :
                    sorted.map((el) => <ItemsLocations
                        name={el.name}
                        type={el.type}
                        dimension={el.dimension} />)}
            </div>
            <div className="pagination">
                <ReactPaginate
                    pageCount={pageCount}
                    breakClassName={'page-item'}
                    onPageChange={(num) => changePage(num.selected)}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}
export default Locations;