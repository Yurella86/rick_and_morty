import { useState } from "react";
import Item from "./item/item";
import './Characters.scss'


function Characters() {

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2])

    return (
        <div className="wrapper-characters">
            <div className="header-item">
                <ul>
                    <li>
                        <select name="species" id="species" placeholder="species">
                            <option value="human">Human</option>
                            <option value="alien">Alien</option>
                            <option value="unknown">unknown</option>
                        </select>
                    </li>
                    <li>
                        <select name="status" id="status" placeholder="status">
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">unknown</option>
                        </select></li>
                    <li>
                        <select name="gender" id="gender" placeholder="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">unknown</option>
                        </select></li>
                </ul>
            </div>
            <div className="items-characters">
                {items.map(el => <Item />)}
            </div>
        </div>
    )
}
export default Characters;