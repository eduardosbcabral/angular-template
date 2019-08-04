export class Usuario {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;

  toString? = (): string => this.username;
}