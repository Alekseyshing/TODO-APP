/* eslint-disable prettier/prettier */
import { Controller, Get, Patch, Post, Delete, Param, Body, HttpCode, HttpStatus, Header } from "@nestjs/common";
import { ChangeTodo } from "./dto/change-todo.dto";
import { CreateTodo } from "./dto/create-todo.dto";
import { TodoService } from "./todo.service";

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get()
  getAllTodos() {
    return this.todoService.findAll()
  }

  @Get(':id')
  getOneTodo(@Param('id') id: string) {
    return this.todoService.findOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createTodo(@Body() createTodo: CreateTodo) {
    this.todoService.create(createTodo)
  }

  @Patch(':id')
  changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id: string) {
    this.todoService.update(id, changeTodo)
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    this.todoService.remove(id)
  }
}
