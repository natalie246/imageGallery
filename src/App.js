import React, {Component} from 'react';
import CardsList from './CardsList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component{

    constructor(){
        super()
        this.state={
            images:[],
            searchField:''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response=> {


                // console.log(response);
                return response.json();

            }).then(photos=>{
                // console.log(photos.results)
                this.setState({images:photos})
                // this.setState({images:photos.results})
            })
    }

    onSearchChange = (event) => {

        this.setState({searchField:event.target.value})


    }
    render(){

        const filteredImages = this.state.images.filter(image=>{
            return image.title.toLowerCase().includes(this.state.searchField.toLowerCase())

        })

        return(
            <div className={'tc'}>

                <h1 className={'f1'}>Image Gallery</h1>
                <SearchBox
                    // searchField={this.state.searchField}
                    searchChange={this.onSearchChange}
                />
                <CardsList images={filteredImages}/>

            </div>
        )
    }

}
export default App