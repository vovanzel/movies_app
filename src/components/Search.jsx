import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.updateMovies(this.state.search, this.state.type);
        }
    }

    handleChange = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.updateMovies(this.state.search, this.state.type)
        });

    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    type="search"
                    placeholder='search'
                    className="validate"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyPress={this.handleKeyPress}
                />
                <button className='btn search-btn' onClick={() => this.props.updateMovies(this.state.search, this.state.type)}>SEARCH
                </button>
            </div>
            <div className="radio-fields">
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="all"
                        onChange={this.handleChange}
                        checked={this.state.type === "all"}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="movie"
                        onChange={this.handleChange}
                        checked={this.state.type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        data-type="series"
                        onChange={this.handleChange}
                        checked={this.state.type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </div>
    }
}

export {Search}