interface avaProps {
  person: {
    name: string;
  };
  size: number;
}

export function Avatar({ person, size }: avaProps) {
  const imglink = "https://i.imgur.com/7vQD0fPs.jpg";
  const imgDesc = person.name;
  return (
    <div>
      <img
        className="avatar"
        referrerPolicy="no-referrer"
        src={imglink}
        alt={imgDesc}
        width={size}
      />
      <p> That's {imgDesc} right there</p>
    </div>
  );
}

export function DisplayDate() {
  const today = new Date();
  return <h5>Today is {formatDate(today)}</h5>;
}
function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
