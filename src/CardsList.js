import React from 'react';
import Card from './Card';

const CardsList = ({images}) =>{

    return(
        <div>
            {
                images.map((image, index) => {
                    if(index<24){
                        // return <Card key={`card-${index}`} url={image.cover_photo.urls.raw} title={image.title}/>
                        return <Card key={`card-${index}`} url={image.url} title={image.title}/>
                    }else {
                        return;
                    }
                })
            }
        </div>
    )
}

export default CardsList;