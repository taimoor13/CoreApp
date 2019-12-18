import { Photo } from './photo';

export interface User {
    id: number;
    username : string;
    knownAs : string;
    age : number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;

    interests?: string; // ? is for optional, these will always come after required properties, otherwise you wil get the error
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[]; // create an interface for it
}
