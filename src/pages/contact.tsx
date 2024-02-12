import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import GetInTouch from "@/components/contact";
import Head from "next/head";


const ContactUsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Contact us Page</title>
                <meta name="description" content="Tamayan Contact Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <GetInTouch />
            <Footer />
        </>
    );

}

export default ContactUsPage;