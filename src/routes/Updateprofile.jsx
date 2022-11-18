import React from "react";
import Layout from "../pages/layout/Layout";
import "./updateprofile.css";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
export default function Updateprofile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <div className="container p-0">
        <div className="main-page">
          <div className="first-half">
            <div class="card">
              <div class="card-body">
                <div className="inner-one">
                  <div className="first-icon">
                    <CgProfile size={30} />
                  </div>
                  <div className="data-inserted">
                    <p> Personal details</p>
                  </div>
                </div>
                <hr></hr>
                <div className="inner-one">
                  <div className="first-icon">
                    <AiOutlineBars size={30} />
                  </div>
                  <div className="data-inserted">
                    <p>Manage preferences</p>
                  </div>
                </div>
                <hr></hr>
                <div className="inner-one">
                  <div className="first-icon">
                    <FaLock size={30} />
                  </div>
                  <div className="data-inserted">
                    <p>Security</p>
                  </div>
                </div>
                <hr></hr>
                <div className="inner-one">
                  <div className="first-icon">
                    <MdOutlinePayments size={30} />
                  </div>
                  <div className="data-inserted">
                    <p>Manage Payments</p>
                  </div>
                </div>
                <hr></hr>
                <div className="inner-one">
                  <div className="first-icon">
                    <MdOutlineNotifications size={30} />
                  </div>
                  <div className="data-inserted">
                    <p>Manage notification</p>
                  </div>
                </div>
                <hr></hr>
                <div className="inner-one">
                  <div className="first-icon">
                    <AiOutlineUsergroupAdd size={30} />
                  </div>
                  <div className="data-inserted">
                    <p>Manage travellers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-half">
            <div className="right-data">
            <table className="table">
              <thead className="table-data">
                <h1>Personal details</h1>
                <p>Update your info and find out how its used</p>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>What to call you </td>
                  <td>
                    <Button variant="primary" onClick={handleShow}>
                      Update
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>New Username</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter new username"
                          readonly
                        />
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
                  </td>
                </tr>
                <tr>
                  <td>Display Name</td>
                  <td>Choose a display Name</td>
                  <td>
                    <Button variant="primary" onClick={handleShow}>
                      Update
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Display name</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your display name"
                          readonly
                        />
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
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>change your password</td>
                  <td>
                    <Button variant="primary" onClick={handleShow}>
                      Update
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>New password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Change your password"
                          readonly
                        />
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
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
