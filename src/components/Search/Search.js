import { useState, memo } from "react"
import { Form, Button, FormGroup } from "react-bootstrap"

const Search = ({ findCharacters }) => {

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        findCharacters(search)
    }


    return (
        <>
            <Form onSubmit={handleSearch}>
                <FormGroup>
                    <Form.Control className="mb-4 text-center bg-dark text-light border-0" type="text" placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)} />
                </FormGroup>
                <div className="d-grid gap-2">
                    <Button onSubmit={handleSearch} size="lg" type="submit" className="mb-3">Search</Button>
                </div>
            </Form>
        </>
    )
}

export default memo(Search)
