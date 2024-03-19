import { Seo } from "@/ui/components/seo/seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Seo title="My project" description="Descritpion..."/>
      <h1>Hello world</h1>
    </>
  );
}
