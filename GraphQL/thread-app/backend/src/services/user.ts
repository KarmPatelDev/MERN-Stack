import { createHmac, randomBytes } from "crypto";
import JWT from "jsonwebtoken";
import { prismaClient } from "../lib/db";

const JWT_SECRET = '$uperM@n#123';

export interface createUserPayload {
    firstName: string
    lastName?: string
    email: string
    password: string
}

export interface getUserTokenPayload {
    email: string
    password: string
}

class UserService {

    private static generateHash(salt: string, password: string){
        return createHmac('sha256', salt).update(password).digest('hex');
    }

    public static createUser(payload: createUserPayload){

        const {firstName, lastName, email, password} = payload;

        const salt = randomBytes(32).toString("hex");
        const hashedPassword = UserService.generateHash(salt, password);

        return prismaClient.user.create({
            data: {
                firstName,
                lastName: lastName ? lastName : "",
                email,
                password: hashedPassword,
                salt: salt,
                profileImageUrl: ""
            }
        });
    }

    private static getUserByEmail(email: string){
        return prismaClient.user.findUnique({ where: {email}});
    }

    public static getUserById(id: string){
        return prismaClient.user.findUnique({ where: {id}});
    }

    public static async getUserToken(payload: getUserTokenPayload){
        const { email, password } = payload;

        const user = await UserService.getUserByEmail(email);
        if(!user) throw new Error('User not found');

        const userSalt = user.salt;
        const userHashPasword = UserService.generateHash(userSalt, password);
        if(user.password !== userHashPasword) throw new Error('Invalid Password');

        const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
        return token;
    }

    public static decodeJWTToken(token: string){
        return JWT.verify(token, JWT_SECRET);
    }
}

export default UserService;