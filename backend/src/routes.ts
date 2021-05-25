import { Router } from "express";
import { TaskController } from "./controllers/TaskController";

const routes = Router();

const taskController = new TaskController();

routes.get("/tasks", taskController.list);
routes.post("/tasks", taskController.create);
routes.put("/tasks/:id", taskController.update);

export { routes };