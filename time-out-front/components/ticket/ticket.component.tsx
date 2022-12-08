import styles from "./ticket.module.scss";

export type TicketType = {
  workSection: string;
  title: string;
  description: string;
  timeSpend: string;
};

const modalData = {
  workSection: "Añade el stack de trabajo",
  title: "Añade el nombre del error o su id",
  description: "Añade la descripción del error",
  timeSpend: "Añade tu tiempo invertido",
};

function handleSubmit(e: any) {
  e.preventDefault();
  const data = {
    workSection: e.target.workSection.value,
    title: e.target.title.value,
    description: e.target.description.value,
    timeSpend: parseInt(e.target.timeSpend.value),
  };

  console.log("submitted");
}

function validations() {
  return {
    workSection: {
      required: {
        value: true,
        message: "El stack de trabajo es requerido",
      },
    },
    title: {
      required: {
        value: true,
        message: "El título es requerido",
      },
    },
    description: {
      required: {
        value: true,
        message: "La descripción es requerida",
      },
    },
    timeSpend: {
      required: {
        value: true,
        message: "El tiempo invertido es requerido",
      },
    },
  };
}

export default function Ticket() {
  return (
    <div className={styles["container"]}>
      <form action="POST">
        <input
          onSelect={validations}
          type="text"
          placeholder={modalData.workSection}
        ></input>
        <input type="text" placeholder={modalData.title}></input>
        <input type="text" placeholder={modalData.description}></input>
        <input type="time" placeholder={modalData.timeSpend}></input>
        <button className="btn-unstyled" type="submit">
          Añade tu Ticket
        </button>
      </form>
    </div>
  );
}
