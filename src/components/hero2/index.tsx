import { Box, Group, Grid, Stack, Text } from "@mantine/core";
import classes from './Hero.module.css'
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import apartmentImage from "@/assets/apartment-bg.png"
import { SearchBar } from "../searchbar";


const HomePageHero = () => {
    const smBreakPoint = useMediaQuery('(max-width: 48em)');
    return (
        <Box className={classes.heroBackground} mt={8}>
            <Grid maw={1295} mah={688}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack justify="center" style={{ height: "70%" }} mt={smBreakPoint ? 40 : 0}>
                        <Text className={classes.title}>Unlock Your Perfect Space: Buy or Rent, Your Property Awaits!</Text>
                        <Text className={classes.subtitle}>Find the perfect space to call your own or rent. Start your journey to finding your dream property today!</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    {!smBreakPoint &&
                        <Stack align="center" >
                            <Image
                                src={apartmentImage}
                                alt="Apartment Image"
                                width={650}
                                height={630}
                            />
                        </Stack>
                    }
                </Grid.Col>
            </Grid>
            {smBreakPoint ?
                <Box>
                    <SearchBar />
                </Box> :
                <Stack align="center" style={{ position: "relative" }}>
                    <Box className={classes.searchPosition}>
                        <SearchBar />
                    </Box>
                </Stack>
            }
        </Box>
    )
}

export default HomePageHero;