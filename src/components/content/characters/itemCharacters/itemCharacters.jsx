import './itemCharacters.scss'

function ItemCharacters({ male, name, image }) {
    console.log(`${name}, ${male}`);
    return (
        <div className="wrapper-item">
            <div className="photo-item">
                <img src={`${image}`} alt="" />
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default ItemCharacters;