import { Card, Container, Grid, Stack, Text } from "@mantine/core";
import apartmentIcon from "@/assets/apartment-icon.png";
import officeIcon from "@/assets/office-icon.png";
import warehouseIcon from "@/assets/warehouse-icon.png";
import townhouseIcon from "@/assets/townhouse-icon.png";
import Image from "next/image";
import { colors } from "@/constants/colors";
import classes from "./PropertyType.module.css"

const PropertyType = () => {
    return (
        <Container mt={50}>
            <Text ta="center" className={classes.title}>Property Types</Text>
            <Grid mt={30} gutter={30}>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Card withBorder shadow="sm" padding="lg" radius="lg" component="a" href="/property/onsale/apartments">
                        <Card.Section>
                            <Stack align="center" justify="center" style={{height: 150}}>
                                <Image
                                    src={apartmentIcon}
                                    alt="Apartment Icon"
                                    width={80}
                                    height={80}
                                />
                            </Stack>
                        </Card.Section>
                        <Text ta="center" c={colors.secondaryColor}>Apartments</Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Card withBorder shadow="sm" padding="lg" radius="lg" component="a" href="/property/onsale/offices">
                        <Card.Section>
                            <Stack align="center" justify="center" style={{height: 150}}>
                                <Image
                                    src={officeIcon}
                                    alt="Office Icon"
                                    width={80}
                                    height={80}
                                />
                            </Stack>
                        </Card.Section>
                        <Text ta="center" c={colors.secondaryColor}>Offices</Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Card withBorder shadow="sm" padding="lg" radius="lg" component="a" href="/property/onsale/warehouses">
                        <Card.Section>
                            <Stack align="center" justify="center" style={{height: 150}}>
                                <Image
                                    src={warehouseIcon}
                                    alt="warehouseIcon"
                                    width={80}
                                    height={80}
                                />
                            </Stack>
                        </Card.Section>
                        <Text ta="center" c={colors.secondaryColor}>Warehouses</Text>
                    </Card>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 3 }}>
                    <Card withBorder shadow="sm" padding="lg" radius="lg" component="a" href="/property/onsale/townhouses">
                        <Card.Section>
                            <Stack align="center" justify="center" style={{height: 150}}>
                                <Image
                                    src={townhouseIcon}
                                    alt="townhouseIcon"
                                    width={80}
                                    height={80}
                                />
                            </Stack>
                        </Card.Section>
                        <Text ta="center" c={colors.secondaryColor}>Town Houses</Text>
                    </Card>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default PropertyType;