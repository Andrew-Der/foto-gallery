import React from 'react';
import PhotoCarouselGallery from './PhotoCarouselGallery';

//are these urls?
import kitten from './assets/images/kitten.png'
import baker from './assets/svg/baker.svg'
import large from './assets/svg/large.svg'


const inputArray = [
    {
        url: 'https://farm8.staticflickr.com/7364/8728177885_86642c8724_b.jpg',
        caption: 'This is a kitten'
    },
    {
        url: "https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size2/CUR.2004.28.120_top_Heon-Kang_photo_NRICH.jpg",
        caption: 'Second kitten'
    },
    {
        url: "https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size2/CUR.2004.28.126_detail1_Heon-Kang_photo_NRICH.jpg",
        caption: 'More really?'
    },
    {
        url: kitten,
        caption: 'Yes, I think last kitten'
    }
]

const App = () => {
	return (
	<div>
		<PhotoCarouselGallery photos={inputArray} />
	</div>
	)
}

export default App;
