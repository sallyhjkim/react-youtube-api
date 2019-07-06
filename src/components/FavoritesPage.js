import React, {Fragment} from 'react'
import VideoClip from './video/VideoClip'
import './utils.css';

class FavoritesPage extends React.Component{
    renderedFavorites = () =>{
        const {favoriteList} = this.props
        return(
            favoriteList.map((id=>{
                return(
                    <div className="column" key={id}>
                        <div className="ui segment">
                            <VideoClip videoId={id}/>
                        </div>
                    </div>
                )
            }))
        )
    }
    render(){
        return(
            <Fragment>
                <div className="title-custom"><h1>My Favorite List</h1></div>
                <div className="ui grid">
                    <div className="three column row">
                        {this.renderedFavorites()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FavoritesPage;