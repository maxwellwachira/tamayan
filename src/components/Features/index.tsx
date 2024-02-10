import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconExchange, IconArrowGuide, IconCheckupList, IconMapPin } from '@tabler/icons-react';
  import classes from './Features.module.css';
import { colors } from '@/constants/colors';
  
  const mockdata = [
    {
      title: 'Comprehensive Property Listings',
      description:
        'Browse through our extensive database of properties, featuring a diverse range of residential, commercial, and industrial spaces.',
      icon: IconCheckupList,
    },
    {
      title: 'Interactive Map View',
      description:
        'Explore neighborhoods, schools, transportation options, and nearby amenities to make informed decisions about your next investment.',
      icon: IconMapPin,
    },
    {
      title: 'Seamless Buying or Renting Process',
      description:
        'Once you have found the perfect property, our streamlined buying or renting process makes it easy to move forward.',
      icon: IconExchange,
    },
    {
        title: 'Expert Guidance',
        description:
          'Our team of experienced real estate professionals is here to assist you every step of the way by providing personalized guidance and support to meet your unique needs',
        icon: IconArrowGuide,
      },
  ];
  
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(40), height: rem(40) }}
          stroke={2}
          color={colors.primaryColor}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl" mt={30}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Buy your Dream Property effortlessly
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Dive into a seamless experience designed to transform your property search from tedious to thrilling, guiding you effortlessly from exploration to acquisition.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }