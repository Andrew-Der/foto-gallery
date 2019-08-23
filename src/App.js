import React from 'react';
import image from './assets/images/kitten.png';
import BakerIcon from './assets/svg/baker.svg';
import Flower from './assets/svg/large.svg';

const App = title => {
	return (

	<div>
		{title}
		<img src={image} alt="kitty" />
		<img src={BakerIcon} />
		<img src={Flower} />
	</div>)
}

export default App;
