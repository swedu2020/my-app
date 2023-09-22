import { COUNT_INCREMENT, COUNT_DECREMENT } from "../actions/counterAction";
export function reducer_counter(state, action) {
    switch (action.type) {
        case COUNT_INCREMENT:
        return state + 1;
        case COUNT_DECREMENT:
        return state - 1;
        default:
        return state;
    }
}
