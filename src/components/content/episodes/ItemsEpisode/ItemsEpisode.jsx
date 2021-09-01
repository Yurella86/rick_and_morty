import './ItemsEpisode.scss'

function ItemsEpisode({ name, releaseDate, series }) {


    function regExpEpisode(value) {
        const season = value.match(/\w([0-9]+)\w([0-9]+)/)[1]
        const episode = value.match(/\w([0-9]+)\w([0-9]+)/)[2]
        return `Season ${Number(season)}   Episode ${Number(episode)}`
    }

    return (
        <tr>
            <td className="name">{name}</td>
            <td>{releaseDate}</td>
            <td className="episode">{regExpEpisode(series)}</td>
        </tr>
    )
}

export default ItemsEpisode;