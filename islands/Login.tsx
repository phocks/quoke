import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameInput(event: any) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  function passworInput(event: any) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  async function submitForm(event: any) {
    event.preventDefault();
    console.log("submit...");

    const url = "https://api.phocks.org/v1/user/login";

    // JSON data to send in the request body
    const data = {
      username: username,
      password: password,
    };

    console.log(data);

    // Configure the request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      Accept: "application/json",
      body: JSON.stringify(data),
    };

    // Send the request
    const result = await fetch(url, options);
    const json = await result.json();
    console.log(json);
  }

  return (
    <form onSubmit={submitForm}>
      <input
        value={username}
        onInput={usernameInput}
        disabled={!IS_BROWSER || props.disabled}
        class={`block my-3 px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />

      <input
        value={password}
        onInput={passworInput}
        type={"password"}
        disabled={!IS_BROWSER || props.disabled}
        class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />

      <button
        type="submit"
        class="block my-3 px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400"
      >
        Login
      </button>
    </form>
  );
}
