import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
    
  } catch (e: any) {
    handleHttp(res, `ERROR_GET_BLOG`, e.errors._message);
  }
}

const getItems = (req: Request, res: Response) => {
  try {

  } catch (e: any) {
    handleHttp(res, `ERROR_GET_BLOGS`, e.errors._message);
  }
}

const updateItem = (req: Request, res: Response) => {
  try {

  } catch (e: any) {
    handleHttp(res, `ERROR_UPDATE_BLOG`, e.errors._message);
  }
}

const postItem = ({body}: Request, res: Response) => {
  try {
    res.json(body);
  } catch (e: any) {
    handleHttp(res, `ERROR_POST_BLOG`, e.errors._message);
  }
}

const deleteItem = (req: Request, res: Response) => {
  try {

  } catch (e: any) {
    handleHttp(res, `ERROR_DELETE_BLOG`, e.errors._message);
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem };