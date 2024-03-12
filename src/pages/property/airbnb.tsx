import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import AirbnbsOnly from "@/components/property/airbnb";

import { NextPage } from "next";
import Head from "next/head";


const AirbnbsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Airbnbs</title>
                <meta name="description" content="Tamayan Airbnbs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
               <AirbnbsOnly />
            </main>
            <Footer />
        </>
    )
}

export default AirbnbsPage;