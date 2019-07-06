import React from 'react'
import './utils.css';

class SearchBar extends React.Component{
    state = {
        searchItem: ''
    }

    onInputChange = (e) =>{
        this.setState({
            searchItem: e.target.value
        })
    }

    onSelectItemSubmit = (e) =>{
        e.preventDefault()
        this.props.onSelectItemSubmit(this.state.searchItem)
    }

    render(){
        return(
            <div className="search-custom">
                <form onSubmit={this.onSelectItemSubmit} className="ui form">
                    <div className="field">
                        <input placeholder="Hit me to search!" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
           
        )
    }
}

export default SearchBar;