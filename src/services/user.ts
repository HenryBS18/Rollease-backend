import { User, UserPayload } from "types";
import { UserRepo } from "../repositories";
import bcrypt from 'bcrypt';

const register = async (user: User): Promise<UserPayload> => {
  const isEmailExist = await getByEmail(user.email);

  if (isEmailExist) {
    throw new Error(`Email ${user.email} already exist`);
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;

  const userRes: User = await UserRepo.create(user);

  const payload = {
    id: userRes.id!,
    name: userRes.name,
    email: userRes.email,
    birthdate: userRes.birthdate
  }

  return payload;
}

const getByEmail = async (email: string): Promise<User | null> => {
  const user = await UserRepo.findByEmail(email);
  return user;
}

const login = async (email: string, password: string): Promise<UserPayload> => {
  const user = await getByEmail(email);
  
  if (!user) {
    throw new Error("Email not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Wrong password");
  }

  const payload = {
    id: user.id!,
    name: user.name,
    email: user.email,
    birthdate: user.birthdate
  }

  return payload;
}

const UserService = { register, getByEmail, login }

export default UserService;