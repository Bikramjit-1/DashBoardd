import React, { useState } from "react";

const Settings = () => {
  const [deviceHealth, setDeviceHealth] = useState({
    cpu: "80%",
    ram: "4GB"
  });
  const [theme, setTheme] = useState({
    color: "black",
    font: "Arial"
  });
  const [timeZone, setTimeZone] = useState("UTC");

  const handleDeviceHealth = (event) => {
    setDeviceHealth({
      ...deviceHealth,
      [event.target.name]: event.target.value
    });
  };

  const handleTheme = (event) => {
    setTheme({
      ...theme,
      [event.target.name]: event.target.value
    });
  };

  const handleTimeZone = (event) => {
    setTimeZone(event.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Device Health</h2>
      <div className="device-health-container">
        <p>CPU: {deviceHealth.cpu}</p>
        <input
          type="text"
          name="cpu"
          value={deviceHealth.cpu}
          onChange={handleDeviceHealth}
        />
        <p>RAM: {deviceHealth.ram}</p>
        <input
          type="text"
          name="ram"
          value={deviceHealth.ram}
          onChange={handleDeviceHealth}
        />
      </div>

      <h2>Theme Settings</h2>
      <div className="theme-settings-container">
        <p>Color: {theme.color}</p>
        <input
          type="text"
          name="color"
          value={theme.color}
          onChange={handleTheme}
        />
        <p>Font: {theme.font}</p>
        <input
          type="text"
          name="font"
          value={theme.font}
          onChange={handleTheme}
        />
      </div>

      <h2>Time Zone Settings</h2>
      <div className="time-zone-settings-container">
        <p>Time Zone: {timeZone}</p>
        <select value={timeZone} onChange={handleTimeZone}>
          <option value="UTC">UTC</option>
          <option value="EST">EST</option>
          <option value="CST">CST</option>
          <option value="MST">MST</option>
          <option value="PST">PST</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
