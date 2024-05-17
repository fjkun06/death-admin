import { classNameGenerator } from "@/utils";
import Image from "next/image";
import React from "react";
interface UserModal {
  toggleModal: () => void;
  isGesund: boolean;
  isArzt: boolean;
}
const UserModal: React.FC<UserModal> = ({ toggleModal, isGesund, isArzt }) => {
  return (
    <div className={classNameGenerator(`nutzer__modal`)}>
      <section>
        <div className="button-row--top">
          <button type="button" onClick={toggleModal}>
            Zurück
          </button>
          <button type="button">Abrufen</button>
        </div>
        <div className="image--container">
          {isArzt && (
            <Image
              src="/Picture1.webp"
              width={630}
              height={905}
              alt="smaple Form"
            />
          )}
          <Image
            src="/Picture2.webp"
            width={630}
            height={905}
            alt="smaple Form"
          />
        </div>
        <div className="button-row--bottom">
          {isGesund ? (
            <>
              <button type="button" onClick={toggleModal}>
                Ablehnen
              </button>
              <button type="button">Genehmigen</button>
            </>
          ) : (
            <>
              <button type="button">Speichern</button>
              <button type="button" onClick={toggleModal}>
                Abbrechen
              </button>
              <button type="button">Absenden</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default UserModal;
