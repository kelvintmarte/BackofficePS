import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateParkinglot extends Component {
  constructor(props) {
    super(props);

    this.onChangeParkinglotsName = this.onChangeParkinglotsName.bind(this);
    this.onChangeParkinglotstotal = this.onChangeParkinglotstotal.bind(this);
    this.onChangeParkinglotsdescription =
      this.onChangeParkinglotsdescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      totalParking: "",
      description: "",
    };
  }

  onChangeParkinglotsName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeParkinglotstotal(e) {
    this.setState({ totalParking: e.target.value });
  }

  onChangeParkinglotsdescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const parkinglotObject = {
      name: this.state.name,
      totalparking: this.state.totalParking,
      description: this.state.description,
    };
    axios
      .post("http://localhost:3000/parking", parkinglotObject)
      .then((res) => console.log(res.data));

    this.setState({ name: "", totalParking: "", description: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeParkinglotsName}
            />
          </Form.Group>

          <Form.Group controlId="totalParking">
            <Form.Label>totalParking</Form.Label>
            <Form.Control
              type="email"
              value={this.state.totalParking}
              onChange={this.onChangeParkinglotstotal}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              value={this.state.description}
              onChange={this.onChangeParkinglotsdescription}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Parkinglot
          </Button>
        </Form>
      </div>
    );
  }
}
