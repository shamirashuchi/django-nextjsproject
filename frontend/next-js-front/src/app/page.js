import Header from "@/components/share/header";
import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/api/crud/crudproject");
  const data = await response.json();

  console.log('data  :>> ', data);

  return (
    <div>
      <Header></Header>
      Hello
      {/* Render your data here */}
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
