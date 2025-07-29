import { CounterSchema } from 'widgets/Counter';
import { LoginSchema } from 'features/AuthByUserName';
import { UserSchema } from 'entity/User';

export interface StateSchema {
    counter: CounterSchema;
    loginForm: LoginSchema;
    user: UserSchema;
}
