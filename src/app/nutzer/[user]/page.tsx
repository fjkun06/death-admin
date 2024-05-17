"use client";
import { useRouter } from "next/navigation";
import { classNameGenerator } from "@/utils";
import accountTypeChecker from "@/utils/accountTypeChecker";
import { endSession, User } from "@/utils/localStorage";
import React from "react";

const Projects = ({ params: { user } }: { params: { user: string } }) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();

  React.useEffect(() => {
    //getting user data from local storage
    function getData() {
      const res = JSON.parse(localStorage.getItem("currentUser") as string);
      console.log(res);

      if (res === null || res.user !== user) {
        router.push(`/`);
      } else {
        setLoading(false);
        return res;
      }
    }
    setCurrentUser(getData());
  }, [router, user]);

  /****Account type variable */
  const accountType =
    currentUser && accountTypeChecker(currentUser?.token as string);
  const loopAccount =
    accountType && accountType === "Ärzte" ? "clients" : "doctors";

  /**Logout handler */
  const logOut = () => {
    endSession();
    router.push("/");
  };

  /***Loasding screen to show during authentication */
  if (loading)
    return (
      <main>
        <h1>Ladend...</h1>
      </main>
    );

  /***If user is logged in */
  return (
    <main className={classNameGenerator(`nutzer__${accountType}`)}>
      <header className="">
        <div>
          <h1>Herzlich willkommen, {user}</h1>
          {currentUser && <span>Kontoklasse: {accountType}</span>}
        </div>

        <button type="button" className="logout" onClick={logOut}>
          Abmelden
        </button>
      </header>
      <div className={classNameGenerator("nutzer__neu")}>
        <span>
          Hier drücken, um neue{" "}
          {accountType === "Ärzte" ? "Patienten " : "Ärzte "}
          hinzuzufügen
        </span>
        <button type="button" className="new" onClick={logOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          <span>Neu {accountType === "Ärzte" ? "Patient " : "Arzt "}</span>
        </button>
      </div>

      <table id="customer">
        <thead>
          <tr>
            <th>{accountType === "Ärzte" ? "Patientname" : "Arztname"}</th>
            <th>PatientId</th>
            <th>Datum</th>
            <th>Uhrzeit</th>
            <th>Geschlecht</th>
          </tr>
        </thead>
        <tbody>
          {currentUser &&
            currentUser?.[loopAccount]?.map((element: any) => (
              <tr key={element.name}>
                <td>{element.name} </td>
                <td>{element.id} </td>
                <td>{element.datum} </td>
                <td>{element.uhrzeit} </td>
                <td>{element.geschlecht} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Projects;
