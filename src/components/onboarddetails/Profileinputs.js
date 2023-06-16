import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
function Profileinputs({ onboardsuer, handleChange, SubmitUser, subscribes, error }) {




    return (
        <div className='col-lg-10 mx-auto mt-3 mb-3'>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" disabled onChange={handleChange} value={onboardsuer?.username} name={"username"} />
                        <Form.Text className="text-muted">
                            {error && onboardsuer?.username?.length <= 0 ? "User Name is Required" : null}
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" disabled onChange={handleChange} value={onboardsuer?.email} name={"email"} />
                        <Form.Text className="text-muted">
                            {error && onboardsuer?.username?.length <= 0 ? "User Name is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="number" placeholder="Enter contactno" onChange={handleChange} value={onboardsuer?.contactno} name={"contactno"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.contactno?.length <= 0 ? "contactno is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>AltternateContactno</Form.Label>
                        <Form.Control type="number" placeholder="Enter altternateContactno" onChange={handleChange} value={onboardsuer?.altternateContactno} name={"altternateContactno"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.altternateContactno?.length <= 0 ? "altternateContactno is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>houseno</Form.Label>
                        <Form.Control type="number" placeholder="Enter houseno" onChange={handleChange} value={onboardsuer?.houseno} name={"houseno"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.houseno?.length <= 0 ? "houseno is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>streetaddress</Form.Label>
                        <Form.Control type="text" placeholder="Enter streetaddress" onChange={handleChange} value={onboardsuer?.streetaddress} name={"streetaddress"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.streetaddress?.length <= 0 ? "streetaddress is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>pincode</Form.Label>
                        <Form.Control type="number" placeholder="Enter pincode" onChange={handleChange} value={onboardsuer?.pincode} name={"pincode"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.pincode?.length <= 0 ? "pincode is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>state</Form.Label>
                        <Form.Control type="text" placeholder="Enter state" onChange={handleChange} value={onboardsuer?.state} name={"state"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.state?.length <= 0 ? "state is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>country</Form.Label>
                        <Form.Control type="text" placeholder="Enter country" onChange={handleChange} value={onboardsuer?.country} name={"country"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.country?.length <= 0 ? "country is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" placeholder="Enter location" onChange={handleChange} value={onboardsuer?.location} name={"location"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.location?.length <= 0 ? "location is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>bankname</Form.Label>
                        <Form.Control type="text" placeholder="Enter bankname" onChange={handleChange} value={onboardsuer?.bankname} name={"bankname"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.bankname?.length <= 0 ? "bankname is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>accountno</Form.Label>
                        <Form.Control type="number" placeholder="Enter accountno" onChange={handleChange} value={onboardsuer?.accountno} name={"accountno"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.accountno?.length <= 0 ? "accountno is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>


            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ifccode</Form.Label>
                        <Form.Control type="number" placeholder="Enter ifccode" onChange={handleChange} value={onboardsuer?.ifccode} name={"ifccode"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.ifccode?.length <= 0 ? "ifccode is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>branchname</Form.Label>
                        <Form.Control type="text" placeholder="Enter branchname" onChange={handleChange} value={onboardsuer?.branchname} name={"branchname"} />
                        <Form.Text className="text-danger">
                            {error && onboardsuer?.branchname?.length <= 0 ? "branchname is Required" : null}

                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <div className='mt-5 row gap-5 mb-5'>
                {subscribes?.map((item, index) => {
                    return (
                        <div className='card col-lg-2'>
                            {item?.planName}
                            <div>
                                {item?.price}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='mb-5 mt-2'>
                <Button variant='danger' onClick={SubmitUser}>
                    Create Onboard
                </Button>
            </div>
        </div>
    )
}

export default Profileinputs