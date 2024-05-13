import { ChangeEvent, useState } from "react";
import { Button, Text, Header } from "../../ui";

export const GeneratorOfComponents = () => {
  const [selectedComponent, setSelectedComponent] = useState("");
  const [textProps, setTextProps] = useState("");

  const handleComponentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  const handleTextPropsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextProps(event.target.value);
  };

  return (
    <div>
      <select value={selectedComponent} onChange={handleComponentChange}>
        <option value="">Select component</option>
        <option value="Button">Button</option>
        <option value="Text">Text</option>
        <option value="Header">Header</option>
      </select>

      {selectedComponent === "Button" && (
        <>
          <Button label="Enter" />
          <pre>{Button.toString()}</pre>
        </>
      )}
      {selectedComponent === "Header" && <pre>{Header.toString()}</pre>}
      {selectedComponent === "Text" && (
        <>
          <input
            type="text"
            value={textProps}
            onChange={handleTextPropsChange}
          />
          <Text children={textProps} />
          <pre>{Text.toString()}</pre>
        </>
      )}
    </div>
  );
};
