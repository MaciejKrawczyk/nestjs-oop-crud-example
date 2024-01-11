import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe
} from "@nestjs/common";
import { UsersService } from "./users.service";
import {CreateUserDto} from "./dto/create-user-dto-ts";
import {UpdateUserDto} from "./dto/update-user-dto";

@Controller("users")
export class UsersController {
  /*
  GET/users
  GET/users/:id
  POST/users
  PATCH/users/:id
  DELETE/users/:id
   */

  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users
  findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
    return this.usersService.findAll(role);
  }

  @Get(":id") // GET /users/:id
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    user: CreateUserDto
  ) {
    return this.usersService.create(user);
  }

  @Patch(":id") // PATCH /users/:id
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body(ValidationPipe)
    userUpdate: UpdateUserDto
  ) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(":id") // DELETE /users/:id
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
