"use client";
import { classNameGenerator } from "@/utils";
import React, { useState } from "react";

const HomeScreen = () => {
  const [user, setUser] = useState("");
  const [passwort, setPasswort] = useState("");
  const [token, setToken] = useState("");

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.target.value);
    console.log(e.target.value);
  };
  const handleToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
    console.log(e.target.value);
  };

  const data = {user,passwort,token};
  const resetAllFields = () => {
    console.log(data);
    setUser("");
    setPasswort("");
    setToken("");
  };
  return (
    <main className={classNameGenerator("home")}>
      <h1>Digitales Todesbescheinigung App</h1>
      <div className={classNameGenerator("home__login")}>
        <h2>Bitte melden Sie sich an</h2>
        <form action="">
          <span>
            <label htmlFor="user">Benutzername:</label>
            <input
              type="text"
              name=""
              id="user"
              onChange={handleUser}
              value={user}
            />
          </span>
          <span>
            <label htmlFor="password">Passwort:</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={handlePasswort}
              value={passwort}
            />
          </span>
          <span>
            <label htmlFor="user">Token:</label>
            <input
              type="text"
              name=""
              id="token"
              onChange={handleToken}
              value={token}
            />
          </span>
          <button type="button" onClick={resetAllFields}>Anmelden</button>
        </form>
      </div>
    </main>
  );
};

export default HomeScreen;
