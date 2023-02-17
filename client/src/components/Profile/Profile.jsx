import React, { useState, useEffect } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import decode from "jwt-decode";
import AvatarForm from "./AvatarForm";
import * as api from "../../api/index.js";

const Profile = () => {
  
  const [avConfig, setAvConfig] = useState({
    config: genConfig({
      isGradient: Boolean(Math.round(Math.random())),
    }),
    shape: "circle",
  });

  // TODO: make a avatar data retrieval api/backend call... local store is temporary soln due to lack of time
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(
    () => {            
      const token = user?.response.token;
      // using token we have the avatar data
      if (token) {
          const decodedToken = decode(token);              
          if (decodedToken.exp * 1000 < new Date().getTime()) {
          logout();
        }
    }
    console.log(user)
  //   if(user)
  //   {
  //   setAvConfig((prev) => {
  //     return { ...prev, config: user.response.result.avatar };
  //   });
  //   }
    
  // setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);    

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };  

  // update the avatar acc to user choice
  function updateConfig(userConfig) {
    setAvConfig((prev) => {
      return { ...prev, config: userConfig };
    });
    // store avconfig to backend
    console.log(userConfig)
    // api.updateAvatar(user.response.result._id, userConfig);
  }

  // update choice according to userchoice
  function updateShape(shape) {
    setAvConfig((prev) => {
      return { ...prev, shape };
    });
  }
  console.log(avConfig.config);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-indigo-900 min-h-screen h-full flex flex-col justify-evenly items-center py-4">
      <h1 className="font-head text-peach text-5xl">Customize your profile</h1>
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
