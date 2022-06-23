import { Badge, Button, Card, Group, Modal, Paper, Text } from "@mantine/core";
import { useState } from "react";
import { Book, deleteBook, updateBook } from "../../store/reducers/bookStore";
import BookForm, { BookFormType } from "./bookForm";
import { Trash } from "tabler-icons-react";
import { useAppDispatch } from "../../store/hooks";
import BookDetail from "./bookDetail";
import { showNotification } from "@mantine/notifications";

interface BookInfoProps {
  info: Book;
}

const BookInfo = ({ info }: BookInfoProps) => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [openUpdateForm, setOpenUpdateForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onUpdate = (id: string, values: Book) => {
    dispatch(updateBook({ id, values }));
    setOpenUpdateForm(false);
    showNotification({
      title: "Update Book Details",
      message: "Updated Successfully!",
      autoClose: 2000,
      color: "green",
    });
  };
  const onDelete = (id: string) => {
    dispatch(deleteBook(id));
    showNotification({
      title: "Delete Book",
      message: "Deleted Successfully!",
      autoClose: 2000,
      color: "red",
    });
  };
  const onOpenUpdateForm = () => {
    setOpenInfo(false);
    setOpenUpdateForm(true);
  };
  return (
    <div style={{ width: 450, margin: "auto" }}>
      <Modal opened={openInfo} onClose={() => setOpenInfo(false)}>
        <BookDetail info={info} onOpenModal={onOpenUpdateForm} />
      </Modal>
      <Modal opened={openUpdateForm} onClose={() => setOpenUpdateForm(false)}>
        <BookForm
          data={info}
          onUpdate={onUpdate}
          idx={info.id}
          type={BookFormType.update}
        />
      </Modal>
      <Card shadow="sm" p="lg" onClick={() => setOpenInfo(true)}>
        <Card.Section>
          <Text weight={500} p="md">
            {info.name}
          </Text>
        </Card.Section>
        <Group position="left">
          <Text size="xs">Price: </Text>
          <Badge color="blue">${info.price}</Badge>
          <Text size="xs">Category: </Text>
          <Badge color="green">{info.category}</Badge>
        </Group>
        <Group position="right">
          <Button
            variant="filled"
            color="red"
            leftIcon={<Trash size={15} />}
            size="xs"
            onClick={() => onDelete(info.id!)}
            style={{ zIndex: 99 }}
          >
            Delete
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default BookInfo;
