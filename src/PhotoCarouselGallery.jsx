import React, {useState} from 'react'

import PhotoCarousel from './PhotoCarousel'
import PhotoGallery from './PhotoGallery'

export default function PhotoCarouselGallery (props) {

	const {input} = props
	const [index, setIndex] = useState(0)
	//const [photos, setPhotos] = useState(input)
	return (
		<div>
		<PhotoCarousel input={input} index={index} setIndex={setIndex} />
		
		<button onClick={() => setIndex(2)}/>
		<PhotoGallery input={input} index={index} setIndex={setIndex} />

		</div>
	)

}