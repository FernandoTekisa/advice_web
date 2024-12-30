"use client";

import { useEffect,useState } from "react";
import axios from "axios";


export default function Home() {
  const [advice, setAdvice] = useState (null);

  async function fetchAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center">
      <div className="flex flex-col bg-slate-200 shadow-lg shadow-gray-300 py-3 px-4 mx-10 rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold">ADVICE</h1>
        </div>
        <div className="flex mt-9 items-center justify-center">
        <ul>
            {advice ? (
              <li key={advice.id}>{advice.advice}</li>
            ) : (
              <p>Carregando ou nenhum conselho disponível.</p>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center mt-7">
          <button onClick={fetchAdvice} className="bg-blue-500 py-2 px-5 rounded">
            <span className="text-base font-normal text-slate-100">Seguinte→</span>
          </button>
        </div>
      </div>
    </div>
  );
}