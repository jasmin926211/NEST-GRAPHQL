
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTodoInput {
    text: string;
}

export class UpdateTodoInput {
    id: string;
    text?: Nullable<string>;
    status: string;
}

export class SigninUserInput {
    username: string;
    password: string;
}

export class Todo {
    id: string;
    text: string;
    status: string;
    createdAt: string;
    user: User;
}

export class User {
    id: string;
    username: string;
    password: string;
    todos: Todo[];
}

export class SigninResponse {
    access_token: string;
    username: string;
}

export class SignupResponse {
    username: string;
}

export abstract class IQuery {
    abstract getAllTodos(): Todo[] | Promise<Todo[]>;

    abstract getTodo(id: string): Todo | Promise<Todo>;
}

export abstract class IMutation {
    abstract createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;

    abstract updateTodo(updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;

    abstract deleteTodo(id: string): Todo | Promise<Todo>;

    abstract signup(loginUserInput: SigninUserInput): SignupResponse | Promise<SignupResponse>;

    abstract signin(loginUserInput: SigninUserInput): SigninResponse | Promise<SigninResponse>;
}

type Nullable<T> = T | null;
