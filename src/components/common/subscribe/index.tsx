import Image from 'next/image';
import axios from "axios";
import { useState } from "react";
import { Box, Container, Grid, Text, TextInput, Button, Center, Notification, Paper } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

import classes from "./Subscribe.module.css";
import { colors } from "@/constants/colors";
import { urls } from "@/constants/urls";

const Subscribe = () => {
    const [response, setResponse] = useState('');

    const initialValues = {
        email: '',
    }

    const form = useForm({
        initialValues,
        validate: {
            email: (value) => (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = async () => {
        if (JSON.stringify(form.errors) === "{}") {
            try {
                const { data } = await axios.post(`${urls.strapiUrl}/subscribers`, { data: form.values });
                console.log(data);
                if (data.data !== null) {
                    setResponse("Success");
                    form.setFieldValue('email', '');
                    setTimeout(() => {
                        setResponse('');
                    }, 6000);
                } else {
                    setResponse(data.error.message);
                    setTimeout(() => {
                        setResponse('');
                    }, 15000);
                }
            } catch (error: any) {
                console.log(error);
                setResponse(error.response.data.error.message);
                setTimeout(() => {
                    setResponse('');
                }, 15000);
            }
        }
    }

    const clearResponse = () => {
        setResponse('');
    }

    return (
        <Container size="lg">
            <Box className={classes.subscribeGradient} my={70} >
                <Container>
                    <Paper px="xl" style={{ background: 'transparent' }}>
                        <Grid>
                            <Grid.Col span={{ base: 12, md: 6 }} mt={30}>
                                <Text fz={32} fw={600} c={colors.primaryColor}>Don't be left out, <br />Subscribe to our News Letter</Text>
                                <form className={classes.subscribeWidth} onSubmit={form.onSubmit(() => handleSubmit())}>
                                    {response === 'Success' ? (
                                        <Notification icon={<IconCheck size={18} />} color="teal" title="Success" onClose={clearResponse} my="lg">
                                            You will hear from us soon!!!
                                        </Notification>
                                    ) : response ? (
                                        <Notification icon={<IconX size={18} />} color="red" title="Error" onClose={clearResponse} my="lg">
                                            {response}
                                        </Notification>
                                    ) : ''
                                    }
                                    <TextInput
                                        mt="xl"
                                        placeholder={`     Enter Your Email`}
                                        rightSectionWidth={117}
                                        rightSection={<Button radius="lg" size="md" type="submit" color={colors.primaryColor}>Subscribe</Button>}
                                        radius="lg"
                                        size="md"
                                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                        error={form.errors.email && 'Invalid email'}
                                    />
                                </form>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Center>
                                    <Image
                                        src='/subscribe.svg'
                                        height={300}
                                        width={300}
                                        alt="subscibe"
                                    />
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </Container>
    )
}

export default Subscribe;