import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import TextField from '../UserManagement/TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { Modal, Button } from "react-bootstrap"

const validate = Yup.object({
    title: Yup.string().required("Title must be entered"),
    author: Yup.string().required("Author Name must be entered"),
    publisher: Yup.string().required("Publisher must be entered"),
    pubDate: Yup.date().required("Publication Date must be entered"),
    genre: Yup.string().required("Genre must be entered"),
    isbn: Yup.number().required("ISBN Number must be entered"),
    desc: Yup.string().required("Description must be entered"),

})

const AddBooks = () => {
    const [show, setshow] = useState(false)

    const addNewBook = async (title, author, publisher, pubDate, genre, isbn, description) => {
        const data = {
            title: title,
            author: author,
            publisher: publisher,
            publicationDate: pubDate,
            genre: genre,
            isbn: isbn,
            description: description

        }
        await axios.post('http://localhost:8080/api/book/create', data)
            .then((res) => {
                setshow(true)

            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    const handleClose = () => {
        setshow(false)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="addbooksHeading col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3>Enter Information to add books</h3>
                    <hr className="mainHr" />
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <Formik
                        initialValues={{
                            title: "",
                            author: "",
                            publisher: "",
                            pubDate: "",
                            genre: "",
                            isbn: '',
                            desc: '',
                        }}
                        validationSchema={validate}
                        onSubmit={(values, action) => {
                            console.log(values)

                            addNewBook(values.title, values.author, values.publisher, values.pubDate, values.genre, values.isbn, values.desc)
                            // createNewUser(values.email, values.name, values.password, values.confirmPassword, values.accountType)
                            action.resetForm()
                        }}
                    >
                        {formik => (
                            <>
                                <Form>
                                    <TextField type="text"

                                        placeholder="Title"
                                        name="title" />
                                    <TextField type="text"

                                        placeholder="Author"
                                        name="author" />
                                    <TextField type="text"

                                        placeholder=" Publisher"
                                        name="publisher" />
                                    <TextField type="date"

                                        placeholder="Publication Date"
                                        name="pubDate"
                                    />
                                    <TextField type="text"

                                        placeholder="Genre"
                                        name="genre" />
                                    <TextField type="text"

                                        placeholder=" ISBN"
                                        name="isbn" />
                                    <TextField type="text"

                                        placeholder="Description"
                                        name="desc" />




                                    <button className="btn btn-info btn-block mt-4">Submit</button>
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="modalHeaderText">BOOKEROO</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBodyText">Book added Successfully!</Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddBooks
