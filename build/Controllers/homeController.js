"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseController = exports.urlPostController = void 0;
const urlModel_1 = require("../Models/urlModel");
const uuid_1 = require("uuid");
const short_uuid_1 = __importDefault(require("short-uuid"));
const __1 = require("..");
const urlPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urlShort = short_uuid_1.default.generate();
    const { url } = req.body;
    yield urlModel_1.UrlModel.create({
        id: (0, uuid_1.v4)(),
        url,
        short: urlShort,
    });
    res.send(__1.URL + urlShort);
});
exports.urlPostController = urlPostController;
const baseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = req.params.key;
    const url = yield urlModel_1.UrlModel.findOne({
        where: {
            short: key
        }
    });
    res.redirect(url === null || url === void 0 ? void 0 : url.getDataValue("url"));
});
exports.baseController = baseController;
