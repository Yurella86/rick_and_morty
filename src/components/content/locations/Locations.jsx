import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import QueryService from '../../../services/getApi';
import ItemsLocations from './itemsLocations/ItemsLocations';
import './Locations.scss'

function Locations() {
    const locations = new QueryService();

    const [items, setItems] = useState([])
    const [show, setShowContent] = useState(true)
    const [sorted, setSorted] = useState([])
    const [filterName, setFilterName] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterDimension, setFilterDimension] = useState('')
    const [pageCount, setPageCount] = useState()

    function changePage(page) {
        locations.getLocationsPage(page)
            .then((body) => {
                setFilterName('')
                setFilterType('')
                setFilterDimension('')
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log('changePage=>', items)
            })
    }

    function selectFilterName() {
        if (filterName) {
            const result = items.filter(el => el.name.toUpperCase().includes(filterName.toUpperCase()))
            if (result.length) {
                setShowContent(true)
                setSorted(result)
            } else {
                setShowContent(false)
                console.log('result false');

            }
            setSorted(result)
        } else {
            setSorted(sorted.length = 0)
        }
    }

    function selectFilterType() {
        if (filterType) {
            const result = items.filter(el => el.type.toUpperCase().includes(filterType.toUpperCase()))
            if (result.length) {
                setShowContent(true)
                setSorted(result)
            } else {
                setShowContent(false)
            }
            setSorted(result)
        } else {
            setSorted(sorted.length = 0)
        }
    }

    function selectFilterDimension(f) {
        if (filterDimension) {
            const result = items.filter(el => el.dimension.toUpperCase().includes(filterDimension.toUpperCase()))
            if (result.length) {
                setShowContent(true)
                setSorted(result)
            } else {
                setShowContent(false)
            }
            setSorted(result)
        } else {
            setSorted(sorted.length = 0)
        }
    }
    useEffect(() => {
        locations.getLocations()
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
            })
    }, [])

    useEffect(() => {
        selectFilterName()
    }, [filterName])

    useEffect(() => {
        selectFilterType()
    }, [filterType])

    useEffect(() => {
        selectFilterDimension()
    }, [filterDimension])

    return (
        <div className="wrapper-locations">
            <div className="header-locations">
                <ul>
                    <li>
                        <label for="name">Name</label>
                        <input type="text" id="name" value={filterName} onChange={(e) => setFilterName(e.target.value)} />
                    </li>
                    <li>
                        <label for="type">Type</label>
                        <input type="text" id="type" value={filterType} onChange={(e) => setFilterType(e.target.value)} />
                    </li>
                    <li>
                        <label for="dimension">Dimension</label>
                        <input type="text" id="dimension" value={filterDimension} onChange={(e) => setFilterDimension(e.target.value)} />
                    </li>
                </ul>
            </div>
            <div className="items-locations">
                <div className="header-items">
                    <div className="name-item">Name</div>
                    <div className="type-item">Type</div>
                    <div className="dimension-item">Dimension</div>
                </div>
                {show ?
                    !sorted.length ?
                        items.map((el) => <ItemsLocations
                            name={el.name}
                            type={el.type}
                            dimension={el.dimension} />) :
                        sorted.map((el) => <ItemsLocations
                            name={el.name}
                            type={el.type}
                            dimension={el.dimension} />) :
                    <div className="not-found">Not Found!
                    </div>}
                <div className="footer-items">
                </div>
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