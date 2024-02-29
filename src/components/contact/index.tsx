import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container, Notification } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from './bg.svg';
import classes from './Contact.module.css';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { IconCheck, IconX } from '@tabler/icons-react';
import { urls } from '@/constants/urls';

export default function GetInTouch() {
    const [response, setResponse] = useState('');
    const router = useRouter();
    const { subject } = router.query;
    // console.log(subject)

    const initialValues = {
        email: '',
        name: '',
        subject: subject ? subject : '',
        message: ''
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
        <Container mt={50}>
            <Paper shadow="xl" radius="lg">
                <div className={classes.wrapper}>
                    <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
                        <Text fz="lg" fw={700} className={classes.title} c="#fff">
                            Contact information
                        </Text>

                        <ContactIconsList />
                    </div>

                    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Get in touch
                        </Text>
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

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput
                                    label="Your name"
                                    placeholder="Your name"
                                    radius={10}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    error={form.errors.name && 'Invalid name'}
                                />
                                <TextInput
                                    label="Your email"
                                    placeholder="email.gmail.com"
                                    required
                                    radius={10}
                                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                    error={form.errors.email && 'Invalid email'}
                                />
                            </SimpleGrid>
                            <TextInput
                                mt="md"
                                label="Subject"
                                placeholder="Subject"
                                required
                                radius={10}
                                defaultValue={subject}
                                onChange={(event) => form.setFieldValue('subject', event.currentTarget.value)}
                                error={form.errors.subject && 'Invalid subject'}
                            />

                            <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                                radius={10}
                                onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
                                error={form.errors.message && 'Invalid message'}
                            />

                            <Group justify="flex-end" mt="md">
                                <Button type="submit" className={classes.control} radius="md">
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}