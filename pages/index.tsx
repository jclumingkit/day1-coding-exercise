import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";

import { FoodList } from "../data/foodData";

type Food = {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const foodData = FoodList;
  return {
    props: {
      foodData,
    },
  };
};

const Home: NextPage = ({ foodData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Week 1 Day 1 Coding Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {foodData.map((food: Food) => {
            return (
              <li key={food.id}>
                <Image
                  priority
                  src={food.image}
                  // className=""
                  height={144}
                  width={144}
                  alt={food.name}
                />
                <br />
                {food.name}
                <br />
                {food.description}
                <br />
                {food.rating}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Home;
