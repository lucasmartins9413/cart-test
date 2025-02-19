import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import PromoBanner from "@/components/promoBanner";
import SportBanner from "@/components/sportBanner";
import TopHeader from "@/components/topHeader";
import {Suspense} from "react"

const Page = () => {
  return (
    <>
    <TopHeader/>
    <main className="w-full max-w-[1224px] mx-auto py-12 px-5">
        <Header/>
        <SportBanner/>
        <div className="mx-3 mt-8">
            <Suspense fallback={<TabsSkeleton/>}>
              <ProductsTab/>
            </Suspense>
        </div>
        <PromoBanner/>
    </main>
    <Footer/>
    </>
  );
}

export default Page;