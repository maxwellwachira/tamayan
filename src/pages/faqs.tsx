import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import QuestionsAnswers from "@/components/faq";
import FAQHero from "@/components/faq/hero";
import Head from "next/head";


const FAQPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | FAQs Page</title>
                <meta name="description" content="Tamayan Frequently asked questions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <FAQHero />
            <QuestionsAnswers />
            <Footer/>
        </>
    );

}

export default FAQPage;