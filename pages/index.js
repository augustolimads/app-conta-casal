import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import coupleCalculator from '../utils/coupleCalculator'

export default function Home() {

  const [bills, setBills] = useState(0);

  const [partinerA, setPartnerA] = useState('Conjuge A');
  const [partinerB, setPartnerB] = useState('Conjuge B');

  const [salaryA, setSalaryA] = useState(0);
  const [salaryB, setSalaryB] = useState(0);

  const [result, setResult] = useState({})

  useEffect(() => {
    setResult(coupleCalculator(salaryA, salaryB, bills))
  }, [salaryA, salaryB, bills])

  useEffect(() => { console.log(result) }, [result])

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Divisor de conta</title>
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-8356746534216149" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>

      <main>
        <section>
          <h1 
          id='home'
          className='text-3xl text-center font-bold text-gray-600 p-4'>Calculadora de finanças para casal</h1>
        </section>

        <div className='flex flex-col justify-center md:flex-row p-4 gap-2'>
          <section className='shadow-xl p-4 rounded bg-gray-50 space-y-4'>
            <form className='space-y-4'>

              <div className='shadow p-4 rounded flex flex-col space-y-4 bg-green-100'>
                <div className='flex flex-col'>
                  <label for='bills' className='font-semibold'>Total da despesa</label>
                  <input
                    className='focus:ring-4 ring-green-300 border-2 border-green-400 rounded p-2 mt-1'
                    placeholder='Total da despesa'
                    name='bills'
                    value={bills}
                    onChange={({ target }) => setBills(target.value)}
                  />
                </div>
              </div>

              <div className='shadow p-4 rounded flex flex-col space-y-4 bg-blue-100'>
                <div className='flex flex-col'>
                  <label for='partinerA' className='font-semibold'>Nome do Conjuge A</label>
                  <input
                    className='focus:ring-4 border-2 border-blue-400 rounded p-2 mt-1'
                    placeholder='Nome do conjunge A'
                    name='partinerA'
                    value={partinerA}
                    onChange={({ target }) => setPartnerA(target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='salaryA' className='font-semibold'>Renda de {partinerA} (R$)</label>
                  <input
                    className='focus:ring-4 border-2 border-blue-400 rounded p-2 mt-1'
                    placeholder={`Renda de ${partinerA}`}
                    name='salaryA'
                    value={salaryA}
                    onChange={({ target }) => setSalaryA(target.value)}
                  />
                </div>
              </div>

              <div className='shadow p-4 rounded flex flex-col space-y-4 bg-pink-100'>
                <div className='flex flex-col'>
                  <label for='conjugeA' className='font-semibold'>Nome do Conjuge B</label>
                  <input
                    className='focus:ring-4 ring-pink-300 border-2 border-pink-400 rounded p-2 mt-1'
                    placeholder='Nome do conjunge B'
                    name='partinerB'
                    value={partinerB}
                    onChange={({ target }) => setPartnerB(target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label for='conjugeA' className='font-semibold'>Renda de {partinerB} (R$)</label>
                  <input
                    className='focus:ring-4 ring-pink-300 border-2 border-pink-400 rounded p-2 mt-1'
                    placeholder={`Renda de ${partinerB}`}
                    name='salaryB'
                    value={salaryB}
                    onChange={({ target }) => setSalaryB(target.value)}
                  />
                </div>
              </div>

              <a
                className='md:hidden text-white font-bold p-3 w-full rounded bg-gray-700 hover:bg-gray-800 duration-300 ease-in-out block text-center'
                href='/#resultado'
              >
                VER RESULTADOS
                </a>
            </form>
          </section>
          <section className='shadow-xl p-4 rounded bg-gray-50 space-y-4'>
            <h2 className='font-semibold text-2xl text-gray-700' id='resultado'>Resultado</h2>

            <div className='shadow p-4 rounded flex flex-col space-y-2 bg-green-100'>
              <h3 className='font-semibold text-lg text-gray-700'>Visão geral do casal</h3>
              <p className='p-1 hover:shadow font-semibold'>Renda do casal: R${result.totalCouple}</p>
              <p className='p-1 hover:shadow'>Gasto total: R${bills}</p>
              <p className='p-1 hover:shadow'>Gasto de {result.taxBills || 0}% da renda</p>
            </div>

            <div className='shadow p-4 rounded flex flex-col space-y-2 bg-blue-100'>
              <h3 className='font-semibold text-lg text-gray-700'>{partinerA}</h3>
              <p className='p-1 hover:shadow font-semibold'>Parte do gasto: R${result.fractionPartinerA}</p>
              <p className='p-1 hover:shadow'>Porcentagem do total: {result.taxPartinerA}%</p>
              <p className='p-1 hover:shadow'>Sobra: R${result.restPartinerA}</p>
            </div>

            <div className='shadow p-4 rounded flex flex-col space-y-2 bg-pink-100'>
            <h3 className='font-semibold text-lg text-gray-700'>{partinerB}</h3>
              <p className='p-1 hover:shadow font-semibold'>Parte do gasto: R${result.fractionPartinerB}</p>
              <p className='p-1 hover:shadow'>Porcentagem do total: {result.taxPartinerB}%</p>
              <p className='p-1 hover:shadow'>Sobra: R${result.restPartinerB}</p>
            </div>

            <a
              className='md:hidden text-white font-bold p-3 w-full rounded bg-gray-700 hover:bg-gray-800 duration-300 ease-in-out block text-center'
              href='/#home'
            >
              TENTAR NOVAMENTE
                </a>
          </section>
        </div>
        <section className='p-4 flex justify-center'>
          <div>
          <h2 className='font-semibold text-2xl text-gray-700 py-4'>Sobre a Calculadora de Finanças de Casal</h2>
          <p>Esta calculadora serve para ajudar o casal a dividir as contas de forma justa e clara, baseada na proporção do salário de cada um das partes.</p>
          <hr className='mt-8'/>
          <h2 className='font-semibold text-2xl text-gray-700 py-4'>Sobre o Projeto</h2>
          <p>Este projeto faz parte do artigo de temas tecnológicos em programação, de Augusto Silva Lima.</p>
          <p className='mt-4 font-semibold hover:underline'><a href='https://github.com/augustolimads/app-conta-casal'>Github</a></p>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}
