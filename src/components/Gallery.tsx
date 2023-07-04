import { ReactNode } from "react";
import { Avatar, DisplayDate } from "./Avatar";

export function Profile() {
  return (
    <>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        referrerPolicy="no-referrer"
        alt="Katherine Johnson"
      />
      <Avatar
        person={{ name: "Lin Lanying 45", imageId: "1bzer23" }} //passing props to Avatar component
        size={100}
      />

      <Card>
        <p>This is the card component having a component as props</p>
        <Avatar
          person={{ name: "Lin Lanying", imageId: "eazeaz" }}
          size={250}
        />
        {/* passer un composant en tant que prop*/}
      </Card>
    </>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      person={}
      <DisplayDate />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </section>
  );
}
interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
