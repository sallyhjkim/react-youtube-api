import React, {Fragment} from 'react'
import {
    Link,
  } from 'react-router-dom';
import SearchBar from './SearchBar'
import VideoDetail from './video/VideoDetail'
import VideoList from './video/VideoList'
import FavoritesPage from './FavoritesPage'
import youtube from '../apis/youtube';
import './utils.css';

class MainPage extends React.Component{
    state = {
        activeMenu : 'main',
        videoList: [],
        selectedVideo: null,
        favoriteList:['ky5aXUIG-2I','hHW1oY26kxQ'],
    }

    componentDidMount(){
        this.onSelectItemSubmit('youtube')
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data!== this.props.data) {
         this.setState({
            selectedVideo: this.props.data.selectedVideo,
            favoriteList: this.props.data.favoriteList
         })
        }
    }

    onMenuClick = e =>{
        this.setState({
            activeMenu: e.target.name
        })
    }

    onThumbnailClick = selectedItem => {
        this.setState({
            selectedVideo: selectedItem
        })
    }

    onHeartClick = () => {

        const {favoriteList,selectedVideo} = this.state
        if(selectedVideo){
            const favoriteListIndex = favoriteList.indexOf(selectedVideo.id.videoId)
            if(selectedVideo&&(favoriteListIndex>=0)){
                //already in list --> need to delete it in favorite list
                favoriteList.splice(favoriteListIndex,1)
                this.setState({
                    favoriteList: favoriteList
                })
            }else if(selectedVideo&&(favoriteListIndex<0)){
                // need to put in favorite list
                this.setState({
                    favoriteList: favoriteList.concat(selectedVideo.id.videoId)
                })
            }
        }
     }

    onSelectItemSubmit = async item=> {
        const response = await youtube.get('./search',{
             params: {
                 q: item
             }
         })
         this.setState({
             videoList: response.data.items,
             selectedVideo: response.data.items[0]
         })
    }

    favoriteToggle = () => {
        const {favoriteList,selectedVideo} = this.state
        let isInFavoriteList = false
        if(selectedVideo&&(favoriteList.indexOf(selectedVideo.id.videoId)>=0)){
            isInFavoriteList = true
        }
        return(
        <div className="heart-custom" onClick={this.onHeartClick}>
            <i className={(isInFavoriteList===true? "red":"grey")+" heart large icon"}/>
            <span>Click me to save in your favorite list</span>
        </div>
        )
    }

    showMenu = () => {
        const {activeMenu} = this.state
        if(activeMenu==='main'){
            return <Fragment>{this.mainPage()}</Fragment>
        }else{
            return <FavoritesPage favoriteList={this.state.favoriteList} />
        }
    }

    mainPage = () => {
        return(
            <Fragment>
                <div className="title-custom"><h1>Sally's Youtube Search</h1></div>
                <SearchBar onSelectItemSubmit={this.onSelectItemSubmit}/>
                <div className="ui grid">
                    <div  className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                            {this.favoriteToggle()}
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videoList} onThumbnailClick={this.onThumbnailClick} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    render(){
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="four wide column">
                    <div className="ui fluid vertical tabular menu" onClick={this.onMenuClick}>
                        <Link to="/" className={"item " + (this.state.activeMenu==='main' ? 'active' : '')} name="main"  >Main</Link>
                        <Link to="/" className={"item " + (this.state.activeMenu==='favorite' ? 'active' : '')} name="favorite">Favorites</Link>
                    </div>
                    </div>
                    <div className="stretched twelve wide column">
                        <div className="ui segment">
                           {this.showMenu()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
   
}export default MainPage;
