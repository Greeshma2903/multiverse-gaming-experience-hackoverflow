import React, { useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import AvatarForm from "./AvatarForm";

const Profile = () => {
  const [avConfig, setAvConfig] = useState({
    config: genConfig({
      isGradient: Boolean(Math.round(Math.random())),
    }),
    shape: "circle",
  });

  // update the avatar acc to user choice
  function updateConfig(userConfig) {
    setAvConfig((prev) => {
      return { ...prev, config: userConfig };
    });
  }

  // update choice according to userchoice
  function updateShape(shape) {
    setAvConfig((prev) => {
      return { ...prev, shape };
    });
  }
  console.log(avConfig.config);

  return (
    <div className="bg-darkBlue min-h-screen h-full flex flex-col justify-evenly items-center py-4">
      <h1 className="font-head text-peach text-2xl">Customize your profile</h1>
      <Avatar
        style={{ width: "8rem", height: "8rem" }}
        {...avConfig.config}
        shape={avConfig.shape}
        className="my-2"
      />
      <AvatarForm
        config={avConfig.config}
        shape={avConfig.shape}
        updateConfig={updateConfig}
        updateShape={updateShape}
      />
    </div>
  );
};

export default Profile;
9;
