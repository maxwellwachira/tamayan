import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ShowroomOnly from "@/components/property/rental/showroom";
import Head from "next/head";


const ShowroomsPage = () => {
    return (
        <>
            <Head>
                <title>Tamayan Properties | Tamayan Properties - All Rental Showrooms</title>
                <meta name="description" content="Tamayan Properties - All Rental Showrooms" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ShowroomOnly />
            <Footer />
        </>
    )
}

export default ShowroomsPage;