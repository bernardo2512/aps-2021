import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("task")
class Task {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    isDone: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }

        if (!this.isDone) {
            this.isDone = false;
        }
    }
}

export { Task };