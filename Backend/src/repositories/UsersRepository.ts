import User from '../models/User';

interface UserDTO {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({ name, email, password, confirmPassword }: UserDTO): User {
    const user = new User({ name, email, password, confirmPassword });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
