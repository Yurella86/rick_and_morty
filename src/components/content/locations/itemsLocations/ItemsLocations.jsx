import './ItemsLocations.scss'

function ItemsLocations({ name, type, dimension }) {
    return (
        <div className="wrapper-location">
            <div className="item-location">
                <div className="name-item">{name}</div>
                <div className="type-item">{type}</div>
                <div className="dimension-item">{dimension}</div>
            </div>
        </div>
    )
}

export default ItemsLocations;