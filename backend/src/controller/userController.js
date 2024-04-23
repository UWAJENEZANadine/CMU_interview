import userModel from "../models/user";
import {
  create,
  getAll,
  getOneByID,
  updateOneById,
  deleteOneById,
} from "./globalController";

export const createController = create(userModel);
export const getAllController = getAll(userModel);
export const getOneController = getOneByID(userModel);
export const updateOneController = updateOneById(userModel);
export const deleteOneController = deleteOneById(userModel);
