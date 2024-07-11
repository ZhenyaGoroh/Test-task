import { User } from "@/entities/user/types";
import { atom } from "jotai";

const DEFAULT_DATA: User = {
    authorized: false,
    firstName: '',
    lastName: '',
    email: '',
    image: '',
}

export const userAtom = atom<User>(DEFAULT_DATA)

