"use client";
import { ObjectPropsI } from "@/utils/generateRandomObjects";
import React from "react";

/**
 * @description Função para obter o array do localStorage
 * @returns {ObjectPropsI[]} Array de objetos
 * @returns {[]} Array vazio caso não exista nada no localStorage
 */
export function getArrayFromLocalStorage(): ObjectPropsI[] {
  const savedArrayAsString = localStorage.getItem("arrayRegisters");
  return savedArrayAsString ? JSON.parse(savedArrayAsString) : [];
}

/**
 * @description Função para salvar o array atualizado no localStorage
 * @param array Array de objetos
 * @returns {void}
 * @example saveArrayToLocalStorage([{ key: "new-key", largura: 30, espessura: 8, comprimento: 15, quantidade: 0 }]);
 */
function saveArrayToLocalStorage(array: ObjectPropsI[]) {
  const updatedArrayAsString = JSON.stringify(array);
  localStorage.setItem("arrayRegisters", updatedArrayAsString);
}

/**
 * @description Função para criar um novo objeto no array
 * @param newObject Objeto a ser criado
 * @returns {void}
 * @example createObject({ key: "new-key", largura: 30, espessura: 8, comprimento: 15, quantidade: 0 });
 */
export function createObject(newObject: ObjectPropsI) {
  const currentArray = getArrayFromLocalStorage();
  currentArray.push(newObject);
  saveArrayToLocalStorage(currentArray);
}

function getObjectByKey(key: string): ObjectPropsI | undefined {
  const currentArray = getArrayFromLocalStorage();
  return currentArray.find((item) => item.key === key);
}

/**
 * @description Função para editar um objeto no array pela chave
 * @param key Chave do objeto a ser editado
 * @param editedObject Objeto com as propriedades editadas
 * @returns {void}
 * @example editObjectByKey("new-key", { ...newObject, largura: 40 });
 */
export function editObjectByKey(key: string, editedObject: ObjectPropsI) {
  const currentArray = getArrayFromLocalStorage();
  const indexToEdit = currentArray.findIndex((item) => item.key === key);

  if (indexToEdit !== -1) {
    currentArray[indexToEdit] = editedObject;
    saveArrayToLocalStorage(currentArray);
  }
}

// Função para excluir um objeto do array pela chave
/**
 * @description Função para excluir um objeto do array pela chave
 * @param key Chave do objeto a ser excluído
 * @returns {void}
 * @example deleteObjectByKey("new-key");
 */
export function deleteObjectByKey(key: string) {
  const currentArray = getArrayFromLocalStorage();
  const indexToDelete = currentArray.findIndex((item) => item.key === key);

  if (indexToDelete !== -1) {
    currentArray.splice(indexToDelete, 1);
    saveArrayToLocalStorage(currentArray);
  }
}

const Storage = () => {
  const [data, setData] = React.useState([]);

  function handleGetLocalStorage() {
    const item = get;
  }
  return <></>;
};

export default Storage;
