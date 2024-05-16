interface User {
  user: string;
  passwort: string;
  token: string;
}

export const data = [
  {
    user: "sofrzone1",
    passwort: "Madhausse31",
    token: "ARZ1A2B3",
  },
  {
    user: "sofrzone2",
    passwort: "StrongPass42",
    token: "STA4D5E6",
  },
  {
    user: "sofrzone3",
    passwort: "UniquePwd53",
    token: "GES7F8G9",
  },
  {
    user: "sofrzone4",
    passwort: "PassWord64",
    token: "ARZA1B2C",
  },
  {
    user: "sofrzone5",
    passwort: "SafeKey75",
    token: "STAD3E4F",
  },
  {
    user: "sofrzone6",
    passwort: "SecurePwd86",
    token: "GES5G6H7",
  },
  {
    user: "sofrzone7",
    passwort: "MySecret97",
    token: "ARZ8I9J0",
  },
  {
    user: "sofrzone8",
    passwort: "HiddenKey108",
    token: "STAA2B3D",
  },
  {
    user: "sofrzone9",
    passwort: "LockKey219",
    token: "GESB4C5E",
  },
  {
    user: "sofrzone10",
    passwort: "UniqueKey310",
    token: "ARZ6F7G8",
  },
];
export function addInitialUserToLocalStorage() {
  /***Saving users to localstorage */
  const users = localStorage.getItem("users");
  if (users === null) {
    localStorage.setItem("users", JSON.stringify(data));
  }
}

export function authenticateUser({ user, passwort, token }: User) {
  const users = localStorage.getItem("users");
  if (users !== null) {
    const targetUser = JSON.parse(users as string).filter(
      (el: User) =>
        el.user === user && el.passwort === passwort && el.token === token
    );
    /****Creating user session after succesful authetication */
    targetUser.length > 0 &&
      localStorage.setItem("currentUser", JSON.stringify(targetUser[0]));

    const isInDatabase = targetUser.length > 0;

    return { isInDatabase, username: targetUser[0] };
  }
}
