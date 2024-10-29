export interface User {
    name: string;
    email: string;
    gender:string;
    contact:string
  }
  
  export interface UserState {
    isLoggedIn: boolean;
    user: User | null;
  }
  