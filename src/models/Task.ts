export class Task{
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;

    constructor(
        id: number,
        title: string,
        description?: string,
        completed: boolean = false
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}