import "./App.css";
import "akvo-react-form/dist/index.css"; /* REQUIRED */
import { Webform } from "akvo-react-form";
import * as forms from "./example.json";

const App = () => {
  const onChange = ({ current, values, progress }) => {
    console.log(progress);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="full-width">
      <Webform forms={forms.default} onChange={onChange} onFinish={onFinish} />
    </div>
  );
};

export default App;
