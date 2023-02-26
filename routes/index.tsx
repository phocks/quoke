import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="h-screen w-screen flex justify-center items-center">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-12 w-12" src="/logo.svg" alt="ChitChat Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-black">Quoke</div>
            <p class="text-slate-500">A work in progress!</p>
          </div>
        </div>
        {/* <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} /> */}
      </div>
    </>
  );
}
