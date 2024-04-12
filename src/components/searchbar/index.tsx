import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { Button, Card, Group, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsMaximize, IconBed, IconBuilding, IconMapPin, IconReceiptDollar, IconReportAnalytics, IconSearch } from "@tabler/icons-react";
import buttonClasses from "@/styles/Button.module.css";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
  const router = useRouter();

  const urlLocation = router.query.location as string;
  const urlPropertyType = router.query.propertyType as string;
  const urlBeds = router.query.beds as string;
  const urlReason = router.query.reason as string;
  const urlSize = router.query.size as string;

  const [location, setLocation] = useState<string | null>(urlLocation);
  const [propertyType, setPropertyType] = useState<string | null>(urlPropertyType);
  const [beds, setBeds] = useState<string | null>(urlBeds);
  const [reason, setReason] = useState<string | null>(urlReason);
  const [size, setSize] = useState<string | null>(urlSize);
  const [priceRange, setPriceRange] = useState<string | null>('');
  const [rent, setRent] = useState<string | null>('');
  const [dailyCharges, setDailyCharges] = useState<string | null>('');

  const smBreakPoint = useMediaQuery('(max-width: 48em)');

  const counties = [
    { value: "0", label: "Any" },
    { value: "Nairobi", label: "Nairobi County" },
    { value: "Kajiado", label: "Kajiado County" },
    { value: "Machakos", label: "Machakos County" },
    { value: "Kiambu", label: "Kiambu County" },
    { value: "Nanyuki", label: "Nanyuki County" },
    { value: "Dubai", label: "UAE - Dubai" }
  ];

  const propertyTypes = [
    { value: "0", label: "Any" },
    { value: "Apartment", label: "Apartments on Sale" },
    { value: "Office", label: "Offices on Sale" },
    { value: "Warehouse", label: "Warehouses on Sale" },
    { value: "Town House", label: "Town Houses on Sale" },
    { value: "Rentals", label: "Rental" }
  ];

  const bedrooms = [
    { value: "0", label: "Any" },
    { value: "1", label: "1 Bedroom" },
    { value: "2", label: "2 Bedrooms" },
    { value: "3", label: "3 Bedrooms" },
    { value: "4", label: "4 Bedrooms" },
    { value: "5", label: "5 Bedrooms" },
    { value: "6", label: "6 Bedrooms" },
  ];

  const spaceRange = [
    { value: "0", label: "Any" },
    { value: "1", label: "1 - 1000 sqft" },
    { value: "2", label: "1001 - 2000 sqft" },
    { value: "3", label: "2001 - 3000 sqft" },
    { value: "4", label: "3001 - 4000 sqft" },
    { value: "5", label: "4001 - 5000 sqft" },
    { value: "6", label: "5001 - 6000 sqft" },
    { value: "7", label: "6001 - 7000 sqft" },
    { value: "8", label: "7001 - 8000 sqft" },
    { value: "9", label: "8001 - 9000 sqft" },
    { value: "10", label: "9001 - 10000 sqft" },
  ]


  const buyingReason = [
    { value: "0", label: "Any" },
    { value: "To Occupy", label: "To Occupy" },
    { value: "Investment - Rental Income", label: "Investment - Rental Income" },
    { value: "Investment - Value appreciation", label: "Investment - Value appreciation" },
  ]


  const handleSearch = () => {
    if (router.pathname === "/") {``
      if (!location || !propertyType) {
      } else {
        router.push(`/search?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}`, undefined, { shallow: true });
      }
    } else if (router.pathname === "/property/onsale/apartments") {
      let query = "?propertyType=Apartment";
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/onsale/apartments/${query}`);
    } else if (router.pathname === "/property/onsale/townhouses") {
      let query = `?propertyType=${encodeURIComponent("Town House")}`;
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/onsale/townhouses/${query}`);
    } else if (router.pathname === "/property/onsale/villas") {
      let query = `?propertyType=${encodeURIComponent("Villa")}`;
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/onsale/villas/${query}`);
    }else if (router.pathname === "/property/onsale/warehouses") {
      let query = `?propertyType=${encodeURIComponent("Warehouse")}`;
      if (location) query = query + `&location=${location}`;
      if (size) query = query + `&size=${size}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/onsale/warehouses/${query}`);
    } else if (router.pathname === "/property/onsale/offices") {
      let query = `?propertyType=${encodeURIComponent("Office")}`;
      if (location) query = query + `&location=${location}`;
      if (size) query = query + `&size=${size}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/onsale/offices/${query}`);
    }else if (router.pathname === "/property/rentals"){
      let query = `?propertyType=${encodeURIComponent("Rentals")}`;
      if (location) query = query + `&location=${location}`;
      if (rent) query = query + `&rent=${rent}`;
      if (beds) query = query + `&beds=${beds}`;
      // console.log(query);
      router.push(`/property/rentals/${query}`);
    }else if (router.pathname === "/property/airbnb"){
      let query = `?propertyType=${encodeURIComponent("Airbnb")}`;
      if (location) query = query + `&location=${location}`;
      if (dailyCharges) query = query + `&dailyCharges=${dailyCharges}`;
      if (beds) query = query + `&beds=${beds}`;
      // console.log(query);
      router.push(`/property/airbnb/${query}`);
    }else if (router.pathname === "/search"){
      let query = `?`;
      if (location) query = query + `&location=${location}`;
      if (propertyType) query = query + `&propertyType=${propertyType}`;
      // console.log(query);
      router.push(`/search/${query}`);
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
          {(router.pathname == "/property/onsale/offices" || router.pathname == "/property/onsale/warehouses") && (
            <Stack gap={5}>
              <Group>
                <IconArrowsMaximize color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Space</Text>
              </Group>
              <Select
                placeholder="Select floor Size"
                data={spaceRange}
                clearable
                value={size}
                onChange={setSize}
              />
            </Stack>
          )}
          {(router.pathname == "/property/onsale/apartments" || router.pathname == "/property/onsale/townhouses" || router.pathname == "/property/rentals" || router.pathname == "/property/airbnb" || router.pathname == "/property/onsale/villas") && (
            <Stack gap={5}>
              <Group>
                <IconBed color={colors.primaryColor} />
                <Text c={colors.primaryColor}>No. of Bedrooms</Text>
              </Group>
              <Select
                placeholder="Select No. of Bedrooms"
                data={bedrooms}
                clearable
                value={beds}
                onChange={setBeds}
              />
            </Stack>
          )}
          {!(router.pathname == "/" || router.pathname == "/search"  || router.pathname == "/property/rentals" || router.pathname == "/property/airbnb") && (
            <Stack gap={5}>
              <Group>
                <IconReportAnalytics color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Reason for buying</Text>
              </Group>
              <Select
                placeholder="Select Reason for Buying"
                data={buyingReason}
                clearable
                value={reason}
                onChange={setReason}
              />
            </Stack>
          )}
          {(router.pathname == "/" || router.pathname == "/search") && (
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
          {(router.pathname == "/property/rentals" )&& (
            <Stack gap={5}>
              <Group>
                <IconReceiptDollar color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Monthly Rent</Text>
              </Group>
              <Select
                placeholder="Select price range"
                data={['50,000 - 70,000 KES', '71,000 - 90,000 KES', '91,000 - 110,000 KES', '111,000 - 150,000 KES', '150,000 +']}
                clearable
                value={rent}
                onChange={setRent}
              />
            </Stack>
          )}
           {(router.pathname == "/property/airbnb" )&& (
            <Stack gap={5}>
              <Group>
                <IconReceiptDollar color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Daily Charges</Text>
              </Group>
              <Select
                placeholder="Select price range"
                data={['5000 - 10,000 KES', '11,000 - 15,000 KES', '16,000 - 20,000 KES' , '20,000 +']}
                clearable
                value={rent}
                onChange={setRent}
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