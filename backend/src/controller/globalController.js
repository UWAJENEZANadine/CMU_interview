//save data in database
import Response from "../utils/response";
import status from "http-status";

export const create = (Model) => async (req, res, next) => {
  try {
    const data = await Model.create(req.body);
    if (!data) {
      //   return res.status(404).json({ message: "failed to create!" });
      return Response.errorMessage(
        res,
        "failed to register",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(res, "Successully created", data, status.CREATED);
  } catch (error) {
    console.error(error);
  }
};

//get all data
export const getAll = (Model) => async (req, res, next) => {
  try {
    const data = await Model.find();
    if (!data) {
      //   return res.status(404).json({ message: "failed to create!" });
      return Response.errorMessage(
        res,
        "failed to get all user",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(res, "Successully get all user", data, status.OK);
  } catch (error) {
    console.error(error);
  }
};

//get one
export const getOneByID = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findById(req.params.id);
    if (!data) {
      //   return res.status(404).json({ message: "failed to create!" });
      return Response.errorMessage(
        res,
        "failed to get user",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(res, "Successully get one user", data, status.OK);
  } catch (error) {
    console.error(error);
  }
};

//update one by id
export const updateOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      //   return res.status(404).json({ message: "failed to create!" });
      return Response.errorMessage(
        res,
        "failed to update user",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(res, "Successully updated", data, status.OK);
  } catch (error) {
    console.error(error);
  }
};

//delete one by id
export const deleteOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    if (!data) {
      //   return res.status(404).json({ message: "failed to create!" });
      return Response.errorMessage(
        res,
        "failed to delete user",
        status.BAD_REQUEST
      );
    }
    return Response.successMessage(res, "Successlly user deleted", data, status.OK);
  } catch (error) {
    console.error(error);
  }
};
