import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameInput(event: any) {
    event.preventDefault();
    console.log(event);
    setUsername(event.target.value);
  }

  function passworInput(event: any) {
    event.preventDefault();
    console.log(event);
    setPassword(event.target.value);
  }

  function submitForm(event: any) {
    event.preventDefault();
    console.log("submit...");

    const url = "https://api.phocks.org/v1/user/login";

    // JSON data to send in the request body
    const data = {
      name: "phocks",
      password: "password",
    };

    // Configure the request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), //'{"username": "phocks1", "password": "a secure password"}',
    };

    // Send the request
    fetch(url, options).then((response) => console.log(response));
  }

  return (
    <form onSubmit={submitForm}>
      <input
        {...props}
        onInput={usernameInput}
        disabled={!IS_BROWSER || props.disabled}
        class={`block my-4 px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />

      <input
        {...props}
        onInput={passworInput}
        type={"password"}
        disabled={!IS_BROWSER || props.disabled}
        class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
          props.class ?? ""
        }`}
      />

      {/* <button type="submit">Go</button> */}

      <button
        type="submit"
        class="block px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400"
      >
        ok{" "}
      </button>
    </form>
  );
}
