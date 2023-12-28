import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="max-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white py-2 px-7  transition-all hover:border-slate-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            InDocs is coming soon !!!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Interact with your <span className="text-slate-600">documents </span>
          easily.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          InDocs allows you to interact with your documents. Simply upload a
          file and start having an intellectual conversations
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      {/* Value proposition */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath: "polygon(67% 20%, 40% 43%, 12% 7%)",
              }}
              className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lq:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/50 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src=""
                    alt=""
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature section */}
      <div className="mx-auto mt-32 mb-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start Interacting with your files in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Interacting with your files has been made easier using Indocs
            </p>
          </div>
        </div>
        {/*Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-slate-600">Step 1</span>
              <span className="text-xl font-semibold">
                Register for a free account
              </span>
              <span className="mt-2 text-zinc-700">
                Start with a new free plan or choose our{" "}
                <Link href="/pricing" className="text-blue-700 underline underline-offset-2">pro plan</Link>
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-slate-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your files
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your files and make it ready to have fun with it.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-slate-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start your Interactions
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple and fast. Have Intimate relationship with your files. Increase your productivity and efficiency without the fear of broken heart. 
              </span>
            </div>
          </li>
        </ol>
        <div className="mx-auto max-w-6xl px-6 lq:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/50 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src=""
                    alt=""
                    width={1419}
                    height={732}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
      </div>
    </>
  );
}
