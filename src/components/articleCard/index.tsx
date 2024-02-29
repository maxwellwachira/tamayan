import { IconBookmark, IconBuildingSkyscraper, IconHeart, IconShare, TablerIconsProps } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
  Button,
} from '@mantine/core';
import classes from './ArticleCard.module.css';
import apartment from '@/assets/apartment.png';
import { StaticImageData } from 'next/image';
import { colors } from '@/constants/colors';
import buttonClasses from "@/styles/Button.module.css";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  footerTitle: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}

export function ArticleCard({ image, title, description, footerTitle, Icon }: ArticleCardProps) {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={180} />
        </a>
      </Card.Section>

      {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge> */}

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
       {description}
      </Text>

      <Group justify="space-between" className={classes.footer} align='center'>
        <Center>
          <Icon  color={colors.secondaryColor}/>
          <Text fz="xs" inline ml={10} c={colors.primaryColor}>
           {footerTitle}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <Button variant="outline" size="xs" color="gray" radius={10} component='a' href="/property">See More</Button>
        </Group>
      </Group>
    </Card>
  );
}