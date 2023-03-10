import { Router } from "express";

import { homeController } from "../../../controllers";


const HomeRouter = Router();

HomeRouter.get('/user/public/home', homeController);


export default HomeRouter;

