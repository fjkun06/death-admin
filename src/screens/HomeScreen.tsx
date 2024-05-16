"use client";
import { classNameGenerator } from "@/utils";
import { authenticateUser } from "@/utils/localStorage";
import React, { useState } from "react";

const HomeScreen = () => {
  const [user, setUser] = useState("");
  const [passwort, setPasswort] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    // console.log(e.target.value);
  };
  const handlePasswort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.target.value);
    // console.log(e.target.value);
  };
  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    // console.log(e.target.value);
  };

  const data = { user, passwort, token };

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /**Authenticating user */
    const auth = authenticateUser(data);
    console.log(auth);

    /**Setting error and loading states */
    setError(!auth?.isInDatabase as boolean);
    setLoading(auth?.isInDatabase as boolean);

    /**Resetting all fields if user is authenticated */
    // (auth?.isInDatabase as boolean) && resetAllFields();
  };
  const resetAllFields = () => {
    setUser("");
    setPasswort("");
    setToken("");
  };
  return (
    <main className={classNameGenerator("home")}>
      <h1>Digitales Todesbescheinigung App</h1>
      <div className={classNameGenerator("home__login")}>
        <h2>Bitte melden Sie sich an</h2>
        <form onSubmit={login}>
          <span>
            <label htmlFor="user">Benutzername:</label>
            <input
              disabled={loading}
              type="text"
              name=""
              id="user"
              onChange={handleUser}
              value={user}
              required
            />
          </span>
          <span>
            <label htmlFor="password">Passwort:</label>
            <input
              disabled={loading}
              type="password"
              name=""
              id="password"
              onChange={handlePasswort}
              value={passwort}
              required
            />
          </span>
          <span>
            <label htmlFor="user">Token:</label>
            <input
              disabled={loading}
              type="text"
              name=""
              id="token"
              onChange={handleToken}
              value={token}
              required
            />
          </span>
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
