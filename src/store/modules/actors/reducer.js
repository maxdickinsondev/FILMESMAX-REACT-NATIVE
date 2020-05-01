export default function actor(state = '', action) {
    switch (action.type) {
        case '@actor/id':
            return action.id;
        default:
            return state;
    }
}