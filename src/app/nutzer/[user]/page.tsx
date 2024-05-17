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
    // console.log(accountTypeChecker(getData().token));
  }, [router, user]);

  /***Loasding screen to show during authentication */
  if (loading)
    return (
      <main className={classNameGenerator("nutzer")}>
        <h1>Ladend...</h1>
      </main>
    );

  /***If user is logged in */
  return (
    <main className={classNameGenerator("nutzer")}>
      <header className="">
        <div>
          <h1>Herzlich willkommen, {user}</h1>
          {currentUser && (
            <span>
              Kontoklasse: {accountTypeChecker(currentUser?.token as string)}
            </span>
          )}
        </div>

        <button type="button" className='logout' onClick={endSession}>
          Abmelden
        </button>
      </header>

      <table id="customer">
        <thead>
          <tr>
            <th>Patientname</th>
            <th>Datum</th>
            <th>Uhrzeit</th>
            <th>Gender</th>
          </tr>
        </thead>
        {/* <tbody>
      <tr v-for="({ id, species, gender, birthdate, weight, name }, animalIndex) in animalsSortedByName" :key="id" class="hover:bg-gray-200 cursor-pointer" @click="navigateToAnimalPage(id)">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ calculateAgeInYears(new Date(birthdate)) }}</td>
        <td>{{ weight }}</td>
      </tr>
    </tbody> */}
      </table>
    </main>
  );
};

export default Projects;
