import { useEffect } from "react";
import Select from "react-select";
import "./App.css";

function App() {

  const colourOptions = [
    {
      value: 'purple', label: 'Purple'
    },
    {
      value: 'blue', label: 'Blue'
    },
    {
      value: 'orange', label: 'Orange'
    },
    {
      value: 'yellow', label: 'Yellow'
    },
    {
      value: 'red', label: 'Red'
    }
  ];

  const style = {
    label: {
      fontSize: ".75rem",
      fontWeight: "bold",
      lineHeight: 2,
    },
  };

  const onFocus = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    return msg;
  };
  
  useEffect(() => {
    document.getElementById("aria-example-input").focus();
    return () => {

    }
  }, [])

  return (
    <div className="App">
      <form className="w-50" onSubmit={(e) => e.preventDefault()}>
        <label style={style.label} id="aria-label" htmlFor="aria-example-input">
          Select a color
        </label>

        <Select
          aria-labelledby="aria-label"
          ariaLiveMessages={{
            onFocus,
          }}
          inputId="aria-example-input"
          name="aria-live-color"
          options={colourOptions}
        />
      </form>
    </div>
  );
}

export default App;
