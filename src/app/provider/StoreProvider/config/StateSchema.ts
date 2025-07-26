import { CounterSchema } from 'widgets/Counter';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    loginForm: LoginSchema;
}
