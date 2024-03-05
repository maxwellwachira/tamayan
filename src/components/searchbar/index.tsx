import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { Button, Card, Group, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconBed, IconBuilding, IconMapPin, IconReceiptDollar, IconSearch } from "@tabler/icons-react";
import buttonClasses from "@/styles/Button.module.css";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
  const router = useRouter();
  const urlLocation = router.query.location as string;
  const urlPropertyType = router.query.propertyType as string;
  const [location, setLocation] = useState<string | null>(urlLocation);
  const [propertyType, setPropertyType] = useState<string | null>(urlPropertyType);
  const [priceRange, setPriceRange] = useState<string | null>('');
  const smBreakPoint = useMediaQuery('(max-width: 48em)');

  const counties = [
    {value: "0", label: "Any"},
    { value: "Nairobi", label: "Nairobi County" },
    { value: "Kajiado", label: "Kajiado County" },
    { value: "Machakos", label: "Machakos County" },
    { value: "Kiambu", label: "Kiambu County" },
    { value: "Nanyuki", label: "Nanyuki County" },
    { value: "Dubai", label: "UAE - Dubai" }
  ];

  const propertyTypes = [
    {value: "0", label: "Any"},
    { value: "Apartment", label: "Apartments on Sale" },
    { value: "Office", label: "Offices on Sale" },
    { value: "Warehouse", label: "Warehouses on Sale" },
    { value: "Town House", label: "Town Houses on Sale" },
    { value: "Rentals", label: "Rental" }
  ];

  const bedrooms = [
    {value: "0", label: "Any"},
    {value: "1", label: "1 Bedroom"},
    {value: "2", label: "2 Bedrooms"},
    {value: "3", label: "3 Bedrooms"},
    {value: "4", label: "4 Bedrooms"},
    {value: "5", label: "5 Bedrooms"},
    {value: "6", label: "6 Bedrooms"},
    {value: "7", label: "7 Bedrooms"},
    {value: "8", label: "8 Bedrooms"},
    {value: "9", label: "9 Bedrooms"},
    {value: "10", label: "10 Bedrooms"},
    {value: "11", label: "11 Bedrooms"},
  ];


  const buyingReason = [
    {value: "0", label: "Any"},
    {value: "To Occupy", label: "To Occupy"},
    {value: "Investment - Rental Income", label: "Investment - Rental Income"},
    {value: "Investment - Value appreciation", label: "Investment - Value appreciation"},
  ]


  const handleSearch = () => {
    if (!location || !propertyType) {

    } else {
      router.push(`/search?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}`, undefined, { shallow: true });
    }
  }

  useEffect(() => {

  }, [])


  return (
    <Stack justify="center" align="center">
      <Card withBorder px="xl" py="lg" className={classes.shadow} radius={15}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
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
          {router.pathname == "/property/apartments" && (
            <Stack gap={5}>
              <Group>
                <IconBed color={colors.primaryColor} />
                <Text c={colors.primaryColor}>No. of Bedrooms</Text>
              </Group>
              <Select
                placeholder="Select No. of Bedrooms"
                data={bedrooms}
                clearable
              />
            </Stack>
          )}
          {router.pathname == "/property/apartments" && (
            <Stack gap={5}>
              <Group>
                <IconBed color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Reason for buying</Text>
              </Group>
              <Select
                placeholder="Select Reason for Buying"
                data={buyingReason}
                clearable
              />
            </Stack>
          )}
          {router.pathname != "/property/apartments" && (
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
          )}
          <Button mt={smBreakPoint ? 5 : 30} className={buttonClasses.secondaryButton} leftSection={<IconSearch size={16} />} onClick={handleSearch}>Search</Button>
        </SimpleGrid>
      </Card>
    </Stack>
  );
}


export { SearchBar };