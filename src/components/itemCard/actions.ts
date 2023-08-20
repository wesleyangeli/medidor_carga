interface dataPropsI {
  largura: number;
  espessura: number;
  comprimento: number;
  quantidade: number;
}

export const getVolume = ({
  largura,
  espessura,
  comprimento,
  quantidade,
}: dataPropsI): string => {
  const toMetro = (value: number) => {
    return value / 100;
  };

  const volumeNumber =
    toMetro(largura) * toMetro(espessura) * comprimento * quantidade;

  const volume = volumeNumber.toFixed(4);

  return volume;
};
