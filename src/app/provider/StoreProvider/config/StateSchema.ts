import { LoginSchema } from 'features/AuthByUserName';
import { UserSchema } from 'entity/User';

export interface StateSchema {
    loginForm: LoginSchema;
    user: UserSchema;
}
