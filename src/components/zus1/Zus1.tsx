import { useSTORE } from "./store";

export function Zus1() {
  const storeProp = useSTORE((state) => state.myName);

  return <div>Привіт, {storeProp}!</div>;
}
