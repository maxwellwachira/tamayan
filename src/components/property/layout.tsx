import { Button, Card, Container, Divider, Grid, Group, List, Stack, Text, ThemeIcon, rem } from "@mantine/core";
import PropertyImages from "./images";
import { colors } from "@/constants/colors";
import { IconArrowsMaximize, IconBarbell, IconBath, IconBed, IconBeer, IconBrandIntercom, IconCash, IconCheck, IconClockHour9, IconDroplet, IconDropletHalfFilled, IconGardenCart, IconInfoHexagon, IconInfoSquare, IconMapPin, IconParking, IconShieldChevron, IconSolarPanel2, IconSwimming, IconToolsKitchen2 } from "@tabler/icons-react";
import axios from "axios";
import { urls } from "@/constants/urls";
import { useEffect, useState } from "react";
import { ApiResponse, Property } from "@/utils/interfaces";
import DownloadPdfButton from "../DownloadPdfButton";
import classes from "./Property.module.css"
import { formatNumberWithCommas } from "@/utils/functions";
import { useRouter } from "next/router";

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
    const router = useRouter();

    const fetchProperties = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties?populate=*`);
            setProperty(data.data[0]);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleEnquiryClick = () => {
        router.push(`/contact?subject=${encodeURIComponent(`${property?.attributes.propertyType.data.attributes.type} Inquiry: ${property?.attributes.propertyName}`)}`)
    }

    useEffect(() => {
        fetchProperties();
    }, []);

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
                    <Card className={classes.cardShadow} radius="lg">
                        <Text ta="center" fz={23} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>{property?.attributes.propertyType.data.attributes.type} Information</Text>
                        <Divider label={<Text fz={13}>Asking Price</Text>} my={20} />
                        <Stack px="xl">
                            <Group align="center">
                                <IconCash color="teal" size={20} />
                                <Text fz={14}>{property?.attributes.buyingPrice} Million {property?.attributes.currency.data.attributes.currency}</Text>
                            </Group>
                        </Stack>
                        <Divider label={<Text fz={13}>General Information</Text>} my={20} />
                        <Stack px="xl">
                            {
                                (property?.attributes.propertyType.data.attributes.type == "Apartment" || property?.attributes.propertyType.data.attributes.type == "Town House") &&
                                <>
                                    <Group align="center">
                                        <IconBed color="teal" size={20} />
                                        <Text fz={14}> {property?.attributes.no_of_bedrooms} Bedrooms</Text>
                                    </Group>
                                    <Group align="center">
                                        <IconBath color="teal" size={18} />
                                        <Text fz={14}> {property?.attributes.no_of_bathrooms} Bathrooms</Text>
                                    </Group>
                                    <Group align="center">
                                        <IconToolsKitchen2 color="teal" size={18} />
                                        <Text fz={14}> {property?.attributes.kitchenPlan.data.attributes.plan}</Text>
                                    </Group>
                                    <Group align="center">
                                        <IconBed color="teal" size={20} />
                                        <Text fz={14}> {property?.attributes.no_of_DSQ} DSQ</Text>
                                    </Group>
                                </>
                            }
                            <Group align="center">
                                <IconArrowsMaximize color="teal" size={18} />
                                <Text fz={14}> {property?.attributes.size} {property?.attributes.size_unit.data.attributes.unit}</Text>
                            </Group>

                        </Stack>
                        <Divider label={<Text fz={13}>Project Status</Text>} my={20} />
                        <Stack px="xl">
                            <Group align="center">
                                <IconInfoSquare color="teal" size={18} />
                                <Text fz={14}>{property?.attributes.projectStatus.data.attributes.projectStatus}</Text>
                            </Group>
                        </Stack>
                        <Divider label={<Text fz={13}>Amenities</Text>} my={20} />
                        <Stack px="xl">
                            {property?.attributes.amenities.data.map((el, index) => (
                                <Group align="center" wrap="nowrap" key={index}>
                                    <IconRender iconName={el.attributes.icon} />
                                    <Text fz={14}>{el.attributes.amenity}</Text>
                                </Group>
                            ))}
                        </Stack>
                    </Card>
                </Grid.Col>
            </Grid>
            <Grid gutter={50}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack>
                        <Card className={classes.cardShadow} radius="lg">
                            <Text ta="center" fz={26} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>What you should know about {property?.attributes.propertyName}</Text>
                            <Text mt={10}>{property?.attributes.description}</Text>
                        </Card>
                        <Card className={classes.cardShadow} radius="lg">
                            <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Location</Text>
                            <List c={colors.textColor} icon={
                                <IconMapPin style={{ width: rem(16), height: rem(16) }} color={colors.primaryColor} />
                            }>
                                <List.Item>
                                    <Group>
                                        <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Physical Address:</Text>
                                        <Text>{property?.attributes.location}</Text>
                                    </Group>
                                </List.Item>
                            </List>
                            <List c={colors.textColor} icon={
                                <IconMapPin style={{ width: rem(16), height: rem(16) }} color={colors.primaryColor} />
                            }>
                                <List.Item>
                                    <Group>
                                        <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Proximity:</Text>
                                        <Text>{property?.attributes.proximity}</Text>
                                    </Group>
                                </List.Item>
                            </List>
                        </Card>
                        <Card className={classes.cardShadow} radius="lg">
                            <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Payment Plan</Text>
                            <Text>{property?.attributes.paymentPlan}</Text>
                        </Card>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card className={classes.cardShadow} radius="lg">
                        <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Reasons for Buying</Text>
                        {property?.attributes.buyingReasons.data.map((el, index) => (
                            <Group key={index}>
                                <IconCheck color={colors.primaryColor} size={18} />
                                <Text>{el.attributes.reason}</Text>
                            </Group>
                        ))}
                    </Card>
                    <Card mt={20} className={classes.cardShadow} radius="lg" px={20}>
                        <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Rental Income</Text>
                        <Group align="center">
                            <IconCash color={colors.primaryColor} size={18} />
                            <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Rental Income Unfurnished:</Text>
                            <Text>{formatNumberWithCommas(property?.attributes.rentalIncomeUnfurnished)} {property?.attributes.currency.data.attributes.currency}</Text>
                        </Group>
                        <Group align="center">
                            <IconCash color={colors.primaryColor} size={18} />
                            <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Rental Income Furnished:</Text>
                            <Text>{formatNumberWithCommas(property?.attributes.rentalIncomeFurnished)} {property?.attributes.currency.data.attributes.currency}</Text>
                        </Group>
                    </Card>
                    <Card mt={20} className={classes.cardShadow} radius="lg">
                        <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Other Details</Text>
                        <Group align="center">
                            <IconInfoHexagon color={colors.primaryColor} size={18} />
                            <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>SoldOut:</Text>
                            <Text>{`${property?.attributes.soldout}`}</Text>
                        </Group>
                        <Group align="center">
                            <IconInfoHexagon color={colors.primaryColor} size={18} />
                            <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Available Units:</Text>
                            <Text>{property?.attributes.unitsAvailable} units</Text>
                        </Group>
                    </Card>
                    <Stack mt={30}>
                        <Button variant="outline" radius="md" onClick={handleEnquiryClick}>Enquire</Button>
                    </Stack>
                    {property && property.attributes.brochure.data &&
                        <Stack mt={20}>
                            <DownloadPdfButton pdfUrl={`${urls.strapiBaseUrl}${property.attributes.brochure.data.attributes.url}`} fileName={property.attributes.brochure.data.attributes.name} title="Download Property Brochure" />
                        </Stack>
                    }
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default SinglePropertyLayout; 