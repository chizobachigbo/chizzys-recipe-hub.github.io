import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Settings() {

  function verifySetting() {
    const defaultSetting = {
      "--background-color": "rgb(255, 255, 255)",
      "--background-light": "rgb(255, 255, 255)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--primary-color": "rgb(255, 0, 86)",
      "--text-color": "rgb(10, 10, 10)",
      "--text-light": "rgb(87, 87, 87)",
      "--font-size": "16px",
      "--animation-speed": 1,
    };
    const previousSetting = JSON.parse(localStorage.getItem("settings"));
    if (previousSetting === null) {
      return defaultSetting;
    } else {
      return previousSetting;
    }
  }

  function verifyState(setting, storage) {
    const defaultState = setting;
    const previousState = JSON.parse(localStorage.getItem(storage));
    if (previousState === null) {
      return defaultState;
    } else {
      return previousState;
    }
  } 

  const [settings, setSettings] = useState(verifySetting);
  const [theme, setTheme] = useState(verifyState("light", "theme"));
  const [primaryColor, setPrimaryColor] = useState(verifyState(0, "primaryColor"));
  const [fontSize, setFontSize] = useState(verifyState(1, "fontSize"));
  const [animationSpeed, setAnimationSpeed] = useState(verifyState(1, "animationSpeed"));

  const themes = [
    {
      "--background-color": "rgb(255, 255, 255)",
      "--background-light": "rgb(255, 255, 255)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#0a0a0a",
      "--text-light": "#575757",
    },

    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },

    {
      title: "Medium",
      value: "16px",
    },

    {
      title: "Large",
      value: "20px",
    },
  ];

  const animationSpeeds = [
    {
      title: "slow",
      value: 2,
    },

    {
      title: "Medium",
      value: 1,
    },

    {
      title: "Fast",
      value: 0.5,
    },
  ];

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("primaryColor", JSON.stringify(primaryColor));
    localStorage.setItem("fontSize", JSON.stringify(fontSize));
    localStorage.setItem("animationSpeed", JSON.stringify(animationSpeed));
  }, [theme, primaryColor, fontSize, animationSpeed]);

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    // update setting
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  }

  function changeAnimationSpeed(i) {
    const _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  }

  return (
    <div>
      <div className="section d-block">
        <h2>Theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block">
        <h2>Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Font size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button className="btn" onClick={() => changeFontSize(index)}>
              {size.title}
              {fontSize === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Animation speed</h2>
        <div className="options-container">
          {animationSpeeds.map((speed, index) => (
            <button className="btn" onClick={() => changeAnimationSpeed(index)}>
              {speed.title}
              {animationSpeed === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
