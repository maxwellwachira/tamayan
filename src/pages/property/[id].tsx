import { urls } from "@/constants/urls";
import { Property } from "@/utils/interfaces";
import { IconAlarm, IconArrowsMaximize, IconBarbell, IconBath, IconBed, IconBedFlat, IconBeer, IconBrandIntercom, IconCash, IconCheck, IconCheckbox, IconClockHour9, IconDroplet, IconDropletHalfFilled, IconGardenCart, IconInfoHexagon, IconInfoSquare, IconInfoSquareRounded, IconMapPin, IconParking, IconRotate360, IconShieldChevron, IconSolarPanel2, IconSwimming, IconToolsKitchen2 } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Divider, Grid, Group, List, Stack, Text, rem } from "@mantine/core";
import { useRouter } from "next/router";
import PropertyImages from "@/components/property/images";
import classes from "@/components/property/Property.module.css";
import { colors } from "@/constants/colors";
import { displayMonthAndYear, formatNumberWithCommas } from "@/utils/functions";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import Head from "next/head";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export async function getStaticPaths() {
    let ids: Array<string> = [];

    const fetchProperties = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties`);
            // console.log(data.data)
            data.data.map((property: Property) => {
                let id = property.id;
                ids.push(`${id}`);
            })
        } catch (error) {
            //console.log(error);
        }
    }

    await fetchProperties()

    // Generate paths for all vehicle registration numbers without whitespace   
    const paths = ids.map((id) => ({ params: { id } }));

    return {
        paths,
        fallback: true, // Render 404 for unknown slugs
    };
}

// In a real application, you would fetch vehicle data from an API or database here
export async function getStaticProps({ params, req }: any) {
    return {
        props: {},
    };
}


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




const DynamicProperty = () => {
    const [property, setProperty] = useState<Property | null>(null);
    const router = useRouter();
    const { id } = router.query;

    const fetchProperties = async () => {
        try {
            const { data } = await axios.get(`${urls.strapiUrl}/properties/${id}?populate=*`);
            setProperty(data.data);
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
        <>
            <Head>
                <title>Tamayan Properties | {property?.attributes.propertyName}</title>
                <meta name="description" content="Tamayan Single Property Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
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
                            <Divider label={<Text fz={14} c={"dark"} fw="bold">Asking Price</Text>} my={10} px={15} color={"dark"} />
                            <Stack px="xl">
                                <Group align="center">
                                    <IconCash color="teal" size={20} />

                                    {(property?.attributes.propertyType.data.attributes.type == "Office" || property?.attributes.propertyType.data.attributes.type == "Warehouse") ?
                                        <Text fz={14}>{formatNumberWithCommas(property?.attributes.buyingPrice)} {property?.attributes.currency.data.attributes.currency} per {property?.attributes.size_unit.data.attributes.unit}</Text>
                                        :
                                        <Text fz={14}>{formatNumberWithCommas(property?.attributes.buyingPrice)} {property?.attributes.currency.data.attributes.currency == 'KES' ? (property?.attributes.propertyType.data.attributes.type === "Apartment" || property?.attributes.propertyType.data.attributes.type === "Villa") ? "Million" : '' : ""} {property?.attributes.currency.data.attributes.currency}</Text>
                                    }

                                </Group>
                            </Stack>
                            {property?.attributes.buyingReasons.data.some(reason => reason.attributes.reason === "Investment - Value appreciation" && property.attributes.sellingPrice != null) &&
                                <>
                                    <Divider label={<Text fz={14} c={"dark"} fw="bold">Selling Price</Text>} my={10} px={15} color={"dark"} />
                                    <Stack px="xl">
                                        <Group align="center">
                                            <IconCash color="teal" size={20} />
                                            <Text fz={14}>{property?.attributes.sellingPrice} {property?.attributes.currency.data.attributes.currency != "KES" ? "" : "Million"} {property?.attributes.currency.data.attributes.currency}</Text>
                                        </Group>
                                    </Stack></>
                            }
                            <Divider label={<Text fz={14} c={"dark"} fw="bold">General Information</Text>} my={10} px={15} color={"dark"} />
                            <Stack px="xl">
                                {
                                    (property?.attributes.propertyType.data.attributes.type == "Apartment" || property?.attributes.propertyType.data.attributes.type == "Town House" || property?.attributes.propertyType.data.attributes.type == "Villa") &&
                                    <>
                                        <Group align="center">
                                            <IconBed color="teal" size={18} />
                                            <Text fz={14}> {property?.attributes.no_of_bedrooms} Bedrooms</Text>
                                        </Group>
                                        <Group align="center">
                                            <IconBath color="teal" size={18} />
                                            <Text fz={14}> {property?.attributes.no_of_bathrooms} Bathrooms</Text>
                                        </Group>
                                        <Group align="center">
                                            <IconToolsKitchen2 color="teal" size={18} />
                                            <Text fz={14}> {property?.attributes.kitchenPlan.data.attributes.plan} Kitchen</Text>
                                        </Group>
                                        <Group align="center">
                                            <IconBedFlat color="teal" size={18} />
                                            <Text fz={14}> {property?.attributes.no_of_DSQ} DSQ</Text>
                                        </Group>
                                    </>
                                }
                                {(property && property.attributes.size) &&
                                    <Group align="center">
                                        <IconArrowsMaximize color="teal" size={18} />
                                        <Text fz={14}> {property?.attributes.size} {property?.attributes.size_unit.data.attributes.unit}</Text>
                                    </Group>
                                }
                            </Stack>
                            <Divider label={<Text fz={14} c={"dark"} fw="bold">Project Status</Text>} my={10} px={15} color={"dark"} />
                            <Stack px="xl">
                                <Group align="center">
                                    <IconInfoSquare color="teal" size={18} />
                                    <Text fz={14}>{property?.attributes.projectStatus.data.attributes.projectStatus}</Text>
                                </Group>
                                {property?.attributes.projectStatus.data.attributes.projectStatus === "Completed" ?
                                    <Group align="center">
                                        <IconAlarm color="teal" size={18} />
                                        <Text fz={14}>Completed in {property.attributes.completionYear}</Text>
                                    </Group> :
                                    <Group align="center">
                                        <IconAlarm color="teal" size={18} />
                                        <Text fz={14}>Completion by {displayMonthAndYear(property?.attributes.expected_completion_date)}</Text>
                                    </Group>
                                }
                            </Stack>
                            <Divider label={<Text fz={14} c={"dark"} fw="bold">Location</Text>} my={10} px={15} color={"dark"} />
                            <Stack px="xl">
                                <Group align="center" wrap="nowrap">
                                    <IconMapPin color="teal" size={18} />
                                    <a href={property?.attributes.locationPin} target="__blank"> Google Maps</a>
                                </Group>
                                <Group wrap="nowrap" align="flex-start">
                                    <IconMapPin color="teal" size={18} />
                                    <Text fz={14}>{property?.attributes.location}</Text>
                                </Group>
                            </Stack>
                            {
                                property?.attributes.videoUrl &&
                                <>
                                    <Divider label={<Text fz={14} c={"dark"} fw="bold">360° View</Text>} my={10} px={15} color={"dark"} />
                                    <Stack px="xl">
                                        <Group>
                                            <IconRotate360 color="teal" size={18} />
                                            <a href={property?.attributes.videoUrl} target="__blank"> 3D view</a>
                                        </Group>
                                    </Stack>
                                </>
                            }
                        </Card>
                    </Grid.Col>
                </Grid>
                <Grid gutter={50}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack>
                            <Card className={classes.cardShadow} radius="lg">
                                <Text ta="center" fz={26} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>What you should know about {property?.attributes.propertyName}</Text>
                                <Text mt={10} style={{ whiteSpace: 'pre-line' }}>{property?.attributes.description}</Text>
                            </Card>
                            <Card className={classes.cardShadow} radius="lg">
                                <Text ta="center" fz={22} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Amenities</Text>
                                {property?.attributes.amenities.data.map((el, index) => (
                                    <Group align="center" wrap="nowrap" key={index} mt={5}>
                                        <IconCheckbox color="teal" size={18} />
                                        <Text>{el.attributes.amenity}</Text>
                                    </Group>
                                ))}
                            </Card>
                            {(property && property.attributes.paymentPlan) &&
                                <Card className={classes.cardShadow} radius="lg">
                                    <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Payment Plan</Text>
                                    <Text style={{ whiteSpace: 'pre-line' }}>{property?.attributes.paymentPlan}</Text>
                                </Card>
                            }
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        {(property && property.attributes.proximity) &&
                            <Card className={classes.cardShadow} radius="lg">
                                <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Proximity</Text>
                                {property?.attributes.proximity.split("√").map((el, index) => (
                                    <>
                                        {index > 0 &&
                                            <Group key={index} wrap="nowrap" align="flex-start">
                                                <IconMapPin color="teal" size={18} />
                                                <Text>{el}</Text>
                                            </Group>
                                        }
                                    </>
                                ))}
                                {property?.attributes.proximity.split("•").map((el, index) => (
                                    <>
                                        {index > 0 &&
                                            <Group key={index} flex={1} wrap="nowrap" align="flex-start">
                                                <IconMapPin color="teal" size={18} />
                                                <Text>{el}</Text>
                                            </Group>
                                        }
                                    </>
                                ))}
                            </Card>
                        }
                        <Card className={classes.cardShadow} radius="lg" mt={20}>
                            <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Reasons for Buying</Text>
                            {property?.attributes.buyingReasons.data.map((el, index) => (
                                <Group key={index} mt={5}>
                                    <IconCheckbox color="teal" size={18} />
                                    <Text>{el.attributes.reason}{el.attributes.reason == "Investment - Value appreciation" ? ":" : ""}</Text>
                                    {(el.attributes.reason == "Investment - Value appreciation" && property.attributes.sellingPrice != null) && <Text>Selling Price -{property.attributes.sellingPrice} Million {property?.attributes.currency.data.attributes.currency}</Text>}
                                </Group>
                            ))}
                        </Card>
                        {(property?.attributes.propertyType.data.attributes.type == "Apartment" || property?.attributes.propertyType.data.attributes.type == "Town House") &&
                            <Card mt={20} className={classes.cardShadow} radius="lg" px={20}>
                                <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Rental Income</Text>
                                <Group align="center" mt={5}>
                                    <IconCash color={colors.primaryColor} size={18} />
                                    <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Unfurnished:</Text>
                                    <Text>{formatNumberWithCommas(property?.attributes.rentalIncomeUnfurnished)} {property?.attributes.currency.data.attributes.currency}</Text>
                                </Group>
                                <Group align="center" mt={5}>
                                    <IconCash color={colors.primaryColor} size={18} />
                                    <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Furnished:</Text>
                                    <Text>{formatNumberWithCommas(property?.attributes.rentalIncomeFurnished)} {property?.attributes.currency.data.attributes.currency}</Text>
                                </Group>
                            </Card>
                        }
                        <Card mt={20} className={classes.cardShadow} radius="lg">
                            <Text ta="center" fz={24} c={colors.secondaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Other Details</Text>
                            <Group align="center" mt={5}>
                                <IconInfoSquareRounded color={colors.primaryColor} size={18} />
                                <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>SoldOut:</Text>
                                <Text>{property?.attributes.soldout ? "Yes" : "No"}</Text>
                            </Group>
                            <Group align="center" mt={5}>
                                <IconInfoSquareRounded color={colors.primaryColor} size={18} />
                                <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Total Units:</Text>
                                <Text>{property?.attributes.no_of_units} units</Text>
                            </Group>
                            {
                                property && property.attributes.unitsAvailable &&
                                <Group align="center" mt={5}>
                                    <IconInfoSquareRounded color={colors.primaryColor} size={18} />
                                    <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Available Units:</Text>
                                    <Text>{property?.attributes.unitsAvailable} units</Text>
                                </Group>
                            }
                            <Group align="center" mt={5}>
                                <IconInfoSquareRounded color={colors.primaryColor} size={18} />
                                <Text ta="center" fz={18} c={colors.primaryColor} fw={500} ff={"'Patrick Hand', cursive"}>Total No. of Floors:</Text>
                                <Text>{property?.attributes.no_of_floors}</Text>
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
            <Footer />
        </>
    )
}

export default DynamicProperty