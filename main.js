const express = require("express");
const {
  getAlluser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./mainController");
const {
  getAlluser2,
  getUser2,
  createUser2,
  updateUser2,
  deleteUser2,
} = require("./other");
const app = express();

const port = 3000;
app.use(express.json());

const userMiddleware = express.Router();

const userMiddleware2 = express.Router();

userMiddleware.route("/").get(getAlluser).post(createUser);
userMiddleware.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

/*userMiddleware2.route("/").get(getAlluser2).post(createUser2);
userMiddleware2
  .route("/:id")
  .get(getUser2)
  .patch(updateUser2)
  .delete(deleteUser2);
*/
app.use("/api/v1/test", userMiddleware);
//app.use("api/v1/testing", userMiddleware2);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
