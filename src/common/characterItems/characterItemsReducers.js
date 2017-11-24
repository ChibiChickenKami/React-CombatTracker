// @flow
import type { Action, CharacterItemsState } from '../../types';
// Helper functions
import shortId from 'shortid';

export const initialState = {
  equipment: [
    {
      id: shortId.generate(),
      title: "Credits",
      amount: 0,
      description: "Money that is accepted anywhere digital money is accepted at."
    },
    {
      id: shortId.generate(),
      title: "Black Market Goods",
      amount: 0,
      description: "From bottle caps to fine minerals; all the stuff ill repute people will accept. "
    }
  ],
};

const characterItemsReducer = ( state: CharacterItemsState = initialState, action: Action ): CharacterItemsState => {
  let newState = {};
  switch (action.type) {
    case 'ADD_ITEM':
      // Create a new state with the new item
      newState = Object.assign({}, state, {
        equipment: state.equipment.concat({
          id: shortId.generate(),
          title: action.payload.title,
          amount: action.payload.amount,
          description: action.payload.description,
        })
      });
      return (newState);

    case 'EDIT_ITEM':

      const { equipment } = state;
      newState = equipment.map(item => (item.id === action.payload.id)
          ? {
            ...equipment,
            title: action.payload.title,
            amount: action.payload.amount,
            description: action.payload.description
          } : item
      );

      return ({...state, equipment:newState});

    default:
      return state;
  }
};

export default characterItemsReducer;