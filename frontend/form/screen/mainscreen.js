import React, { Component } from 'react';  
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert } from 'react-native';
import axios from 'axios';
  
export default class FlatListBasics extends Component {  
    state = {
                 androids: []
             }
            
             componentDidMount() {
                 axios.get('http://127.0.0.1:8000/api/')
                     .then(res => {
                         this.setState({
                             androids: res.data
                         });
                         console.warn(res.data);
                     })
             }
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    //handling onPress action
    render() {  
        return (  
            <View style={styles.container}>  
                <FlatList  
                   /* data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]} */
                    data={this.state.androids} 
                    renderItem={({item}) =>  
                        <View><Text>Emp_Code:{item.Emp_Code}</Text>
                        <Text>Emp_Name      :{item.Emp_Name}</Text>
                        <Text>D_o_Join      :{item.D_o_Join}</Text>
                        <Text>Salary        :{item.Salary}</Text></View>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
})  
  




// import axios from 'axios';
// import React, { Component } from 'react';  
// import { AppRegistry, FlatList,  
//     StyleSheet, Text, View,Alert } from 'react-native';  
  
// export default class MainScreen extends Component {  

//     state = {
//         androids: []
//     }
    
//     componentDidMount() {
//         axios.get('http://127.0.0.1:8000/api/')
//             .then(res => {
//                 this.setState({
//                     androids: res.data
//                 });
//             })
//     }
//     renderSeparator = () => {  
//         return (  
//             <View  
//                 style={{  
//                     height: 1,  
//                     width: "100%",  
//                     backgroundColor: "#000",  
//                 }}  
//             />  
//         );  
//     };  
  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <FlatList data={this.state.androids} ></FlatList>  
//             </View>  
//         );  
//     }  
// }  
  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//     },  
//     item: {  
//         padding: 10,  
//         fontSize: 18,  
//         height: 44,  
//     },  
// })  