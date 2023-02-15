import express from "express";
import { UrlModel } from "../Models/urlModel";
import { v4 as uid } from 'uuid';
import shortUUID from "short-uuid";
import { URL } from "..";



export const urlPostController = async (req: express.Request, res: express.Response) => {
    const urlShort = shortUUID.generate();
    const { url } = req.body;

    await UrlModel.create({
        id: uid(),
        url,
        short: urlShort,
    });

    res.send(URL + urlShort);
}


export const baseController = async (req: express.Request, res: express.Response) => {

    const key = req.params.key;

    const url = await UrlModel.findOne({
        where: {
            short: key
        }
    })

    res.redirect(url?.getDataValue("url"));
}