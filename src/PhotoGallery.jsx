import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/* PhotoGallery component
input  : [ {url: <string>, caption: <string>}, ... ]
output : displays carousel with swipe and transition features
*/
export default function PhotoGallery (props) {

	const { input } = props
	const { index, setIndex } = props

	/* returns 2D array of images for gallery
	grid is responsive to page,
	adds greying effect to current displayed image
	click on image to make it selected */
	const buildGallery = () => {

		const gallery = []
		/* loop through all photos */
		for (let i = 0; i < input.length; i++) {
			const currIndex = i
			const greyscale = i === index ? "50%" : 1;

			/* array of cols with images */
			gallery.push(
				<Col key={i} xs={6} md={4} lg={2} className="h-100 row-margin-bottom">
					<img 
						style={{
							"filter" : "brightness("+greyscale+")"
						}}
						className="w-100 h-100" 
						src={input[i].url} 
						onClick={() => {
							setIndex(currIndex)
						}}
					/>
				</Col>)
		}
		
		return (
			<Container>
				<Row className="row-max-height">{gallery}
				</Row>
			</Container>)
	}

	return (
		<React.Fragment>
			{buildGallery()}
			{/*Shoutout to flaticon svg for testing*/}
			<div className="fixed-bottom">Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a>
			</div>
		</React.Fragment>
	)

}