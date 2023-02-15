import express from 'express';
import { routerHome } from './Router/home';

export const app = express();
 
app.use(express.json());
app.use(routerHome);

 