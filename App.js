import MainStack from './Screens';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redusers/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
