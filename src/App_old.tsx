import ListGroup from "./components/ListGroup";

function Appsold() {
  let itemsMada = [
    "Antananarivo",
    "Majunga",
    "Tulear",
    "Nosy Be",
    "Foulpointe",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={itemsMada}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default Appsold;
