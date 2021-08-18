import { Card , Col } from "react-bootstrap"

const Character = ({name , image , species , status ,gender }) => {
    return (
        <>
           <Col md={3} sm={12}>    
            <Card className="card__style" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{gender}</Card.Subtitle>
                    <Card.Text>
                        {species}
                    </Card.Text>
                    <Card.Text>
                        {status}
                    </Card.Text>

                </Card.Body>
            </Card>
            </Col>
        </>
    )
}

export default Character
