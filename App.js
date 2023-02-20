// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import Signup_EnterEmail from "./src/Screens/LoglnSignup/Signup/Signup_EnterEmail";
import Signup_Enterverificationcode from "./src/Screens/LoglnSignup/Signup/Signup_Enterverificationcode";
import Signup_Chooseusername from "./src/Screens/LoglnSignup/Signup/Signup_Chooseusername";
import Signup_ChoosePassword from "./src/Screens/LoglnSignup/Signup/Signup_ChoosePassword";
import Signup_Accountcreated from "./src/Screens/LoglnSignup/Signup/Signup_Accountcreated";
import ForgotPassword_Enteremail from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_Enteremail";
import ForgotPassword_EnterverificationCode from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_EnterverificationCode";
import ForgotPassword_ChoosePassword from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_ChoosePassword";
import ForgotPassword_AccountRecovered from "./src/Screens/LoglnSignup/ForgotPassword/ForgotPassword_AccountRecovered";
import Mainpage from "./src/Screens/MainPage/Mainpage";
import All_chats from './src/Screens/Chatsection/All_chats';
import Searchuserpage from './src/Screens/MainPage/Searchuserpage';
import Notificationpage from './src/Screens/MainPage/Notificationpage';
import My_Userprofile from './src/Screens/Profile/My_Userprofile';
import Settings1 from './src/Screens/Settings/Settings1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{
        headerShown:false,
        animation:'slide_from_right'
      }}>
        <Stack.Screen name="Mainpage" component={Mainpage} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_Enterverificationcode" component={Signup_Enterverificationcode} />
        <Stack.Screen name="Signup_Chooseusername" component={Signup_Chooseusername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_Accountcreated" component={Signup_Accountcreated} />

        <Stack.Screen name="ForgotPassword_Enteremail" component={ForgotPassword_Enteremail} />
        <Stack.Screen name="ForgotPassword_EnterverificationCode" component={ForgotPassword_EnterverificationCode} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecovered" component={ForgotPassword_AccountRecovered} />


        <Stack.Screen name="All_chats" component={All_chats}
        options={{
          animation:'slide_from_left'
        }}
        />

<Stack.Screen name="Searchuserpage" component={Searchuserpage}
        options={{
          animation:'slide_from_bottom'
        }}
        />
        <Stack.Screen name="Notificationpage" component={Notificationpage}
        options={{
          animation:'slide_from_right'
        }}
        />
        <Stack.Screen name="My_Userprofile" component={My_Userprofile}
        options={{
          animation:'slide_from_left'
        }}
        />

        <Stack.Screen name='Settings1' component={Settings1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
