import { auth } from "../firebase";

export default function Home() {
  const logout = () => {
    console.log("done");
    auth.signOut();
  };
  return (
    <h1>
      <button onClick={logout}>Log out</button>
    </h1>
  );
}
