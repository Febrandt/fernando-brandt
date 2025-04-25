import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InitialHero from './components/InitialHero'


function App() {

  return (
    <>
      <InitialHero></InitialHero>
      <div className='bg-light mx-10 sm:mx-20 p-10 rounded-lg shadow-lg mt-10 text-center'>
        <em className='text-2xl tracking-[0.09rem] text-center'>Brief</em>
        <p className='mt-2 text-justify'>
          Desenvolvedor especializado em criação de sistemas web sob medida e websites modernos. Criação desde a lógica de sistemas robustos até a interface que o usuário vê e interage. Com foco em entregar soluções que funcionam de forma rápida, segura e com visual profissional.
        </p>
      </div>
      <div className='bg-light mx-10 sm:mx-20 p-10 rounded-lg shadow-lg mt-10 flex flex-col'>
        <em className='text-2xl tracking-[0.09rem] text-center'>Formação</em>
        <div className='flex flex-row gap-5 mt-5'>
          <img src="/assets/senai.png" className='w-20 h-20 rounded-full'></img>
          <div className='flex flex-col'>
            <em>Curso técnico em desenvolvimento de sistemas</em>

            <p className='mt-2'>
              Conhecimentos sólidos em programação, banco de dados, e desenvolvimento de aplicações web.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-5 mt-5'>
          <img src="/assets/uninter.jpg" className='w-20 h-20 rounded-full'></img>
          <div className='flex flex-col'>
            <em>Bacharelado em Sistemas da Informação - Cursando</em>

            <p className='mt-2'>
              Desenvolvimento de software, gestão de projetos de TI e a administração de sistemas e redes.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-light mx-10 sm:mx-20 p-10 rounded-lg shadow-lg mt-10 text-center'>
        <em className='text-2xl tracking-[0.09rem] text-center'>Serviços</em>
        <ul className='list-disc ml-5 mt-4 text-left'>
          <li style={{ fontWeight: 600, lineHeight: 1, marginBottom: 10 }}>Sistemas de gestão sob medida: clientes, estoque, chamados, etc.</li>
          <li style={{ fontWeight: 600, lineHeight: 1, marginBottom: 10 }}>Sites responsivos e otimizados para Google</li>
          <li style={{ fontWeight: 600, lineHeight: 1, marginBottom: 10 }}>Integração entre plataformas: pagamentos, notas fiscais, entre outros.</li>
          <li style={{ fontWeight: 600, lineHeight: 1, marginBottom: 10 }}>Painéis administrativos.</li>
        </ul>
      </div>
      <footer className='bg-dark text-light p-5 shadow-lg mt-10 text-center'>
        <p className='text-sm !text-white'>
          Entre em contato: <a href="mailto:seuemail@example.com" className=' !text-blue-400' style={{ fontFamily: 'Liden Hill' }}>fernandombrandt@gmail.com</a> | Telefone ou Whatssap: <a href="tel:+55051994285159" className='!text-blue-400 '>(51) 99428-5159</a>
        </p>
      </footer>
    </>
  )
}

export default App
