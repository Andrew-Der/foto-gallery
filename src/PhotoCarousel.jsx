import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function PhotoCarousel (props) {

	const { input } = props
	const { index, setIndex } = props
	const [ direction, setDirection ] = useState(null)

	const [ captionHidden, setCaptionHidden ] = useState(true)
  
	 const handleSelect = (selectedIndex, e) => {
	   setIndex(selectedIndex);
	   setDirection(e.direction);
	 };

	return (

		//map to a function call
		//active index
		//the hidden is equal to the state
		// and on click, it toggles the state
		<Carousel style={{
			"width" : "80%",
			"minWidth" : "700px",
			"margin" :"auto"}}
		touch={true}
		activeIndex={index} direction={direction} onSelect={handleSelect}>
		{
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

	)

}