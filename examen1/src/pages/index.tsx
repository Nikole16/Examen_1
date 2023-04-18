import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/root/components/header/Header";
import MyPhoto from "@/root/components/myPhoto/MyPhoto";
import Information from "../root/components/personalInformation/information";
import CallToAction from "@/root/components/callToAction/CallToAction";
import Footer from "@/root/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header></Header>
      <MyPhoto></MyPhoto>
      <CallToAction></CallToAction>
      <Information></Information>
      <Footer></Footer>
    </div>
  );
}
