import React, { Component } from "react";
import Contact from "./Contact";
// connect do just that. it connect between react and redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

//converts state to props, in the render we destructure contacts out of the props and not from the state
const mapStateToProps = state => ({
  contacts: state.contactIndex.contacts
});

export default connect(mapStateToProps, { getContacts })(Contacts);
