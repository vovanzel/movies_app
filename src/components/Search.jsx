import React,{useState} from "react";

function Search(props) {
    const {
        updateMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            updateMovies(search, type);
        }
    }

    const handleChange = (event) => {
        setType(event.target.dataset.type);
        updateMovies(search, event.target.dataset.type);
    };

    return (
        <div className="row">
            <div className="input-field">
                <input
                    type="search"
                    placeholder='search'
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className='btn search-btn' onClick={() => updateMovies(search, type)}>
                    SEARCH
                </button>
            </div>
            <div className="radio-fields">
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={handleChange}
                        checked={type === "all"}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={handleChange}
                        checked={type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={handleChange}
                        checked={type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    )
}

export {Search}