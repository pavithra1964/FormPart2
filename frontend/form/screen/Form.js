import React, { Fragment }  from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import FormInput from './FormComponents/FormInput'
import FormButton from './FormComponents/FormButton'
import {Formik} from 'formik'
import { withRouter, useHistory, Link } from 'react-router-dom'
import history from './history'

class Form extends React.Component {
  
  constructor() {
   super();
    this.state = {
          Emp_Code: '',
          Emp_Name: '',
          D_o_Join: '',
          Salary: ''
        }
    }

    handleEmp_CodeChange = Emp_Code => {
      this.setState({ Emp_Code })
    }
  
    handleEmp_NameChange = Emp_Name => {
      this.setState({ Emp_Name })
    }

    handleDOJChange = D_o_Join => {
      this.setState({ D_o_Join })
    }

    handleSalaryChange = Salary => {
      this.setState({ Salary })
    }
    onSubmit = async () => {
      const { Emp_Code, Emp_Name, D_o_Join, Salary } = this.state
        console.log(this.state.Emp_Code, this.state.Emp_Name, this.state.Salary, this.state.D_o_Join);
        if (Emp_Code.length > 0 && Emp_Name.length > 0 && D_o_Join.length > 0 && Salary > 0 ) {
          history.push('/Home/');
        }
    }

    render() {
      const { Emp_Code, Emp_Name, D_o_Join, Salary } = this.state
  
      return (
        <SafeAreaView style={styles.container}>
          <Formik
          initialValues={{
          Emp_Code: '',
          Emp_Name: '',
          D_o_Join: '',
          Salary: '' }}
          onSubmit={values => {}}>
          { formikProps => (
            <Fragment>
              <FormInput
                name='Emp_Code'
                value={Emp_Code}
                placeholder='Enter Employee Code'
                onChangeText={this.handleEmp_CodeChange}
              />
              <FormInput
                name='Emp_Name'
                value={Emp_Name}
                placeholder='Enter Employee Name'
                onChangeText={this.handleEmp_NameChange}
              />
              <FormInput
                name='Date'
                value={D_o_Join}
                placeholder='Enter Date of Join'
                onChangeText={this.handleDOJChange}
              />
              <FormInput
                name='Emp_Name'
                value={Salary}
                placeholder='Enter the Salary'
                onChangeText={this.handleSalaryChange }
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  onPress={this.onSubmit}
                  title='Save'
                />
              </View>
              <View>
                <Link to='/Home/'>Home</Link>
              </View>
          </Fragment>
               )
               }
             </Formik>
      </SafeAreaView>
      )
}

}

export default withRouter(Form);  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  }
})

// import React,{ Component, useState } from 'react';
// import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
// import * as Yup from 'yup';
// import { Formik } from 'formik'

// class Form extends Component {
    
//     constructor() {
//         super();
//         this.state = {
//             Emp_Code: '',
//             Emp_Name: '',
//             D_o_Join: '',
//             Salary: ''

//         }
//     }
//     handleFormSave() {
//        // console.warn(this.state);

//        this.validate({
//             Emp_Code: {required: true},
//             Emp_Name: {minlength:3, maxlength:7, required: true},
//             D_o_Join: {date: 'YYYY-MM-DD'},
//             Salary: {numbers: true}
//           });    
//         }

//     handleSubmit = values => {
      
//       if( this.state.Emp_Name.length > 0 ) {
//         this.props.navigation.navigation('FlatListBasics');
//       }
//     }

    
    
//     render() {
//       const validationSchema = Yup.object().shape({
//         email: Yup.string()
//           .label('Email')
//           .email('Enter a valid email')
//           .required('Please enter a registered email'),
//         password: Yup.string()
//           .label('Password')
//           .required()
//           .min(4, 'Password must have at least 4 characters ')
//       })
//         return (
//             <View style={styles.container}>
        
//         <Text>Put The Employee Data</Text>
//         <Text>EmpCode:</Text>
//         <TextInput
//           style={styles.input}
//           name="Emp_Code"
//           onChangeText={(text) => { this.setState({Emp_Code: text}) }} />
//         <Text>EmpName:</Text>
//         <TextInput
//           style={styles.input}
//           name="Emp_Name"
//           onChangeText={(text) => { this.setState({Emp_Name: text}) }} />
//         <Text>DOJ:</Text>
//         <TextInput
//           style={styles.input}
//           name="D_o_Join"
//           onChangeText={(Date) => { this.setState({D_o_Join: Date}) }} />
//         <Text>Salary:</Text>
//         <TextInput
//           style={styles.input}
//           name="Salary"
//           onChangeText={(text) => { this.setState({Salary: text}) }} />
//           <Formik
//             initialValues={{ Emp_Code: '', Emp_Name: '', D_o_Join: '', Salary: '' }}
//             onSubmit={values => {
//               this.handleSubmit(values)
//             }}
//             // new line
//             validationSchema={validationSchema}>

