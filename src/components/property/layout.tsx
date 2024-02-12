import { Button, Container, Divider, Grid, Group, List, Stack, Text, ThemeIcon, rem } from "@mantine/core";
import PropertyImages from "./images";
import { colors } from "@/constants/colors";
import { IconArrowsMaximize, IconBarbell, IconBath, IconBed, IconBeer, IconBrandIntercom, IconClockHour9, IconDroplet, IconDropletHalfFilled, IconGardenCart, IconMapPin, IconParking, IconShieldChevron, IconSolarPanel2, IconSwimming } from "@tabler/icons-react";
import GoogleMapReact from 'google-map-react';
import buttonClasses from "@/styles/Button.module.css";


const SinglePropertyLayout = () => {
    const defaultProps = {
        center: {
            lat: -1.5326637193356476,
            lng: 37.1471550701857
        },
        zoom: 11
    };
    return (
        <Container size="xl" mt={20}>

            <Grid>
                <Grid.Col span={{ base: 12, md: 12, lg: 9 }}>
                    <PropertyImages />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
                    <Text ta="center" fz={26} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Serene Park Phase II</Text>
                    <Divider label={<Text fz={13}>General Information</Text>} my={20} />
                    <Stack px="xl">
                        <Group align="center">
                            <IconBed color="teal" size={20} />
                            <Text fz={14}> 4 Bedrooms</Text>
                        </Group>
                        <Group align="center">
                            <IconBath color="teal" size={18} />
                            <Text fz={14}> 3 Bathrooms</Text>
                        </Group>
                        <Group align="center">
                            <IconArrowsMaximize color="teal" size={18} />
                            <Text fz={14}> 2,800 SQFT</Text>
                        </Group>
                    </Stack>
                    <Divider label={<Text fz={13}>Features</Text>} my={20} />
                    <Stack px="xl">
                        <Group align="center" wrap="nowrap">
                            <IconBeer color="teal" size={18} />
                            <Text fz={14}>Exclusive Club House</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconBarbell color="teal" size={18} />
                            <Text fz={14}>Fully Equipped GYM</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconSwimming color="teal" size={18} />
                            <Text fz={14}>Infinity Pool</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconParking color="teal" size={18} />
                            <Text fz={14}>3 Car Parking</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconParking color="teal" size={18} />
                            <Text fz={14}>Visitors Parking</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconDroplet color="teal" size={18} />
                            <Text fz={14}>Borehole</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconShieldChevron color="teal" size={18} />
                            <Text fz={14}>Guard House & Security System</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconBrandIntercom color="teal" size={18} />
                            <Text fz={14}>Intercom Facility</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconSolarPanel2 color="teal" size={18} />
                            <Text fz={14}>Solar water heating system</Text>
                        </Group>
                        <Group align="center" wrap="nowrap">
                            <IconGardenCart color="teal" size={18} />
                            <Text fz={14}>LandScaped Gardens</Text>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Text ta="center" fz={26} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Serene Park Phase II</Text>
                    <Stack>
                        <Text mt={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere quis ligula nec pellentesque. Curabitur a urna quis quam maximus malesuada. Praesent non pulvinar enim. Morbi dapibus non est at maximus. Mauris posuere, nunc vitae vehicula egestas, tellus ligula porttitor nisi, eget iaculis urna ex nec dolor. Sed faucibus, justo ut vulputate aliquam, massa arcu facilisis sem, nec egestas nunc lacus vitae turpis. Phasellus dictum volutpat sapien sed auctor. Phasellus ac dolor ultrices, mattis diam nec, volutpat diam. Sed eu lorem dolor.</Text>
                        <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Location</Text>
                        <List c={colors.textColor} icon={
                            <IconMapPin style={{ width: rem(16), height: rem(16) }} color="teal" />
                        }>
                            <List.Item>40 Minutes from Nairobi</List.Item>
                            <List.Item>500M from Main Machakos-Mombasa Road Junction</List.Item>
                        </List>
                        <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Proximity To</Text>
                        <List c={colors.textColor} icon={
                            <IconMapPin style={{ width: rem(16), height: rem(16) }} color="teal" />
                        }>
                            <List.Item>20 Minutes drive to Signature Mall, Gateway mall CrystalRivers on Mombasa Road</List.Item>
                            <List.Item>20 Minutes drive to connect to the Express way at mlolongo</List.Item>
                            <List.Item>20 Minutes from the Machakos Golf Course</List.Item>
                        </List>
                        <Text ta="center" fz={22} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"} mt={10}>Asking Price:  22.4 Million</Text>
                        <Stack>
                            <Button variant="outline" color="gray" radius={15}>Enquire</Button>
                        </Stack>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mt={10}>Visit</Text>
                    <div style={{padding: "0px 30px"}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5323.85896585429!2d37.143918461464494!3d-1.5342886021637339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f84bd9cdcd8ef%3A0xf748554b2c55495d!2sSerene%20Park!5e0!3m2!1sen!2ske!4v1707773969919!5m2!1sen!2ske" width="600" height="450" style={{ height: '100%', width: '100%', minHeight: 550, borderRadius: 15, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default SinglePropertyLayout; 