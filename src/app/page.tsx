import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTab } from "@/components/products/tab";
import {Suspense} from "react"

const Page = () => {
  return (
    <main className="w-full max-w-4xl mx-auto py-12">
        <Header/>
        <div className="mx-3 mt-8">
            <Suspense fallback={<TabsSkeleton/>}>
              <ProductsTab/>
            </Suspense>
        </div>
        <Footer/>
    </main>
  );
}

export default Page;