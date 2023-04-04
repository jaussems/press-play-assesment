import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.scss";
import NavBar from "@/components/NavBar";
import Article from "@/components/Article";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import { ArticleTags } from "@/shared/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar></NavBar>
        <Search></Search>
        {/* <div>News</div> */}
        {/* <div className={styles.card_section}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div> */}
        <Article
          header={"Het samenwerkingsverband"}
          src={require("../assets/images/article_1_photo.jpg")}
          paragraph={
            "Vertegenwoordigers van een groot aantal vo-scholen hebben samen met de vier Rotterdamse hbo-instellingen een intentieverklaring getekend om intensiever samen te werken op een zestal thema’s die er samen voor zorgen dat de aansluiting van vo naar hbo goed verloopt."
          }
          alt={"Picture of a famous house in Rotterdam"}
          class={"dark"}
          isLightBtn={true}
          buttonText={"Lees meer"}
        ></Article>
        <Article
          header={"Wat kost studeren?"}
          src={require("../assets/images/article_2_photo.jpg")}
          alt={"Picture of a book"}
          paragraph={
            "Studeren is een geweldige investering in jouw toekomst. Ontdek hier hoe studeren ook voor jou betaalbaar is. Met een goed plan begin je straks voorbereid aan je studietijd!"
          }
          class={"light"}
          isLightBtn={false}
          buttonText={"Lees artikel"}
          tags={ArticleTags.ArticleOneTags}
        ></Article>

        {/* <div>Themes</div>
        <div>Materials</div>
        <Article></Article>
        <Footer></Footer> */}
      </main>
    </>
  );
}
