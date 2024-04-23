import { Router } from "express";
import * as UserController from "../controller/userController"
import Validator from "../midddleware/Validator"
import datachecker from "../midddleware/Datachecker";


const route = Router();
route.route("/")
.post(UserController.createController)
.get(UserController.getAllController);

route.route("/:id")
.patch(UserController.updateOneController)
.get(UserController.getOneController)
.delete(UserController.deleteOneController);


export default route