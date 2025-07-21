import { CounterSchema } from 'widgets/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
}
