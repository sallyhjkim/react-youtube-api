import React,{Fragment} from 'react'
import {
    BrowserRouter,
    Route,
  } from 'react-router-dom';
import MainPage from './MainPage'

class App extends React.Component{

    MainPage = () =>{
        return <Fragment><MainPage/></Fragment>
    }

    render() {
        return (
            <BrowserRouter basename="/sallysearch">
                <div>
                    <Route path='/' exact component={this.MainPage}/>
                </div>
            </BrowserRouter>
        )
    }
}export default App;
