import { Container, Title, Accordion, Box, Loader, Text, Stack } from '@mantine/core';
import classes from './FAQ.module.css';
import { colors } from '@/constants/colors';
import { urls } from '@/constants/urls';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IconHelpOctagon } from '@tabler/icons-react';

interface Faq {
  data: {
    id: number;
    attributes: {
      question: string;
      answer: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
const QuestionsAnswers = () => {

  const [allFaqs, setAllFaqs] = useState<Faq | null>(null);
  const [loading, setLoading] = useState(true);

  const getAllFaqs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${urls.strapiUrl}/faqs`);
      console.log(data);
      setAllFaqs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllFaqs();
  }, []);

  if (loading) {
    return (
      <Stack justify='center' align='center'>
        <Box mt={50}>
          <Loader variant="dots" color={colors.secondaryColor} />
        </Box>
      </Stack>
    )
  }
  return (
    <Container size="sm" className={classes.wrapper}>
      <Accordion variant="separated">
        {allFaqs && allFaqs.data.map(faq => (
          <Accordion.Item value={faq.attributes.question} key={faq.attributes.question}>
            <Accordion.Control style={{ color: colors.secondaryColor, fontSize: 17 }} icon={<IconHelpOctagon size={18}/>}>{faq.attributes.question} </Accordion.Control>
            <Accordion.Panel>
              <Text style={{ whiteSpace: "pre-wrap" }}>
                {faq.attributes.answer}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}

      </Accordion>
    </Container>
  );
}

export default QuestionsAnswers;