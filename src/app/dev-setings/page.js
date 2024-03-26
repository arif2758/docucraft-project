"use client";
import React, { useState } from "react";

const DevSettingsPage = () => {
  const [settings, setSettings] = useState([
    {
      id: 1,
      name: "email",
      label: "Email",
      type: "text",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      required: true,
    },
    {
      id: 3,
      name: "age",
      label: "Age",
      type: "number",
      required: true,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // **API তে সেটিংস ডেটা সংরক্ষণ করা**
    const saveSettings = async () => {
      const response = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        // ... success handling
      } else {
        // ... error handling
      }
    };

    saveSettings();
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Developer Settings</h2>

      <form onSubmit={handleSubmit}>
        {settings.map((setting) => (
          <div key={setting.id}>
            <label
              className="block mb-2 font-medium text-gray-700"
              for={setting.name}
            >
              {setting.label}
            </label>

            {setting.type === "text" && (
              <input
                id={setting.name}
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}

            {setting.type === "password" && (
              <input
                id={setting.name}
                type="password"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}

            {setting.type === "number" && (
              <input
                id={setting.name}
                type="number"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default DevSettingsPage;
