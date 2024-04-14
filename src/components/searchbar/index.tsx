import { useEffect, useState } from "react";
import { colors } from "@/constants/colors";
import { Button, Card, Group, Select, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconArrowsMaximize, IconBed, IconBuilding, IconMapPin, IconReceiptDollar, IconReportAnalytics, IconSearch } from "@tabler/icons-react";
import buttonClasses from "@/styles/Button.module.css";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { IconListCheck } from "@tabler/icons-react";

const SearchBar = () => {
  const router = useRouter();

  const urlLocation = router.query.location as string;
  const urlPropertyType = router.query.propertyType as string;
  const urlBeds = router.query.beds as string;
  const urlReason = router.query.reason as string;
  const urlSize = router.query.size as string;
  const urlListing = router.query.listingStatus as string;

  const [location, setLocation] = useState<string | null>(urlLocation);
  const [propertyType, setPropertyType] = useState<string | null>(urlPropertyType);
  const [beds, setBeds] = useState<string | null>(urlBeds);
  const [listing, setListing] = useState<string | null>(urlListing);
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
    { value: "Apartment", label: "Apartments" },
    { value: "Office", label: "Offices" },
    { value: "Warehouse", label: "Warehouses" },
    { value: "Fully Serviced Apartments", label: "Fully Serviced Apartments" },
    { value: "Fully Furnished House", label: "Fully Furnished House" },
    { value: "Town House", label: "Town Houses" },
    { value: "Villa", label: "Villas" },
    { value: "Showroom", label: "Showrooms" }
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

  const listingStatus = [
    { value: "0", label: "Any" },
    { value: "Sale", label: "For Sale" },
    { value: "Rent", label: "For Rent" },
  ]


  const handleSearch = () => {
    const saleType = router.pathname.includes("onsale") ? "onsale" :
      router.pathname.includes("rental") ? "rental" :
        router.pathname.includes("furnished") ? "furnished" :
          "";

    if (router.pathname === "/" || router.pathname === "/search") {
      let query = `?`;
      if (location) query = query + `&location=${location}`;
      if (propertyType) query = query + `&propertyType=${propertyType}`;
      if (listing) query = query + `&listingStatus=${listing}`;
      // console.log(query);
      router.push(`/search/${query}`);
    } else if (router.pathname.includes("apartments")) {
      let query = "?propertyType=Apartment";
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      router.push(`/property/${saleType}/apartments/${query}`);
      // console.log(query);
    } else if (router.pathname.includes("townhouses")) {
      let query = `?propertyType=${encodeURIComponent("Town House")}`;
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      router.push(`/property/${saleType}/townhouses/${query}`);
      // console.log(query);
    } else if (router.pathname.includes("villas")) {
      let query = `?propertyType=${encodeURIComponent("Villa")}`;
      if (location) query = query + `&location=${location}`;
      if (beds) query = query + `&beds=${beds}`;
      if (reason) query = query + `&reason=${reason}`;
      router.push(`/property/${saleType}/villas/${query}`);
      // console.log(query);
    } else if (router.pathname.includes("warehouses")) {
      let query = `?propertyType=${encodeURIComponent("Warehouse")}`;
      if (location) query = query + `&location=${location}`;
      if (size) query = query + `&size=${size}`;
      if (reason) query = query + `&reason=${reason}`;
      router.push(`/property/${saleType}/warehouses/${query}`);
      // console.log(query);
    } else if (router.pathname.includes("offices")) {
      let query = `?propertyType=${encodeURIComponent("Office")}`;
      if (location) query = query + `&location=${location}`;
      if (size) query = query + `&size=${size}`;
      if (reason) query = query + `&reason=${reason}`;
      // console.log(query);
      router.push(`/property/${saleType}/offices/${query}`);
    } else if (router.pathname.includes("showrooms")) {
      let query = `?propertyType=${encodeURIComponent("Showroom")}`;
      if (location) query = query + `&location=${location}`;
      if (size) query = query + `&size=${size}`;
      if (reason) query = query + `&reason=${reason}`;
      router.push(`/property/${saleType}/showrooms/${query}`);
      // console.log(query);
    } else if (router.pathname === "/property/furnished/houses") {
      let query = `?propertyType=${encodeURIComponent("Fully Furnished House")}`;
      if (location) query = query + `&location=${location}`;
      if (rent) query = query + `&rent=${rent}`;
      if (beds) query = query + `&beds=${beds}`;
      // console.log(query);
      router.push(`/property/furnished/houses/${query}`);
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
          {(router.pathname == "/" || router.pathname == "/search") && (
            <Stack gap={5}>
              <Group>
                <IconListCheck color={colors.primaryColor} />
                <Text c={colors.primaryColor}>Listing Status</Text>
              </Group>
              <Select
                placeholder="Select listing status"
                data={listingStatus}
                clearable
                value={listing}
                onChange={setListing}
              />
            </Stack>
          )}
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
          {(router.pathname.includes("offices") || router.pathname.includes("warehouses") || router.pathname.includes("showrooms")) && (
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
          {(router.pathname.includes("apartments") || router.pathname.includes("townhouses") || router.pathname.includes("furnished/houses") || router.pathname.includes("villas")) && (
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
          {!(router.pathname == "/" || router.pathname == "/search" || router.pathname == "/property/rentals") && (
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

          <Button mt={smBreakPoint ? 5 : 30} className={buttonClasses.secondaryButton} leftSection={<IconSearch size={16} />} onClick={handleSearch}>Search</Button>
        </SimpleGrid>
      </Card>
    </Stack>
  );
}


export { SearchBar };