//           </Formik>
//           {/* <Button title="SAVE" onPress={() => {this.handleSubmit()}} /> */}
         
//     </View>
//         )
//     }
// }

// export default Form;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: '#777',
//       padding: 8,
//       margin: 10,
//       width: 200
//     }
//   });
  






// import React, { Component } from 'react';
// import {
//  Text,
//  View,
//  TextInput,
//  TouchableOpacity,
//  Dimensions
// } from 'react-native';
// import { Form, FormItem } from 'react-native-form-validation';
// const width = Dimensions.get('window').width;
// class ComponentWithValue extends Component{
//  constructor(props){
//   super(props);
//  }
//  render(){
//   return (
//   <View style={this.props.style}>
//   <TextInput
//   style={styles.flex}
//   value={this.props.value}
//   onChange={this.props.onChange}/>
//   </View>
//   );
//  }
// }
// class FormTest extends Component {
//  constructor(props){
//   super(props);
//   this.state = {
//    textInput1:'1',
//    textInput2:'2',
//    textInput3:'3',
//    textInput4:'4',
//    view1:'1'
//   };
//  }
// textInput1Change(event){
//  this.setState({
//  textInput1:event.nativeEvent.text
//  });
// }
// textInput2Change(event){
//  this.setState({
//   textInput2:event.nativeEvent.text
//  });
// }
// textInput3Change(event){
//  this.setState({
//   textInput3:event.nativeEvent.text
//  });
// }
// textInput4Change(event){
//  this.setState({
//  textInput4:event.nativeEvent.text
//  });
// }
// submit(){
//  let submitResults = this.refs.form.validate();
// }
// customValidation(){
//  return true;
// }
// render(){
//  return (
//   <View style={styles.container}>
//   <Form
//   ref="form"
//   shouldValidate={true}
//   style={styles.flex}>
//   <FormItem
//    isRequired={true}
//    regExp={/^\d+$/}
//    style={styles.formInput}>
//    <TextInput
//     style={styles.firstInput}
//     value={this.state.textInput1}
//     onChange={this.textInput1Change.bind(this)}/>
//   </FormItem>
//  <FormItem
//   isRequired={false}
//   style={styles.formInput}>
//   <View style={styles.flex}>
//   <View
//    style={styles.secondInputWrapper}>
//    <TextInput
//     style={styles.flex}
//     value={this.state.textInput2}
//     onChange={this.textInput2Change.bind(this)}/>
//   </View>
//   </View>
//  </FormItem>
//  <FormItem
//   isRequired={true}
//   validationFunction={this.customValidation.bind(this)}>
//   <View style={styles.formItem}>
//   <View style={styles.flex}>
//   <View style={styles.flex}>
//   <TextInput
//    style={styles.flex}
//    value={this.state.textInput3}
//    onChange={this.textInput3Change.bind(this)}/>
//   </View>
//   <View />
//   </View>
//   </View>
//  </FormItem>
//  <FormItem isRequired={true}>
//   <ComponentWithValue
//    style={styles.formItem}
//    value={this.state.textInput4}
//    onChange={this.textInput4Change.bind(this)}/>
//  </FormItem>
//  <FormItem
//   isRequired={true}
//   fieldToBeValidated={'test'}>
//   <View
//    style={styles.formItem}
//    test={this.state.view1}>
//    <Text> {this.state.view1}</Text>
//   </View>
//  </FormItem>
// </Form>
// <TouchableOpacity
//  style={styles.submitBtn}
//  onPress={this.submit.bind(this)}>
//  <Text>Submit</Text>
// </TouchableOpacity>
// </View>
// );
// }
// }
// export default FormTest;

// const styles = {
//  container:{
//   alignItems:'center',
//   justifyContent:'center',
//   width,
//   flex:1
//  },
//  flex:{
//  flex:1
// },
// formItem:{
//  width:300,
//  height:50
// },
// formInput:{
//  width:300,
//  height:50
// },
// firstInput:{
//  width:300,
//  height:60
// },
// secondInputWrapper:{
//  width:300,
//  height:50,
// },
// submitBtn:{
//  height:100,
//  width:100
// }
// };
