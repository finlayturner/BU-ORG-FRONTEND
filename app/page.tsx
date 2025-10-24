import Navbar from "./navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 text-white font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-lg">Welcome to your account dashboard. Here are some suggestions:</p>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Check your recent activity.
          </li>
          <li className="tracking-[-.01em]">
            Update your profile settings.
          </li>
          <li className="tracking-[-.01em]">
            Explore new features.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#"
          >
            Explore Features
          </a>
          <a
            className="rounded-full border border-solid border-black/8 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-700 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="#"
          >
            Settings
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Help
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          Feedback
        </a>
      </footer>
    </div>
    </>
  );
}
