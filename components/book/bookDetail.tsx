import { Group, Paper, Text, Badge, Button } from "@mantine/core";
import { Book } from "../../store/reducers/bookStore";

interface BookDetailProps {
  info: Book;
  onOpenModal: () => void;
}

const BookDetail = ({ info, onOpenModal }: BookDetailProps) => (
  <Paper p="md">
    <Group position="left">
      <Text size="md">Name:</Text>
      <Text weight={500}>{info.name}</Text>
    </Group>
    <Group position="left">
      <Text size="md">Price:</Text>
      <Badge color="blue">${info.price}</Badge>
    </Group>
    <Group position="left">
      <Text size="md">Category:</Text>
      <Badge color="green">{info.category}</Badge>
    </Group>
    <Group position="left">
      <Text size="md">Description:</Text>
      <Text size="sm" px="xs">
        {info.description}
      </Text>
    </Group>
    <Group position="right">
      <Button variant="outline" onClick={onOpenModal}>
        Update
      </Button>
    </Group>
  </Paper>
);

export default BookDetail;
