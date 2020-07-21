import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({ name, email, password, confirmPassword }: Request): User {
    const user = this.usersRepository.create({
      name,
      email,
      password,
      confirmPassword,
    });

    return user;
  }
}

export default CreateUserService;
