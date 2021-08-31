import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate";
import QueryService from "../../servises/getApi";
import "./Episodes.scss"

function Episodes() {
    const episodes = new QueryService();

    const [items, setItems] = useState([])
    const [filtered, setFiltered] = useState([])
    const [pageCount, setPageCount] = useState()
    const [itemCount, setItemCount] = useState(1)

    function changePage(page) {
        episodes.getEpisodesPage(page)
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log(body);
            })
    }
    function episode(value) {
        const season = value.match(/\w([0-9]+)\w([0-9]+)/)[1]
        const episode = value.match(/\w([0-9]+)\w([0-9]+)/)[2]
        return `Season ${Number(season)}   Episode ${Number(episode)}`
    }

    function countNumber(num) {
        setItemCount(itemCount + num);
        console.log(itemCount);
        return itemCount
    }

    useEffect(() => {
        episodes.getEpisodes()
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
            })

    }, [])

    return (
        <div className="wrapper-episode">

            <table>
                <tr>
                    <td>Name</td>
                    <td>Release date</td>
                    <td>Episode</td>
                </tr>
                {items
                    .sort((a, b) => a.name > b.name ? 1 : -1)
                    .map(el => {
                        return <tr>
                            <td className="name">{el.name}</td>
                            <td>{el.air_date}</td>
                            <td className="episode">{episode(el.episode)}</td>
                        </tr>
                    })}
            </table>

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
export default Episodes;