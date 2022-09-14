import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

export const Example = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const typeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const typePassword = (e) => {
    setPassword(e.target.value);
  };

  const fetchlogin = (e) => {
    console.log("test");
    e.preventDefault();
    const Backend_URL = process.env.BACKEND_URL;

    fetch(Backend_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .catch(() => {
        console.log("error");
      })
      .then((data) => data.json())
      .then((datausers) => {
        console.log(datausers);

        if (datausers?.token) {
          sessionStorage.setItem("token", datausers.token);
          sessionStorage.setItem("email", datausers.email);
          sessionStorage.setItem("users_id", datausers.user_id);

          handleClose();
          return navigate("/userview");
        }

        alert(
          "There's something wrong with either your password or your email. Please, check again"
        );
      });
  };

  //function to fetch the sign up( is loggind in )
  const fetchSignup = (e) => {
    console.log("test");
    e.preventDefault();
    const Backend_URL = process.env.BACKEND_URL;

    fetch(Backend_URL + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .catch(() => {
        console.log("error");
      })
      .then((data) => data.json())
      .then((datausers) => {
        console.log(datausers);

        if (datausers?.token) {
          sessionStorage.setItem("token", datausers.token);
          sessionStorage.setItem("email", datausers.email);
          sessionStorage.setItem("users_id", datausers.user_id);

          handleClose();
          return navigate("/userview");
        }

        alert(
          "There's something wrong with either your password or your email. Please, check again"
        );
      });
  };

  return (
    <>
      <Button
        variant="btn btn-outline-secondary rounded-pill corbtn"
        onClick={handleShow}
      >
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login or SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              onChange={typeEmail}
              value={email}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              onChange={typePassword}
              value={password}
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Stack direction="horizontal" gap={2}>
              <Button onClick={fetchSignup} className="rounded-pill">
                SignUp
              </Button>
              <Button
                onClick={fetchlogin}
                type="submit"
                className="ms-auto rounded-pill"
              >
                Login
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
