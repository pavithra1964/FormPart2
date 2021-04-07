import PropTypes from 'prop-types';
import { Component } from 'react';

export default class ValidationComponent extends Component {

  constructor(props) {
      super(props);
      // array to store error on each fields
      // ex:
      // [{ fieldName: "name", messages: ["The field name is required."] }]
      this.errors = [];
      // Retrieve props
      this.labels = props.labels || {};
      this.state = { error: false };
  }

  /*
  * Method validate to verify if each children respect the validator rules
  * Fields example (Array) :
  * fields = {
  *  input1: {
  *    required:true,
  *     numbers:true,
  *     maxLength:5
  *  }
  *}
  */
  validate(fields) {
    // Reset errors
    this._resetErrors();
    // Iterate over inner state
    for (const key of Object.keys(this.state)) {
      // Check if child name is equals to fields array set up in parameters
      const rules = fields[key];
      if (rules) {
        // Check rule for current field
        this._checkRules(key, rules, this.state[key]);
      }
    };
    return this.isFormValid();
  }

  // Method to check rules on a spefific field


  // Add error
  // ex:
  // [{ fieldName: "name", messages: ["The field name is required."] }]

  // Reset error fields

  // Method to check if the field is in error

  // Return an object where the keys are the field names and the value is an array with the rules that failed validation

  // Return the rules that failed validation for the given field
  // Concatenate each error messages
}

// PropTypes for component
ValidationComponent.propTypes = { // rules for validations
  messages: PropTypes.object, // messages for validation errors
  labels: PropTypes.object, // labels for validation messages

}
// DefaultProps for component
ValidationComponent.defaultProps = {
  labels: {}
};