import { AppShell, Button, Group, Modal, useMantineTheme } from "@mantine/core";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import BookForm, { BookFormType } from "../components/book/bookForm";
import BookList from "../components/book/bookList";
import BookHeader from "../components/header";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import { Book, createBook, selectBooks } from "../store/reducers/bookStore";
import * as uuid from "uuid";
import { showNotification } from "@mantine/notifications";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const books = useSelector(selectBooks);
  const [booksData, setBookData] = useState<Book[]>([]);

  const onCreate = (values: Book) => {
    dispatch(
      createBook({
        ...values,
        id: uuid.v4(),
      })
    );
    setOpened(false);
    showNotification({
      title: "Create Book",
      message: "Created Successfully!",
      autoClose: 2000,
    });
  };
  useEffect(() => {
    setBookData(books);
  }, [booksData, books]);
  return (
    <div>
      <AppShell
        styles={{
          body: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        fixed
        padding="md"
        header={<BookHeader />}
      >
        <Group position="center">
          <Button onClick={() => setOpened(true)}>Add Book</Button>
        </Group>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Add Your Favorite Book"
        >
          <BookForm onSubmit={onCreate} type={BookFormType.create} />
        </Modal>
        <Group position="center" p="xl">
          <BookList data={booksData} />
        </Group>
      </AppShell>
    </div>
  );
};

export default Home;
