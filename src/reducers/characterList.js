// @flow

const initialState:Array<Object>= [];

const characterList = (state:Array<Object> = initialState, action:Object) => {
    console.log('state',state);
    console.log('action',action);
    switch (action.type) {
        case 'ADD_CHARACTER':
            return [
                ...state,
                {
                    characterName: action.payload.characterName,
                    characterInitiative: action.payload.characterInitiative,
                    characterMaxActions: action.payload.characterMaxActions,
                }
            ];
        default:
            return state
    }
};

export default characterList