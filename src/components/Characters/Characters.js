import { Row,  } from "react-bootstrap"
import Character from "../Character/Character"

const Characters = ({ characters }) => {
   
    return (
        <>
            <Row className="justify-content-center">
                {
                    characters?.length > 0 && characters.map((character , index) => (
                        <Character key={index} {...character} />
                    ))
                }
            </Row>

        </>
    )
}

export default Characters
