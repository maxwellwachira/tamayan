import { Button, Container, Divider, Grid, Group, List, Stack, Text, ThemeIcon, rem } from "@mantine/core";
import PropertyImages from "./images";
import { colors } from "@/constants/colors";
import { IconArrowsMaximize, IconBarbell, IconBath, IconBed, IconBeer, IconBrandIntercom, IconClockHour9, IconDroplet, IconDropletHalfFilled, IconGardenCart, IconMapPin, IconParking, IconShieldChevron, IconSolarPanel2, IconSwimming } from "@tabler/icons-react";
import GoogleMapReact from 'google-map-react';
import buttonClasses from "@/styles/Button.module.css";
import axios from "axios";
import { urls } from "@/constants/urls";
import { useEffect, useState } from "react";
import { ApiResponse, Property } from "@/utils/interfaces";

const IconRender = ({ iconName }: { iconName: string }) => {
    // Map icon names to corresponding icon components
    const iconMap: { [key: string]: React.ElementType } = {
        IconArrowsMaximize,
        IconBarbell,
        IconBath,
        IconBed,
        IconBeer,
        IconBrandIntercom,
        IconClockHour9,
        IconDroplet,
        IconDropletHalfFilled,
        IconGardenCart,
        IconMapPin,
        IconParking,
        IconShieldChevron,
        IconSolarPanel2,
        IconSwimming
    };

    // Check if the iconName exists in the iconMap, if not, return null
    const IconComponent = iconMap[iconName] || null;

    // Render the icon component if it exists
    return (
        <>
            {IconComponent && <IconComponent color="teal" size={18} />}
        </>
    );
};



const SinglePropertyLayout = () => {

    const [property, setProperty] = useState<Property | null>(null);

    const fetchProperties = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?populate=*`);
            setProperty(data.data[0]);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProperties();
    }, []);

    const defaultProps = {
        center: {
            lat: -1.5326637193356476,
            lng: 37.1471550701857
        },
        zoom: 11
    };
    return (
        <Container size="xl" mt={10}>
            <Text ta="center" fz={26} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} my={10}>{property?.attributes.propertyName} {property?.attributes.propertyType.data.attributes.type.toLowerCase() === "apartment" ? ` - ${property.attributes.no_of_bedrooms} Bedroom Apartment` : ""}</Text>
            <Grid>
                <Grid.Col span={{ base: 12, md: 12, lg: 9 }}>
                    {property &&
                        <PropertyImages images={property.attributes.images.data} />
                    }
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12, lg: 3 }}>
                    <Text ta="center" fz={26} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>{property?.attributes.propertyType.data.attributes.type} Information</Text>
                    <Divider label={<Text fz={13}>General Information</Text>} my={20} />
                    <Stack px="xl">
                        <Group align="center">
                            <IconBed color="teal" size={20} />
                            <Text fz={14}> {property?.attributes.no_of_bedrooms} Bedrooms</Text>
                        </Group>
                        <Group align="center">
                            <IconBath color="teal" size={18} />
                            <Text fz={14}> {property?.attributes.no_of_bathrooms} Bathrooms</Text>
                        </Group>
                        <Group align="center">
                            <IconArrowsMaximize color="teal" size={18} />
                            <Text fz={14}> {property?.attributes.size} {property?.attributes.size_unit.data.attributes.unit}</Text>
                        </Group>
                    </Stack>
                    <Divider label={<Text fz={13}>Features</Text>} my={20} />
                    <Stack px="xl">
                        {property?.attributes.amenities.data.map((el, index) => (
                            <Group align="center" wrap="nowrap">
                                <IconRender iconName={el.attributes.icon} />
                                <Text fz={14}>{el.attributes.amenity}</Text>
                            </Group>
                        ))}
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Text ta="center" fz={26} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>What you should know about {property?.attributes.propertyName}</Text>
                    <Stack>
                        <Text mt={10}>{property?.attributes.description}</Text>
                        <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Location</Text>
                        <List c={colors.textColor} icon={
                            <IconMapPin style={{ width: rem(16), height: rem(16) }} color="teal" />
                        }>
                            <List.Item>{property?.attributes.location}</List.Item>
                        </List>
                        <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Proximity To</Text>
                        <List c={colors.textColor} icon={
                            <IconMapPin style={{ width: rem(16), height: rem(16) }} color="teal" />
                        }>
                            <List.Item>{property?.attributes.proximity}</List.Item>
                        </List>
                        <Text ta="center" fz={22} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"} mt={10}>Asking Price:  {property?.attributes.buyingPrice} Million</Text>
                        <Stack>
                            <Button variant="outline" color="gray" radius={15}>Enquire</Button>
                        </Stack>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"} mt={10}>Visit</Text>
                    <div style={{ padding: "0px 30px" }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5323.85896585429!2d37.143918461464494!3d-1.5342886021637339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f84bd9cdcd8ef%3A0xf748554b2c55495d!2sSerene%20Park!5e0!3m2!1sen!2ske!4v1707773969919!5m2!1sen!2ske" width="600" height="450" style={{ height: '100%', width: '100%', minHeight: 550, borderRadius: 15, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default SinglePropertyLayout; 