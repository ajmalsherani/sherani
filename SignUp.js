import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CommonApi from '../Comman/CommanApi';

const SignUp = (props) => {
  const [name, setname] = useState("uuiiuuuu")
  const [email, setemail] = useState("jhuuuuuuuu@gmail.com")
  const [password, setpassword] = useState("12345678")
  const [phone_number, setphone_number] = useState("9078662520")

  const SignApi = () => {

    let body = {
      name: name,
      email: email,
      password: password,
      phone_number: phone_number,
      device_token: '1234567899',
      device_id: 'device_id'

    }

    CommonApi.Api("register", "POST", JSON.stringify(body))
      .then(json => {
        console.log("--------------SignUp----", json);
        let datauser = {
          user_id: json.data.userId
        }

        if (json.status) {
          props.navigation.navigate("OtpScreen", { datauserMove: datauser })
        }

        else {
          console.log("----worng---", json);
        }
      })

  }

  return (

    <ScrollView style={{ flex: 1, }}>

      <View style={{ backgroundColor: 'rgba(255, 0, 0, 1)', padding: 15, }}>
        <TouchableOpacity onPress={() => navigation.goBack("")}>
          <Image source={require('../assets/Image/back_arrow.png')} />
        </TouchableOpacity>

        <Image style={{ alignSelf: 'center', height: 300, width: 340 }} source={require('../assets/Image/deliveryboy1.png')} />
      </View>

      <View style={{ padding: 25 }}>

        <View style={{ backgroundColor: 'white', padding: 15, marginTop: -70 }}>
          <Text style={{ fontSize: 40, fontWeight: '600', color: "black" }}>Sign Up</Text>

          <TextInput style={{ backgroundColor: '#FE8A4729', marginTop: 15, borderRadius: 10, padding: 15, fontSize: 18, }}
            placeholder='name'
            placeholderTextColor='black'
            onChangeText={(test) => setname(test)}
            value={name}

          />

          <TextInput style={{ backgroundColor: '#FE8A4729', marginTop: 15, borderRadius: 10, padding: 15, fontSize: 18, }}
            placeholder='email'
            placeholderTextColor='black'
            onChangeText={(test) => setemail(test)}
            value={email}

          />

          <TextInput style={{ backgroundColor: '#FE8A4729', marginTop: 15, borderRadius: 10, padding: 15, fontSize: 18, }}
            placeholder='password'
            placeholderTextColor='black'
            onChangeText={(test) => setpassword(test)}
            value={password}
          />

          <TextInput style={{ backgroundColor: '#FE8A4729', marginTop: 15, borderRadius: 10, padding: 15, fontSize: 18, }}
            placeholder='phone_number.'
            placeholderTextColor='black'
            onChangeText={(test) => setphone_number(test)}
            value={phone_number}
          />

          <TouchableOpacity onPress={() => { SignApi() }} style={{ backgroundColor: 'rgba(255, 0, 0, 1)', padding: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>SIGN UP</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 17, marginTop: 15, textAlign: 'center' }}>Don't have an account?  <Text style={{ color: 'rgba(255, 0, 0, 1)' }}>Register</Text> </Text>

        </View>

      </View>

    </ScrollView>
  );
};

export default SignUp;

