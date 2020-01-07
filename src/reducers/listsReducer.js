import { CONSTANTS } from "../actions";
let listID = 2; 
let cardID = 4;
const initialState = [
    {
      title: "Done",
      id: 0, 
      cards : [
          {
              id: 0, 
              text: "text test 1 ABC"
          },
          {
              id: 1, 
              text: "text test 2 DEF"
          },
          {
            id: 2, 
            text: "GHI"
          },
          {
            id: 3, 
            text: "JKL"
          }

      ]
    },
    {
        title: "Todo",
        id: 0, 
        cards : [
            {
                id: 0, 
                text: "call Alex"
            },
            {
                id: 1, 
                text: "email Alex"
            }
  
        ]
      }   
]

const listsReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return [...state, newList]

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text, 
                id: cardID
            }
            cardID += 1;
            console.log("action received", action);

            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list
                }
            });
            return newState;
        default: 
        return state; 
    }
}

export default listsReducer;