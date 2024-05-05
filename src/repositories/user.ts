import { User } from "types";
import { db } from "../utils/db";

const create = async (user: User): Promise<User> => {
  const { name, email, birthdate, password } = user;

  return await db.user.create({
    data: {
      name, email, birthdate, password
    }
  });
}

const findByEmail = async (email: string): Promise<User | null> => {
  return await db.user.findFirst({
    where: {
      email
    }
  })
}

const UserRepo = { create, findByEmail }

export default UserRepo;