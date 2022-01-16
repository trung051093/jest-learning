import { getUsers } from "./service"

const isFullUser = async () => {
    const users = await getUsers();
    return users.length > 1 ? true : false;
}

export {
    isFullUser
}