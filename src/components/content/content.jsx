import { Route } from "react-router-dom";
import Characters from "./characters/characters";
import Episodes from "./episodes/Episodes";
import Locations from "./locations/Locations";
import MyWatchList from "./my_watch_list/My_watch_list";
import "./content.scss"

function Content() {
    return (
        <div className="content">
            <Route path='/characters'
                render={() => <Characters />} />
            <Route path='/episodes'
                render={() => <Episodes />} />
            <Route path='/locations'
                render={() => <Locations />} />
            <Route path='/my_watch_list'
                render={() => <MyWatchList />} />
        </div>
    )
}

export default Content;