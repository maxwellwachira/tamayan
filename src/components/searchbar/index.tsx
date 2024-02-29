import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { Button, Card, Group, Select, Stack, Text } from "@mantine/core";
import { IconBuilding, IconMapPin, IconReceiptDollar, IconSearch } from "@tabler/icons-react";
import buttonClasses from "@/styles/Button.module.css";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const urlLocation = router.query.location as string;
  const urlPropertyType = router.query.propertyType as string;
  const [location, setLocation] = useState<string | null>(urlLocation);
  const [propertyType, setPropertyType] = useState<string | null>(urlPropertyType);
  const [priceRange, setPriceRange] = useState<string | null>('');

  const counties = [
    { value: "Nairobi", label: "Nairobi County" },
    { value: "Kajiado", label: "Kajiado County" },
    { value: "Machakos", label: "Machakos County" },
    { value: "Kiambu", label: "Kiambu County" },
    { value: "Nanyuki", label: "Nanyuki County" },
    { value: "Dubai", label: "UAE - Dubai" }
  ];

  const propertyTypes = [
    { value: "Apartment", label: "Apartments on Sale" },
    { value: "Office", label: "Offices on Sale" },
    { value: "Warehouse", label: "Warehouses on Sale" },
    { value: "Town House", label: "Town Houses on Sale" },
    { value: "Rentals", label: "Rental" }
  ];



  const handleSearch = () => {
    if(!location || !propertyType){

    }else {
      router.push(`/search?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}`);
    }
  }


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
              data={counties}
              value={location} 
              onChange={setLocation}
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
              data={propertyTypes}
              clearable
              value={propertyType} 
              onChange={setPropertyType}
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
          <Button mt={30} className={buttonClasses.secondaryButton} leftSection={<IconSearch size={16} />} onClick={handleSearch}>Search</Button>
        </Group>
      </Card>
    </Stack>
  );
}


export { SearchBar };