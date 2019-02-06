import React from 'react';
import 'tachyons';

const Card = (image) =>{
    return(
        <div className={'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'}>

            <img height={'200px'} src={image.url} alt={'img'}/>
            {console.log(image)}
            <div >
                <h2 style={{fontSize:'12px'}}>{image.title.length>32?image.title.substring(0, 32)+'...'
                    :image.title}</h2>
            </div>
        </div>
    );
}

export default Card