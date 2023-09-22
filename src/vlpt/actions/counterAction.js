export const COUNT_INCREMENT = 'COUNT/INCREMENT';
export const COUNT_DECREMENT = 'COUNT/DECREMENT';
export const countIncrement = () => ({
    type: COUNT_INCREMENT
});
export const countDecrement = () => ({
    type: COUNT_DECREMENT
});