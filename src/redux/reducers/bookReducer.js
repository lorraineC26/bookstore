import { ActionTypes } from "../constants/action-types";

const initialState = {
  books: [
    {
      id: 1,
      title: "The Book of Bill",
      price: 35.99,
      category: "fiction",
      image:
        "https://dynamic.indigoimages.ca/v1/books/books/1368092209/1.jpg?width=810&maxHeight=810&quality=85",
      description:
        "The demon that terrorized Gravity Falls is back from the great beyond to finally tell his side of the story in The Book of Bill, written by none other than Bill Cipher himself. Inside, Bill sheds light on his bizarre origins, his sinister effects on human history, the Pines family’s most embarrassing secrets, and the key to overthrowing the world (laid out in a handy step-by-step guide). This chaotic and beautifully illustrated tome contains baffling riddles, uncrackable ciphers, lost Journal 3 pages, ways to cheat death, the meaning of life, and a whole chapter on Silly Straws. But most importantly, The Book of Bill is deeply, deeply cursed.",
    },
  ],
};

export const bookReducer = (state, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_BOOK_DATA:
      return state;
    default:
      return state;
  }
}