import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";
// import { useState } from "react";

import { persistor, store } from "./redux/store";
import { Text } from "react-native";
import Main from "./components/main";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadApplication} onFinish={() => setIsReady(true)} onError={console.warn} />
  //   );
  // }
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
