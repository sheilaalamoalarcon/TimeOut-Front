import styles from "./ticket.module.scss";

async function handleCreateTicket() {
  const input = document.getElementById("input") as HTMLInputElement;
  const data = {
    form: input.value,
  };

  await fetch("http://localhost:3000/api/create-ticket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("submitted");
}

const modalData = {
  workSection: "Añade el stack de trabajo",
  title: "Añade el nombre del error o su id",
  description: "Añade la descripción del error",
  timeSpend: "Añade tu tiempo invertido",
};

export default function Ticket() {
  return (
    <div className={styles["container"]}>
      <form>
        <input
          id="input"
          minLength={1}
          maxLength={20}
          type="text"
          placeholder={modalData.workSection}
        ></input>
        <input
          id="input"
          minLength={1}
          maxLength={20}
          type="text"
          placeholder={modalData.title}
        ></input>
        <input
          id="input"
          minLength={1}
          maxLength={50}
          type="text"
          placeholder={modalData.description}
        ></input>
        <input
          id="input"
          minLength={1}
          maxLength={8}
          type="text"
          placeholder={modalData.timeSpend}
        ></input>
        <button
          onClick={handleCreateTicket}
          className="btn-unstyled"
          type="submit"
        >
          Crear Ticket
        </button>
      </form>
    </div>
  );
}
