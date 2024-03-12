import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import RentalsOnly from "@/components/property/rentals";
import { NextPage } from "next";
import Head from "next/head";


const RentalsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | RentalsPage</title>
                <meta name="description" content="Tamayan RentalsPage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <RentalsOnly />
            </main>
            <Footer />
        </>
    )
}

export default RentalsPage;