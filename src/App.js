import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import './App.css';
import {setSearchField, requestImages} from "./actions";

const mapStateToProps =state=>{
    return{
        searchField:state.searchImages.searchField,
        images:state.requestImages.images,
        isPending:state.requestImages.isPending,
        error:state.requestImages.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    console.log('mapDispatchToProps')

    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestImages: () => dispatch(requestImages())

        // onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        // onRequestImages:() => requestImages(dispatch)
    }
}

class App extends Component{

    constructor(){
        super()
        this.state={
            images:[],
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.props.onRequestImages();
    }

    render(){


        const {images,isPending}=this.props;
        const filteredImages = images.filter(image=>{

            return image.title.toLowerCase().includes(this.props.searchField.toLowerCase())

        })

        return isPending?
            <h1>Loading...</h1>:
            (
            <div className={'tc'}>

                <h1 className={'f1'}>Image Gallery</h1>
                <SearchBox
                    // searchField={this.state.searchField}
                    searchChange={this.props.onSearchChange}
                />
                <CardsList images={filteredImages}/>

            </div>
        )
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(App);