import {Kindergarden} from "./Kindergarden";

export interface Child {
    id: string;
    name: string;
    birthDate: string,
    kindergardenId: number,
    enrollmentDate: Date
}

export interface ChildResponse {
    id: string;
    name: string;
    birthDate: string,
    kindergarden: Kindergarden,
    kindergardenName: string,
    kindergardenId: number,
    enrollmentDate: Date
}
