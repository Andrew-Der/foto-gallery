import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function PhotoGallery (props) {

	const { input } = props
	const { index, setIndex } = props

	const buildGallery = () => {

		const gallery = []

		//for all the pics
		for (let i = 0; i < input.length; ) {
			const newRow = []
			//max is 6 in a row
			for( let j = 0; j < 6 && i < input.length; j++, i++) {
				newRow.push(
					<Col key={j} sm={6} md={4} lg={2}>
						<img 
							className="w-100 h-100" 
							src={input[i].url} 
							onClick={() => {
								console.log(i)
								setIndex(i)
							}}
						/>
					</Col>)
			}
			gallery.push(<Row key={i} className="no-gutters">{newRow}</Row>)
		}
		return (
			<Container>{gallery}</Container>)
	}


	return (
		<div>
			{buildGallery()}
		</div>
	)

}