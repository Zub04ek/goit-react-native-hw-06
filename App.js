import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";
import { persistor, store } from "./redux/store";
import { Text } from "react-native";

export default function App() {
  const routing = useRoute(null);
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={persistor}
      >
        <NavigationContainer>{routing}</NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
