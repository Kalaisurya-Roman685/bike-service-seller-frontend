import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const Checkbox = ({ isChecked, label, checkHandler, index }) => {

    return (
        <div>
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
            />
            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    )
}
function WorkerModel({ Modal, show, handleShow, handleClose, Button }) {


    const allToppings = [
        { name: "Full-time employe", checked: false },
        { name: "Part-time employee", checked: false },
        { name: "Temporary employe", checked: false },
        { name: "All Time Working", checked: false },
    ]

    const [toppings, setToppings] = useState(allToppings)



    const updateCheckStatus = index => {



        setToppings(
            toppings.map((topping, currentIndex) =>
                currentIndex === index
                    ? { ...topping, checked: !topping.checked }
                    : topping
            )


        )
    }



    const [workdetail, setWorkDetail] = useState({
        workName: "",
        contactNo: "",
        email: "",
        gender: "",
        address: "",
        alternateContactno: "",
        bankname: "",
        location: "",
        familyMembers: "",

    })


    const { workName,
        contactNo,
        email,
        gender,
        address,
        alternateContactno,
        bankname,
        location,
        familyMembers } = workdetail;


    // workdetail

    const handleChange = (e) => {
        setWorkDetail({ ...workdetail, [e.target.name]: e.target.value });
    }

    const DataUsers = () => {
console.log(workdetail,"workdetail")
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add Workers Details
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>workName</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" onChange={handleChange} value={workName} name="workName" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" placeholder="email"
                                onChange={handleChange} value={email} name="email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>contactno</Form.Label>
                            <Form.Control type="number" placeholder="contactno"
                                onChange={handleChange} value={contactNo} name="contactNo"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>alternateContactno</Form.Label>
                            <Form.Control type="number" placeholder="alternateContactno"
                                onChange={handleChange} value={alternateContactno} name="alternateContactno"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>gender</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleChange} value={gender} name="gender">
                                <option>---Please Select Gender---</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>address</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={handleChange} value={address} name="address"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>bankname</Form.Label>
                            <Form.Control type="text" placeholder="bankname"
                                onChange={handleChange} value={bankname} name="bankname"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>account no</Form.Label>
                            <Form.Control type="text" placeholder="account no"
                                onChange={handleChange} value={workName} name="workName"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>location</Form.Label>
                            <Form.Control type="text" placeholder="location"
                                onChange={handleChange} value={location} name="location"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>familyMembers</Form.Label>
                            <Form.Control type="text" placeholder="familyMembers"
                                onChange={handleChange} value={familyMembers} name="familyMembers"
                            />
                        </Form.Group>

                        <div>
                            {toppings.map((topping, index) => (
                                <Checkbox
                                    key={topping.name}
                                    isChecked={topping.checked}
                                    checkHandler={() => updateCheckStatus(index)}
                                    label={topping.name}
                                    index={index}
                                />
                            ))}
                        </div>
                        <Button variant="primary" onClick={DataUsers}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WorkerModel