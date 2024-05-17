import { classNameGenerator } from "@/utils";
import React from "react";

const ImpressumScreen = () => {
  return (
    <main className={classNameGenerator("impressum")}>
      <main style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Impressum</h1>
        <section>
          <h2>Seiteninhaber</h2>
          <p>
            Name: Max Mustermann
            <br />
            Adresse: Musterstraße 123, 12345 Musterstadt, Deutschland
            <br />
            Telefon: +49 (0)123 456789
            <br />
            E-Mail: max.mustermann@example.com
          </p>
        </section>
        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Max Mustermann
            <br />
            Adresse: Musterstraße 123, 12345 Musterstadt, Deutschland
            <br />
            Telefon: +49 (0)123 456789
            <br />
            E-Mail: max.mustermann@example.com
          </p>
        </section>
        <section>
          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
            erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
            Inhalte kann jedoch keine Gewähr übernommen werden. Die Nutzung der
            abrufbaren Inhalte erfolgt auf eigene Gefahr des Nutzers.
          </p>
        </section>
        <section>
          <h2>Externe Links</h2>
          <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter externe
            Links. Diese Websites unterliegen der Haftung der jeweiligen
            Betreiber. Bei Verknüpfung der externen Links waren keine
            Rechtsverstöße erkennbar. Auf die aktuelle und zukünftige Gestaltung
            sowie die Inhalte der verknüpften Seiten hat der Seiteninhaber
            keinerlei Einfluss. Die Einbindung von externen Links bedeutet
            nicht, dass sich der Seiteninhaber die hinter dem Verweis oder Link
            liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der
            externen Links ist für den Seiteninhaber ohne konkrete Hinweise auf
            Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
            werden jedoch derartige externe Links unverzüglich gelöscht.
          </p>
        </section>
        <section>
          <h2>Urheberrecht</h2>
          <p>
            Die durch den Seiteninhaber erstellten Inhalte und Werke auf dieser
            Website unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </main>
    </main>
  );
};

export default ImpressumScreen;
