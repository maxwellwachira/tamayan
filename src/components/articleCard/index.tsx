import { TablerIconsProps } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Center,
  useMantineTheme,
  Button,
} from '@mantine/core';
import classes from './ArticleCard.module.css';
import { colors } from '@/constants/colors';

interface ArticleCardProps {
  id: number;
  propertyType?: string;
  image: string;
  title: string;
  description: string;
  footerTitle: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}

export function ArticleCard({ id, propertyType, image, title, description, footerTitle, Icon }: ArticleCardProps) {
  const linkProps = { href: `/property/${id}`, rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={180} />
        </a>
      </Card.Section>


      {propertyType &&
        <Badge className={classes.rating} variant="gradient" gradient={{ from: 'blue', to: 'teal' }}>
          {propertyType}
        </Badge>
      }

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" className={classes.footer} align='center'>
        <Center>
          <Icon color={colors.secondaryColor} />
          <Text fz="xs" inline ml={10} c={colors.primaryColor}>
            {footerTitle}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <Button variant="outline" size="xs" color="dark" radius="sm" component='a' href={`/property/${id}`}>See More</Button>
        </Group>
      </Group>
    </Card>
  );
}