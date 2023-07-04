import { getImageUrl } from "./utils";

interface Attributs {
  imageTag: {
    imageUrl: string;
    alt_text: string;
    width: number;
    height: number;
  };
  personDesc: {
    profession: string;
    awards: string[];
    discovers: string;
  };
}

export function ScientistProfile({ imageTag, personDesc }: Attributs) {
  return (
    <section className="profile">
      <h2>Maria Skłodowska-Curie</h2>
      <img
        className="avatar"
        src={getImageUrl(imageTag.imageUrl)}
        alt={imageTag.alt_text}
        width={imageTag.width}
        height={imageTag.height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {personDesc.profession}
        </li>
        <li>
          <b>Awards: {personDesc.awards.length} </b>(
          {personDesc.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {personDesc.discovers}
        </li>
      </ul>
    </section>
  );
}

export default function GalleryEx() {
  const MariaCurie = {
    imageTag: {
      imageUrl: getImageUrl("szV5sdG"),
      alt_text: "Maria Skłodowska-Curie",
      width: 70,
      height: 70,
    },
    personDesc: {
      profession: "physicist and chemist",
      awards: [
        "Nobel prize in physics",
        "Nobel Prize in chemistry",
        "Davy Medal",
        "Matteucci Medam",
      ],
      discovers: "polonium (element)",
    },
  };
  const KatsukoS = {
    imageTag: {
      imageUrl: getImageUrl("YfeOqp2"),
      alt_text: "Katsuko Saruhashi",
      width: 70,
      height: 70,
    },
    personDesc: {
      profession: "geochemist",
      awards: [
        "Nobel prize in physics",
        "Nobel Prize in chemistry",
        "Davy Medal",
        "Matteucci Medam",
      ],
      discovers: "polonium (element)",
    },
  };

  return (
    <div>
      <h1>Notable Scientists</h1>
      <ScientistProfile
        imageTag={MariaCurie.imageTag}
        personDesc={MariaCurie.personDesc}
      />
      <ScientistProfile
        imageTag={KatsukoS.imageTag}
        personDesc={KatsukoS.personDesc}
      />
    </div>
  );
}
