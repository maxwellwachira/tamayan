import { Box, Group, Grid, Stack, Text, BackgroundImage, Container } from "@mantine/core";
import classes from './Hero.module.css'
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import apartmentImage from "@/assets/apt.png"
import { SearchBar } from "../searchbar";
import sky from "@/assets/sky.jpg";

const HomePageHero = () => {
    const smBreakPoint = useMediaQuery('(max-width: 48em)');
    const mdBreakPoint = useMediaQuery('(max-width: 62em)');
    return (
        <Container size={1350}>
            <BackgroundImage className={classes.heroBackground} mt={8} src={sky.src}>
                <Grid maw={1295} mah={600}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack justify="center" style={{ height: "70%" }} mt={smBreakPoint ? 40 : mdBreakPoint ? 60 : 0}>
                            <Text className={classes.title}>Unlock Your Perfect Space: Buy or Rent, Your Property Awaits!</Text>
                            <Text className={classes.subtitle}>Find the perfect space to call your own or rent. Start your journey to finding your dream property today!</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {!(smBreakPoint || mdBreakPoint) &&
                            <Stack align="center" >
                                <Image
                                    src={apartmentImage}
                                    alt="Apartment Image"
                                    width={650}
                                    height={600}
                                />
                            </Stack>
                        }
                    </Grid.Col>
                </Grid>
                {(smBreakPoint || mdBreakPoint) ?
                    <Box mt={mdBreakPoint ? 50 : 0}>
                        <SearchBar />
                    </Box> :
                    <Stack align="center" style={{ position: "relative" }}>
                        <Box className={classes.searchPosition}>
                            <SearchBar />
                        </Box>
                    </Stack>
                }
            </BackgroundImage>
        </Container>
    )
}

export default HomePageHero;