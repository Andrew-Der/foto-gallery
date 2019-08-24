import React, {useState} from 'react'

import PhotoCarousel from './PhotoCarousel'
import PhotoGallery from './PhotoGallery'

/* PhotoCarouselGallery component
input  : [ {url: <string>, caption: <string>}, ... ]
output : displays carousel and beneath a gallery of images
*/
export default function PhotoCarouselGallery (props) {

	const {photos} = props
	const [index, setIndex] = useState(0)

	return (
		<div>
		<PhotoCarousel input={photos} index={index} setIndex={setIndex} />
		<br/>
		<PhotoGallery input={photos} index={index} setIndex={setIndex} />
		</div>
	)
}