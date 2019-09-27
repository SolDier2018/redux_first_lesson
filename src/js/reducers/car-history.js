export default (state = [], action) => {
    switch (action.type) {
        case "CAR_SELECTED":
            return [...state, action.payload.car];
            break;
        default:
            return state;
    }
}