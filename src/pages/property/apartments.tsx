import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ApartmentsOnly from "@/components/property/apartments";
import SinglePropertyLayout from "@/components/property/layout";
import Head from "next/head";


const ApartmentsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Single Property Page</title>
                <meta name="description" content="Tamayan Single Property Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
           <ApartmentsOnly />
            <Footer />
        </>
    )
}

export default ApartmentsPage;