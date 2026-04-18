import { useSTORE } from "../zus1/store";

export function Zus2() {
  const storeProp = useSTORE((state) => state.myName);

  return <div>Привіт, {storeProp}!</div>;
}
