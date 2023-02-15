import { Router } from "express";
import { baseController, urlPostController } from "../Controllers/homeController";

export const routerHome = Router();

routerHome.post("/api/urlPost", urlPostController);

routerHome.get("/:key", baseController);