import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'



const Add = ({ handleAdd }) => {
    const [newMovie, setNewMovie] = useState({
        id:1,
        Title: "",
        PosterUrl: "",
        Rating: 1,
        Description:"",         
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
            }
    return (
    <div>

<div>
        <Button className='add_btn' variant="primary" onClick={handleShow}>
            + Add a New Movie 
        </Button>

        <Modal className='adding' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>

        <Modal.Body>
            <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Movie Title"  onChange={handleChange} name="Title" value={newMovie.Title} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>description</Form.Label>
            <Form.Control placeholder="Movie description" onChange={handleChange} name="Description" value={newMovie.Description} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control placeholder="Movie Rating" onChange={handleChange} name="Rating" value={newMovie.Rating}  />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>PosterURL</Form.Label>
            <Form.Control placeholder="Poster URL" onChange={handleChange} name="PosteUrl" value={newMovie.PosterUrl} />
            </Form.Group>

        </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );


    </div>
    )
    }

export default Add