import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/item";

const getItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await getCar(id);
    const data = response ? response : `Item with id ${id} not found`;
    return res.send(data);
  } catch (e) {
    handleHttp(res, `ERROR_GET_ITEM`, e);
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    const data = response ? response : `Empty collection`;
    return res.send(response);
  } catch (e) {
    handleHttp(res, `ERROR_GET_ITEMS`, e);
  }
}

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await updateCar(id, body);
    return res.send(response);
  } catch (e) {
    handleHttp(res, `ERROR_UPDATE_ITEM`, e);
  }
}

const postItem = async ({body}: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    return res.send(responseItem);
  } catch (e: any) {
    handleHttp(res, `ERROR_POST_ITEM`, e.message);
  }
}

const deleteItem = async ({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const response = await deleteCar(id);
    return res.send(response); 
  } catch (e) {
    handleHttp(res, `ERROR_DELETE_ITEM`, e);
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem };