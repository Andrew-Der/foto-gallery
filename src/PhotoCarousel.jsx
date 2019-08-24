import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

/* PhotoCarouselGallery component
input  : [ {url: <string>, caption: <string>}, ... ]
output : displays carousel with swipe and transition features
*/
export default function PhotoCarousel (props) {

	const { input } = props
	const { index, setIndex } = props
	const [ direction, setDirection ] = useState(null)
	/* keep track if captions are displayed */
	const [ captionHidden, setCaptionHidden ] = useState(true)
  	/* for next and previous slides */
	const handleSelect = (selectedIndex, e) => {
	   setIndex(selectedIndex);
	   setDirection(e.direction);
	};

	return (
		<div>
		{ input.length === 0 ?
			/* In case of empty array */
			<h3 className="text-center">Please provide a list of photos and captions to display!</h3>
	 		:
			<Carousel 
				touch={true}
				activeIndex={index} 
				direction={direction} 
				onSelect={handleSelect}
				className="m-auto carousel-width">
			{
				/* create array of items : img & caption
				same height for all images */
				input.map((curr, index, arr) => {
					return (
						<Carousel.Item key={index} onClick={() => setCaptionHidden(!captionHidden)}>
							<img
								height="500px"
								className="d-block w-100"
								src={curr.url}
							/>
							<Carousel.Caption hidden={captionHidden}>
								<h3>{curr.caption}</h3>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})
			}
			</Carousel> 
		}
		</div>
	)
}