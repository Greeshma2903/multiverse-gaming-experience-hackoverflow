// I want only real user to be able to do stuff
// ie if token exist

// eg: user wants to like a post
// click like button -> auth middleware(next) -> like controller
// middleware tells if the user have the right to do the task

import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];        

    let decodedData;

    if (token) {
      // get the user data from the token
      decodedData = jwt.verify(token, "test"); // test is the secret we had put in creating token code

      req.userId = decodedData?.id; // store user id
    }

    next(); // do something after check is done (eg: like)
  } catch (error) {
    console.log(error);
  }
};

export default auth;
