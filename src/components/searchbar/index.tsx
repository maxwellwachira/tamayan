import { colors } from "@/constants/colors";
import { Button, Card, Group, Select, Stack, Text } from "@mantine/core";
import { IconBuilding, IconMapPin, IconReceiptDollar, IconSearch } from "@tabler/icons-react";
import buttonClasses from "@/styles/Button.module.css";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  return (
    <Stack justify="center" align="center">
      <Card withBorder px="xl" py="lg" className={classes.shadow} radius={15}>
      <Group>
        <Stack gap={5}>
          <Group>
            <IconMapPin color={colors.primaryColor} />
            <Text c={colors.primaryColor}>Location</Text>
          </Group>
          <Select
            placeholder="Select Location"
            data={['Nairobi County', 'Kajiado County', 'Machakos County', 'Kiambu County', 'Nanyuki County', 'UAE - Dubai']}
            clearable
          />
        </Stack>
        <Stack gap={5} display={router.pathname.includes("property") ? "none" : "flex"}>
          <Group>
            <IconBuilding color={colors.primaryColor} />
            <Text c={colors.primaryColor}>Property Type</Text>
          </Group>
          <Select
            placeholder="Select property type"
            data={['Apartments on Sale', 'Offices on Sale', 'Warehouses on Sale', 'Town Houses on Sale', 'Rental']}
            clearable
          />
        </Stack>
        <Stack gap={5}>
          <Group>
            <IconReceiptDollar color={colors.primaryColor} />
            <Text c={colors.primaryColor}>Price Range</Text>
          </Group>
          <Select
            placeholder="Select price range"
            data={['2 - 3 Million KES', '3 - 5 Million KES', '5 - 8 Million KES', '8 - 15 Million KES', '15 Million +']}
            clearable
          />
        </Stack>
        <Button mt={30} className={buttonClasses.secondaryButton} leftSection={<IconSearch size={16}/>}>Search</Button>
      </Group>
      </Card>
    </Stack>
  );
}


export { SearchBar };