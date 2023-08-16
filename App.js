import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import { useRoute } from "./router";
import { persistor, store } from "./redux/store";
import { Text } from "react-native";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => setUser(user));

  const routing = useRoute(user);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadApplication} onFinish={() => setIsReady(true)} onError={console.warn} />
  //   );
  // }
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>{routing}</NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
