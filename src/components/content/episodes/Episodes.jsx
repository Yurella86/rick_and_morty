import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate";
import QueryService from "./../../../services/getApi";
import "./Episodes.scss"
import ItemsEpisode from "./ItemsEpisode/ItemsEpisode";

function Episodes() {
    const episodes = new QueryService();

    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState()

    function changePage(page) {
        episodes.getEpisodesPage(page)
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log(body);
            })
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
                        return <ItemsEpisode
                            name={el.name}
                            releaseDate={el.air_date}
                            series={el.episode} />
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