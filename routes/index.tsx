import { Head } from "$fresh/runtime.ts";
import Login from "../islands/Login.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quoke</title>
      </Head>
      <div class="h-screen w-screen flex justify-center items-center">
        <div class="">
          <div>
            <Login />
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
