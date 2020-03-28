export class RegisterParentData {
  userName: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.userName = name;
    this.email = email;
    this.password = password;
  }
}
