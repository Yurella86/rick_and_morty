import { useEffect, useState } from "react";
import './characters.scss'
import ReactPaginate from 'react-paginate';
import QueryService from './../../../services/getApi'
import ItemCharacters from "./itemCharacters/itemCharacters";
import { NavLink } from "react-router-dom";


function Characters() {

    const characters = new QueryService();

    const [items, setItems] = useState([])
    const [filtered, setFiltered] = useState([])
    const [pageCount, setPageCount] = useState()


    function handleFilterSpecies(e) {
        if (!filtered.length) {
            setFiltered(items.filter(el => el.species === e.target.value))
        } else {
            setFiltered(filtered.filter(el => el.species === e.target.value))
        }
    }

    function handleFilterStatus(e) {
        if (!filtered.length) {
            setFiltered(items.filter(el => el.status === e.target.value))
        } else {
            setFiltered(filtered.filter(el => el.status === e.target.value))
        }
    }

    function handleFilterGender(e) {
        if (!filtered.length) {
            setFiltered(items.filter(el => el.gender === e.target.value))
        } else {
            setFiltered(filtered.filter(el => el.gender === e.target.value))
        }
    }

    function changePage(page) {
        characters.getCharactersPage(page)
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log(body);
            })
    }

    useEffect(() => {
        characters.getCharacters()
            .then((body) => {
                setItems(body.results)
                setPageCount(body.info.pages)
                console.log(body);
            })
    }, [])

    return (
        <div className="wrapper-characters">
            <div className="header-item">
                <ul>
                    <li>
                        <select name="species" id="species" placeholder="species" onChange={handleFilterSpecies}>
                            <option value="" disabled selected hidden>Species </option>
                            <option value="Human"><NavLink to='/character/?species=Human' >Human</NavLink></option>
                            <option value="Alien">Alien</option>
                            <option value="unknown">unknown</option>

                        </select>
                    </li>
                    <li>
                        <select name="status" id="status" placeholder="status" onChange={handleFilterStatus}>
                            <option value="" disabled selected hidden>Status</option>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="unknown">unknown</option>
                        </select></li>
                    <li>
                        <select name="gender" id="gender" placeholder="gender" onChange={handleFilterGender}>
                            <option value="" disabled selected hidden>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">unknown</option>
                        </select></li>
                </ul>
            </div>
            <div className="items-characters">
                {filtered.length ?
                    filtered.map(el => {
                        return <ItemCharacters
                            key={el.id}
                            male={el.gender}
                            name={el.name}
                            image={el.image} />
                    }) :
                    items.map(el => {
                        return <ItemCharacters
                            key={el.id}
                            male={el.gender}
                            name={el.name}
                            image={el.image} />
                    })}
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
export default Characters;