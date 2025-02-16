import { Skeleton } from "@/components/ui/skeleton"

export const TabsSkeleton = () =>{
    return(
        <div className="p-4 mt-4 gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 6 }, (_, index) => (
                <div className="flex flex-col items-center space-y-4" key={index}>
                    <Skeleton className="h-40 w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex space-x-4">
                        <Skeleton className="h-8 w-20 rounded" />
                        <Skeleton className="h-8 w-20 rounded" />
                    </div>
                </div>
            ))}
        </div>
    );
}