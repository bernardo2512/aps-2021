import { Task } from './../entities/Task';
import { Repository } from "typeorm";
import { TaskRepository } from "../repositories/TaskRepository";
import { GetConnection } from "./GetConnection";

class TaskService {
    private serviceConnection = new GetConnection(TaskRepository);
    private taskRepository: Repository<Task>;

    async create(name: string, description: string) {
        this.taskRepository = await this.serviceConnection.open();

        const taskExist = await this.taskRepository.findOne({
            name
        })

        if (taskExist) {
            return taskExist
        }

        const task = this.taskRepository.create({
            name,
            description
        })

        await this.taskRepository.save(task);

        return task;
    }

    async list() {
        this.taskRepository = await this.serviceConnection.open();

        const taskList = await this.taskRepository.find();
        return taskList;
    }

    async update(id: string) {
        this.taskRepository = await this.serviceConnection.open();

        this.taskRepository.update(
            id,
            {
                isDone: true
            });

        const taskExist = await this.taskRepository.findOne({
            id
        })

        return taskExist;
    }
}

export { TaskService };