"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main style={{ gap: "2rem" }}>
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <button
        type="button"
        className="forofor"
        style={{ alignSelf: "auto" }}
        onClick={() => router.push(`/`)}
      >
        Zurück zur Startseite
      </button>
    </main>
  );
}
