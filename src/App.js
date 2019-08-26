import React from 'react';
import PhotoCarouselGallery from './PhotoCarouselGallery';

const inputArray = [
    {
        url: 'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__480.jpg',
        caption: 'really wide image - pretty landscape'
    },
    {
        url: "https://farm8.staticflickr.com/7364/8728177885_86642c8724_b.jpg",
        caption: 'really tall image - nice dog'
    },
    {
        url: "https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size2/CUR.2004.28.126_detail1_Heon-Kang_photo_NRICH.jpg",
        caption: '3:4 aspect ratio - cool egg pic'
    },
]

const App = () => {
	return (
	<div>
		<PhotoCarouselGallery photos={inputArray} />
	</div>
	)
}

export default App;
