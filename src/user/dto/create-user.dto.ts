import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export enum UserRole {
  MANAGER = "manager",
  ADMIN = "admin",
  TECHNOLOGIST = "technologist",
  ACCOUNTANT = "accountant",
  SEAMSTRESS = "seamstress",
  CUTTER = "cutter",
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    login: string;
    
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole,{message:"Не допустимое значение роли."})
    role: UserRole
}
