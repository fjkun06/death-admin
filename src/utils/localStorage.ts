export interface User {
  user: string;
  passwort: string;
  token: string;
  clients?: Client[];
  doctors?: Client[];
}

// export interface DoctorClient extends Client {
//     name: string;
// }
// export interface AmtClient extends Client {
//     name: string;
// }

export interface Client { 
geschlecht: string;
  uhrzeit: string;
  datum: string;
  id: string;
  name: string;

}

export const data = [
    {
        user: "sofrzone1",
        passwort: "Madhausse31",
        token: "ARZ1A2B3",
        clients: [
            {
                id: "A1B2C3D4",
                name: "Anna Müller",
                datum: "2024-05-01",
                uhrzeit: "10:30",
                geschlecht: "weiblich"
            },
            {
                id: "E5F6G7H8",
                name: "Max Mustermann",
                datum: "2024-05-02",
                uhrzeit: "11:00",
                geschlecht: "männlich"
            },
            {
                id: "I9J0K1L2",
                name: "Julia Schmidt",
                datum: "2024-05-03",
                uhrzeit: "09:45",
                geschlecht: "weiblich"
            },
            {
                id: "M3N4O5P6",
                name: "Lukas Bauer",
                datum: "2024-05-04",
                uhrzeit: "13:15",
                geschlecht: "männlich"
            },
            {
                id: "Q7R8S9T0",
                name: "Mia Wagner",
                datum: "2024-05-05",
                uhrzeit: "14:00",
                geschlecht: "weiblich"
            }
        ]
    },
    {
        user: "sofrzone2",
        passwort: "StrongPass42",
        token: "STA4D5E6",
        doctors: [
            {
                id: "U1V2W3X4",
                name: "Leon Fischer",
                datum: "2024-05-06",
                uhrzeit: "15:30",
                geschlecht: "männlich"
            },
            {
                id: "Y5Z6A7B8",
                name: "Anna Schmidt",
                datum: "2024-05-07",
                uhrzeit: "09:00",
                geschlecht: "weiblich"
            },
            {
                id: "C9D0E1F2",
                name: "Peter Meier",
                datum: "2024-05-08",
                uhrzeit: "10:15",
                geschlecht: "männlich"
            },
            {
                id: "G3H4I5J6",
                name: "Laura Klein",
                datum: "2024-05-09",
                uhrzeit: "11:45",
                geschlecht: "weiblich"
            },
            {
                id: "K7L8M9N0",
                name: "Tom Schneider",
                datum: "2024-05-10",
                uhrzeit: "12:30",
                geschlecht: "männlich"
            }
        ]
    },
    {
        user: "sofrzone3",
        passwort: "UniquePwd53",
        token: "GES7F8G9",
        doctors: [
            {
                id: "O1P2Q3R4",
                name: "Emma Weber",
                datum: "2024-05-11",
                uhrzeit: "08:45",
                geschlecht: "weiblich"
            },
            {
                id: "S5T6U7V8",
                name: "Markus Braun",
                datum: "2024-05-12",
                uhrzeit: "09:30",
                geschlecht: "männlich"
            },
            {
                id: "W9X0Y1Z2",
                name: "Sara Weiß",
                datum: "2024-05-13",
                uhrzeit: "10:45",
                geschlecht: "weiblich"
            },
            {
                id: "A3B4C5D6",
                name: "Jan Krüger",
                datum: "2024-05-14",
                uhrzeit: "11:15",
                geschlecht: "männlich"
            },
            {
                id: "E7F8G9H0",
                name: "Nina Hofmann",
                datum: "2024-05-15",
                uhrzeit: "12:00",
                geschlecht: "weiblich"
            }
        ]
    },
    {
        user: "sofrzone4",
        passwort: "PassWord64",
        token: "ARZA1B2C",
        clients: [
            {
                id: "I1J2K3L4",
                name: "Alexandra Becker",
                datum: "2024-05-16",
                uhrzeit: "08:30",
                geschlecht: "weiblich"
            },
            {
                id: "M5N6O7P8",
                name: "Philipp Bauer",
                datum: "2024-05-17",
                uhrzeit: "09:45",
                geschlecht: "männlich"
            },
            {
                id: "Q9R0S1T2",
                name: "Sophia Richter",
                datum: "2024-05-18",
                uhrzeit: "10:00",
                geschlecht: "weiblich"
            },
            {
                id: "U3V4W5X6",
                name: "Henrik Hartmann",
                datum: "2024-05-19",
                uhrzeit: "11:30",
                geschlecht: "männlich"
            },
            {
                id: "Y7Z8A9B0",
                name: "Isabel Zimmermann",
                datum: "2024-05-20",
                uhrzeit: "12:45",
                geschlecht: "weiblich"
            }
        ]
    },
    {
        user: "sofrzone5",
        passwort: "SafeKey75",
        token: "STAD3E4F",
        doctors: [
            {
                id: "C1D2E3F4",
                name: "Oliver Schmitz",
                datum: "2024-05-21",
                uhrzeit: "09:15",
                geschlecht: "männlich"
            },
            {
                id: "G5H6I7J8",
                name: "Marie Neumann",
                datum: "2024-05-22",
                uhrzeit: "10:30",
                geschlecht: "weiblich"
            },
            {
                id: "K9L0M1N2",
                name: "Daniel Koch",
                datum: "2024-05-23",
                uhrzeit: "11:00",
                geschlecht: "männlich"
            },
            {
                id: "O3P4Q5R6",
                name: "Clara Seidel",
                datum: "2024-05-24",
                uhrzeit: "12:15",
                geschlecht: "weiblich"
            },
            {
                id: "S7T8U9V0",
                name: "Hannah Wolf",
                datum: "2024-05-25",
                uhrzeit: "13:00",
                geschlecht: "weiblich"
            }
        ]
    },
    {
        user: "sofrzone6",
        passwort: "SecurePwd86",
        token: "GES5G6H7",
        doctors: [
            {
                id: "W1X2Y3Z4",
                name: "Jonas Schäfer",
                datum: "2024-05-26",
                uhrzeit: "08:00",
                geschlecht: "männlich"
            },
            {
                id: "A5B6C7D8",
                name: "Lea Krause",
                datum: "2024-05-27",
                uhrzeit: "09:30",
                geschlecht: "weiblich"
            },
            {
                id: "E9F0G1H2",
                name: "Finn Engel",
                datum: "2024-05-28",
                uhrzeit: "10:45",
                geschlecht: "männlich"
            },
            {
                id: "I3J4K5L6",
                name: "Lena Fuchs",
                datum: "2024-05-29",
                uhrzeit: "11:15",
                geschlecht: "weiblich"
            },
            {
                id: "M7N8O9P0",
                name: "Paul Schäfer",
                datum: "2024-05-30",
                uhrzeit: "12:00",
                geschlecht: "männlich"
            }
        ]
    },
    {
        user: "sofrzone7",
        passwort: "MySecret97",
        token: "ARZ8I9J0",
        clients: [
            {
                id: "Q1R2S3T4",
                name: "Sophie Lang",
                datum: "2024-05-31",
                uhrzeit: "09:00",
                geschlecht: "weiblich"
            },
            {
                id: "U5V6W7X8",
                name: "Nils Becker",
                datum: "2024-06-01",
                uhrzeit: "10:30",
                geschlecht: "männlich"
            },
            {
                id: "Y9Z0A1B2",
                name: "Lara König",
                datum: "2024-06-02",
                uhrzeit: "11:45",
                geschlecht: "weiblich"
            },
            {
                id: "C3D4E5F6",
                name: "David Wagner",
                datum: "2024-06-03",
                uhrzeit: "13:00",
                geschlecht: "männlich"
            },
            {
                id: "G7H8I9J0",
                name: "Ella Hoffmann",
                datum: "2024-06-04",
                uhrzeit: "14:15",
                geschlecht: "weiblich"
            }
        ]
    }
];


export function addInitialUserToLocalStorage() {
  /***Saving users to localstorage */
  const users = localStorage.getItem("users");
  if (users === null) {
    localStorage.setItem("users", JSON.stringify(data));
  }
}


/**Log user out in localStorage */
export function endSession() {
  localStorage.removeItem("currentUser");
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

    return { isInDatabase, username: targetUser[0]?.user };
  }
}
