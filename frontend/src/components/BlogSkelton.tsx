import { Appbar } from "./Appbar"

export const BLogSkeleton = () => {
    return<div>
    <Appbar />
    <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="h-6 bg-gray-200 rounded-full w-96 mb-4"></div>
                <div className="text-slate-400 pt-2">
                   <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="pt-4">
                   <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                   <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                   <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="col-span-4 ml-3">
                <div className="text-md text-slate-600">
                    <div className="h-2.5 bg-gray-200 rounded-full w-24 mb-4"></div>
                </div>
                <div className="flex pt-4">
                    <div className="pr-2 flex flex-col justify-center">
                       <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                        <div className="text-lg font-bold">
                            <div className="h-3 bg-gray-200 rounded-full w-24 mb-4"></div>
                        </div>
                        <div>
                            <div className="h-2.5 bg-gray-200 rounded-full w-72 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full w-72 mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

{/* <div role="status" class="max-w-sm animate-pulse">
//     <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
//     <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
//     <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
//     <span class="sr-only">Loading...</span>
// </div> */}