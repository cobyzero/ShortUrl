"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerHome = void 0;
const express_1 = require("express");
const homeController_1 = require("../Controllers/homeController");
exports.routerHome = (0, express_1.Router)();
exports.routerHome.post("/api/urlPost", homeController_1.urlPostController);
exports.routerHome.get("/:key", homeController_1.baseController);
