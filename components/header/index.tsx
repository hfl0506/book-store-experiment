import {
  Text,
  Header,
  ThemeIcon,
  Group,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { Book2, Sun, MoonStars } from "tabler-icons-react";

const BookHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Header
      height={60}
      p="md"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Group position="left">
        <ThemeIcon mr="xs">
          <Book2 size={24} strokeWidth={2} color={"white"} />
        </ThemeIcon>
        <Text
          component="span"
          size="md"
          weight={700}
          style={{ fontFamily: "Greycliff CF, sans-serif" }}
        >
          Book Store
        </Text>
      </Group>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="toggle dark mode"
      >
        {dark ? <Sun size={15} /> : <MoonStars size={15} />}
      </ActionIcon>
    </Header>
  );
};

export default BookHeader;
