"use client";
import { classNameGenerator } from "@/utils";
import { User } from "@/utils/localStorage";
import React from "react";
function getData() {
  const res = localStorage.getItem("currentUser");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res === null) {
    throw new Error("Failed to fetch data");
  }

  return JSON.parse(res);
}

const Projects = ({ params }: { params: { user: string } }) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>();
  React.useEffect(() => {
    setCurrentUser(getData());
  }, []);

  console.log(currentUser);

  return (
    <main className={classNameGenerator("nutzer")}>
      {params.user}
      <div>
        <span>{currentUser?.user}</span>
        <span>{currentUser?.token}</span>
      </div>
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
