import React from 'react';
import PhotoCarouselGallery from './PhotoCarouselGallery';

//are these urls?
import kitten from './assets/images/kitten.png'
import baker from './assets/svg/baker.svg'
import large from './assets/svg/large.svg'

const inputArray = [
    {
        url: kitten,
        caption: 'This is a kitten'
    },
    {
        url: baker,
        caption: 'Second kitten'
    },
    {
        url: large,
        caption: '3rd kitten'
    },
    {
        url: kitten,
        caption: '4th kitten'
    },
    {
        url: kitten,
        caption: '5th kitten'
    },
    {
        url: baker,
        caption: '6th kitten'
    },
    {
        url: large,
        caption: 'More really?'
    },
    {
        url: kitten,
        caption: 'Yes, I think last kitten'
    }
]

const App = () => {
	console.log("HERE")
	return (
	<div>
		<PhotoCarouselGallery input={inputArray} />
	</div>
	)
}

export default App;
