import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Task } from '../models/Task';

export const useTaskStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([])

    function addTask(title:string, deswcription?: string): Task {
        const id = tasks.value[tasks.value.length-1].id +1
        const newTask = new Task(id,title,deswcription)
        tasks.value.push(newTask)
        return newTask
    }

    function removeTask(task: Task):void{
        tasks.value = tasks.value.filter(f => f.id != task.id)
    }

    function toggleTask(task: Task): void {
        tasks.value.find(f => f.id == task.id)?.toggleCompleted
    }

    function getTaskById(id: number): Task | undefined{
        return tasks.value.find(f => f.id == id)
    }

    const completedTasks = computed( () => {
        tasks.value.filter(f => f.completed)
    })

    const pendingTasks = computed( () => {
        tasks.value.filter(f => !f.completed)
    })

    function saveToLocalStorage(): void{
        localStorage.setItem('tasks', JSON.stringify(tasks.value))
    }

    function loadFromLocalStroles(): void{
        const loadesdTasks = localStorage.getItem('taks');
        if(loadesdTasks) tasks.value = JSON.parse(loadesdTasks);
    }

})