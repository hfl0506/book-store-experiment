import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface Book {
  id?: string;
  name: string;
  price: number;
  category: string;
  description: string;
}
// Define a type for the slice state
export interface BooksState {
  books: Book[];
}

// Define the initial state using that type
const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createBook: (state: BooksState, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload];
    },
    updateBook: (
      state: BooksState,
      action: PayloadAction<{ id: string; values: Book }>
    ) => {
      let foundIndex = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[foundIndex] = {
        ...action.payload.values,
        id: action.payload.id,
      };
    },
    deleteBook: (state: BooksState, action: PayloadAction<Book["id"]>) => {
      state.books = state.books.filter(
        (book: Book) => book.id !== action.payload
      );
    },
  },
});

export const { createBook, updateBook, deleteBook } = booksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: RootState) => state.books.books;

export default booksSlice.reducer;
