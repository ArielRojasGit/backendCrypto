import { NewUserDto, UserDto } from "../types";
import { UserRepository } from "../data/repositories/user.repository";
import { UserPojo } from "../data/models/user.model";
import { v4 as uuid } from 'uuid';


export class UserService {
    _userRepository: UserRepository;
    constructor() {
      this._userRepository = new UserRepository();//aqui se inicializa el UserRepository del arechivo userRepositoru.ts.con el parentesis
    }
  
    async addUser(user: NewUserDto): Promise<string> {//esta funcion pasa por parámetro solo una variable que es de tipo NewUserDto
      //TODO : LLamar al repositorio
      const userPojo: UserPojo = this.parseNewDtoIntoPojo(user);
      const userPromise = await this._userRepository
        .addUser(userPojo)
        .then((userId) => {
        console.log(userId)
          return userId;
        })
        .catch((error) => {
          console.error(error);
          throw error;
        });
      return userPromise;
    }
  
    async getUser(emailPass : {email : string , password: string}): Promise<UserDto | undefined>{
    
      const userPromise = await this._userRepository
      .getUser(emailPass)
      .then(res =>{
        if(!!res){
          return this.parsePojoIntoDto(res)
        }else{
          return undefined
        }
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
      return userPromise
    }
  

    parsePojoIntoDto(userPojo: UserPojo): UserDto {
      const userDto: UserDto = {
        user_id: userPojo.user_id,
        amount: userPojo.amount,
        birth_date: userPojo.birth_date,
        full_name: userPojo.full_name,
        password: userPojo.password,
        email : userPojo.email
      };
      return userDto;
    }
  

    parseNewDtoIntoPojo(userDto: NewUserDto): UserPojo {  
      const myUserDto = userDto as UserPojo;
      myUserDto.user_id = uuid()
      return myUserDto
    }
  }