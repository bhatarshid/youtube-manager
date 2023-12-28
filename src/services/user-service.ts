import { createUser, getUserByEmail, getUserById } from "../model/user";

export const createNewUserService = async (data: Record<string, any>) => {
    try {
        const user = await getUserByEmail(data.email);
        if(user) {
            throw new Error('User exists with same email.');
        }

        const newUser = await createUser(data);

        return newUser
    }
    catch (error) {
        throw error;
    }
}

export const getUserByIdService = async (id: string) => {
    try {
        if(!id){
            throw new Error('Please provide the id of user');
        }
        const user = await getUserById(id);

        return user;
    }
    catch (error) {
        throw error;
    }
}