import jwt from "jsonwebtoken";
export const checkAdminToken = (request, response, next) => {
  const token = request.headers["token"] || request.body.token;
  if (!token) {
    return response.status(401).json({ message: "errror" });
  } else {
    try {
      const decoded = jwt.verify(token, "SomeSecretKey");
      //   request.user = decoded;
      //   console.log("hi", decoded.id);
      if (decoded.id == "damdinnymg@gmail.com") {
        request.admin = decoded;
      } else {
        return response.status(401).json({ message: "don`t admin" });
      }
    } catch (err) {
      return response.status(401).json({ message: "not token" });
    }
  }
  next();
};
