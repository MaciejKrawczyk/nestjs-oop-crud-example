import {CreateUserDto} from "./create-user-dto-ts";
import {PartialType} from '@nestjs/mapped-types'

export class UpdateUserDto extends PartialType(CreateUserDto) { }