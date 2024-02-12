import { Box, Center, Container, Grid, Stack, Text } from "@mantine/core";
import classes from "./FAQ.module.css";
import faqImage from "@/assets/faq.webp";
import Image from "next/image";
import { colors } from "@/constants/colors";

const FAQHero = () => {
    return (
        <Box className={classes.introBackground}>
            <Container mt={15}>
                <Grid gutter={30}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Center mt={20}>
                            <Image
                                src={faqImage}
                                height={350}
                                width={500}
                                alt="FAQ Image"
                            />
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack>
                            <Text fz={32} mt={20} c={colors.primaryColor}>Frequently Asked Questions</Text>
                            <Text>we have compiled a list of some of the most commonly asked questions about Tamayan Properties to help provide you with the information you need.</Text>
                            <Text>Our goal is to provide clear and concise answers to your questions and to help you better understand our offerings. If you cannot find the information you need here, please feel free to contact us, and we will be happy to assist you further.</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    )
}

export default FAQHero;