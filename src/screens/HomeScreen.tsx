"use client";
import { classNameGenerator } from "@/utils";
import { authenticateUser, startSession } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HomeScreen = () => {
  const [user, setUser] = useState("");
  const [passwort, setPasswort] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  /**Value updater functions */
  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handlePasswort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.target.value);
  };
  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const data = { user, passwort, token };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**Authenticating user */
    const auth = authenticateUser(data);
    const isLoggedIn = auth?.isInDatabase as boolean;
    /**Setting error and loading states */
    setError(!isLoggedIn);
    setLoading(isLoggedIn);

    /**Rerouting to user page after auth */
    isLoggedIn && startSession();
    isLoggedIn && router.push(`/users/${auth?.username}`);

    /**Resetting all fields if user is authenticated */
    !isLoggedIn && resetAllFields();
  };
  const resetAllFields = () => {
    setUser("");
    setPasswort("");
    setToken("");
  };

  const inputs = [
    {
      label: "Benutzername",
      id: "user",
      type: "text",
      name: "user",
      value: user,
      onChange: handleUser,
    },
    {
      label: "Passwort",
      id: "password",
      type: "password",
      name: "password",
      value: passwort,
      onChange: handlePasswort,
    },
    {
      label: "Token",
      id: "token",
      type: "text",
      name: "token",
      value: token,
      onChange: handleToken,
    },
  ];
  return (
    <main className={classNameGenerator("home")}>
      <h1>Digitales Todesbescheinigung App</h1>
      <div className={classNameGenerator("home__login")}>
        <h2>Bitte melden Sie sich an</h2>
        <form onSubmit={login}>
          {inputs.map((input) => {
            return (
              <span key={input.id}>
                <label htmlFor={input.id}>{input.label}</label>
                <input
                  disabled={loading}
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  onChange={input.onChange}
                  value={input.value}
                  required
                />
              </span>
            );
          })}

          {error && (
            <span className="error">Überprüfen Sie bitte Ihre Angaben.</span>
          )}
          {loading && <span className="loader">Ladend...</span>}
          <button type="submit" disabled={loading}>
            Anmelden
          </button>
        </form>
      </div>
    </main>
  );
};

export default HomeScreen;
