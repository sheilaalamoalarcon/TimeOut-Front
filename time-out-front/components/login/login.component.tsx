import styles from "./login.module.css";

async function handleRegister(e: any) {
  e.preventDefault();
  const data = {
    email: e.target.email,
    username: e.target.username,
    password: e.target.password,
    repeatPassword: e.target.repeatPassword,
  };

  await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("submitted");
}

export default function Login() {
  return (
    <div className={styles["container"]}>
      <form onClick={handleRegister} method="POST">
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Repeat Password" />
        <button className="btn-unstyled" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
