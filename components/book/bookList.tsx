import { Book } from "../../store/reducers/bookStore";
import BookInfo from "./bookInfo";

interface BookListProps {
  data: Book[];
}

const BookList = ({ data }: BookListProps) => {
  if (data?.length === 0) {
    return <div>No books to display...</div>;
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data?.length > 0 &&
        data.map((book) => (
          <div key={book.id} style={{ padding: "10px" }}>
            <BookInfo info={book} />
          </div>
        ))}
    </div>
  );
};

export default BookList;
