import { ReactElement, useState } from "react";
import { TextInputField } from "@surya-digital/leo-reactjs-material-ui";

const SecondPage = (): ReactElement => {
  const [textValue, setTextValue] = useState("");
  // const handleTextChange = (value: string): void => {
  //   setTextValue(value);
  // };

  return (
    <TextInputField
      name="TextInputField"
      value={textValue}
      type="text"
      onTextChange={setTextValue}
      label="Enter Text"
    />
  );
};

export default SecondPage;
