import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class NewUserForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName
    })
    this.setState({
        firstName: "",
        lastName: ""
    })
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input required
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input required
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
            <Button block outline type="submit" color="primary">Create</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
