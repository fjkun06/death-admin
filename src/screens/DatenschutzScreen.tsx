import { classNameGenerator } from "@/utils";
import React from "react";

const DatenschutzScreen = () => {
  return (
    <main className={classNameGenerator("datenschutz")}>
      <h1>Datenschutzerklärung</h1>
      <section>
        <h2>Datenschutz</h2>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
      </section>
      <section>
        <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Die Nutzung unserer Website ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
        </p>
      </section>
      <section>
        <h2>SSL-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die
          Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von ... wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </section>
      <section>
        <h2>Auskunft, Löschung, Sperrung</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
          und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema personenbezogene Daten können Sie sich jederzeit unter der
          im Impressum angegebenen Adresse an uns wenden.
        </p>
      </section>
    </main>
  );
};

export default DatenschutzScreen;
