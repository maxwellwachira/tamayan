import { FeaturesCards } from "@/components/Features";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Hero from "@/components/hero";
import HomePageHero from "@/components/hero2";
import HeroImageBackground from "@/components/heroImageBackground";
import PropertyType from "@/components/propertyType";
import { SearchBar } from "@/components/searchbar";
import Stats from "@/components/stats";
import Head from "next/head";

const HomePage = () => {

  return (
    <>
      <Head>
        <title>Tamayan Properties | Home Page</title>
        <meta name="description" content="Tamayan Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePageHero />
      <Stats />
      <PropertyType />
      <FeaturesCards />
      <Hero />
      <Footer />
    </>
  )
}

export default HomePage;