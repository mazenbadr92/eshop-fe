export class UserModel {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    created_at: Date;
    modified_at: Date;
    
    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
      }
}