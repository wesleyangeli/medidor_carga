import { v4 as uuid4 } from "uuid";

export interface ObjectPropsI {
  key: string;
  largura: number;
  espessura: number;
  comprimento: number;
  quantidade: number;
  descricao?: string | null | undefined;
}

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomEvenNumber = (min: number, max: number) => {
  let num = getRandomNumber(min, max);
  while (num % 2 !== 0) {
    num = getRandomNumber(min, max);
  }
  return num;
};

export const generateRandomObjects = (objectLength: number): ObjectPropsI[] => {
  const objects = [];
  const usedDimensions = new Set();

  const comprimentoValues = [];
  for (let i = 2; i <= 10; i += 0.5) {
    comprimentoValues.push(i);
  }

  while (objects.length < objectLength) {
    const largura = getRandomEvenNumber(6, 28);
    const espessura = getRandomNumber(3, 15);
    const dimensionsString = `${largura}-${espessura}`;

    if (!usedDimensions.has(dimensionsString) && espessura <= largura) {
      usedDimensions.add(dimensionsString);

      const comprimentoIndex = getRandomNumber(0, comprimentoValues.length - 1);
      const comprimento = comprimentoValues[comprimentoIndex];

      const objeto: ObjectPropsI = {
        key: uuid4(),
        largura,
        espessura,
        comprimento,
        quantidade: getRandomNumber(100, 1000),
      };

      objects.push(objeto);
    }
  }
  console.log(objects);
  return objects;
};
