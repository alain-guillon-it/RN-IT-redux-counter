import { store } from "./app/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
