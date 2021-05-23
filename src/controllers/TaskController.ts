import { TaskService } from "../services/TaskService";
import { Request, Response } from "express";

class TaskController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        const taskService = new TaskService();

        const task = await taskService.create(name, description);

        return response.json(task);
    }

    async list(request: Request, response: Response): Promise<Response> {
        const taskService = new TaskService();

        const taskList = await taskService.list();

        return response.json(taskList);
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const taskService = new TaskService();

        const task = await taskService.update(id);

        return response.json(task);
    }
}

export { TaskController };