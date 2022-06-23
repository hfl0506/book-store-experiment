import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { Book } from "../../store/reducers/bookStore";

export enum BookFormType {
  create = "create",
  update = "update",
}

interface BookFormProps {
  idx?: string;
  type: BookFormType;
  data?: Book;
  onSubmit?: (values: Book) => void;
  onUpdate?: (id: string, values: Book) => void;
}

const BookForm = ({
  type,
  data = {
    name: "",
    price: 0,
    category: "",
    description: "",
  },
  onSubmit,
  onUpdate,
  idx,
}: BookFormProps) => {
  const form = useForm({
    initialValues: data,
  });
  const submitForm = (values: Book) => {
    if (type === BookFormType.create && onSubmit) {
      return onSubmit(values);
    }
    if (type === BookFormType.update && onUpdate && idx) {
      return onUpdate(idx, values);
    }
  };
  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => submitForm(values))}>
        <TextInput
          label="Book Name"
          placeholder="Name"
          type="text"
          required
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Book Category"
          placeholder="Category"
          required
          type="text"
          {...form.getInputProps("category")}
        />
        <TextInput
          label="Book Price"
          placeholder="Price"
          required
          type="number"
          {...form.getInputProps("price")}
        />
        <Textarea
          label="Book Description"
          placeholder="Description"
          required
          {...form.getInputProps("description")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default BookForm;
