import Head from "next/head";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Subscribe from "@/components/common/subscribe";
import FeaturedProperties from "@/components/hero";
import HomePageHero from "@/components/hero2";
import PropertyType from "@/components/propertyType";
import Stats from "@/components/stats";
import { FeaturesCards } from "@/components/Features";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Tamayan Properties | Home Page</title>
        <meta name="description" content="Tamayan Properties Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePageHero />
      <Stats />
      <PropertyType />
      <FeaturesCards />
      <FeaturedProperties />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomePage;