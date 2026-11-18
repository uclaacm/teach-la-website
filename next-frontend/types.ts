export interface IClass {
    _id?: string,
    name: string;
    shortTitle: string;
    blurb: string;
    imagePath: string;
    tags?: string[];
    classPagePath?: string;
    githubRepoLink?: string;
    teachers: string[];
    dates: string[];
    schools?: string[];
    isPublic: boolean;
}

export interface IUser {
    _id?: string,
    email: string;
    username: string;
    password: string;
}

export interface IEvent {
    _id: string,
    name: string,
    category: string,
    description: string,
    tags: string[],
    imagePath: string,
    altText: string,
    date: string, 
    isPublic: boolean
    eventPagePath?: string
}

export type EventInput = Omit<IEvent, "_id" | "eventPagePath"> & {
    eventPagePath?: string | null;
};

export interface ICalendarDayData {
    day: number,
    month: number, 
    year: number
    classes: IClass[],
    events: IEvent[]
}
