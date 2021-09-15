import styled from 'styled-components'
import Head from '../src/infra/components/Head'
import Header from '../src/patterns/Header'
import FotoPerfil from '../src/assets/images/foto.png'
import Historia from '../src/patterns/Historia'
import Contato from '../src/patterns/Contato'
import ResultadoForm from '../src/patterns/ResultadoForm'
import React, { useState, memo, useCallback } from 'react'

const Home = () => {

  const [dados, _] = useState({
    titlePagina: 'Gustavo Vitor - Teste React Cenário Capital',
    metaDescription: 'Teste de React com NextJS',
    keywords: 'Teste, React JS, NextJS, sass, código, html, css, javascript',
    nomeCompleto: 'Gustavo Vitor Quaresma de Oliveira',
    historia: `Tenho experiência e trabalho na área em desenvolvimento de front / back-end. 
    Possuo certificado da Cisco e cursos extra curriculares de HTML, CSS e JS pela fundação Bradesco. 
    Sou formado em Técnico em Informática na área de Sistemas e nesse curso 
    aprendi JS, React e desenvolvimento de sistemas, 
    e hoje sou formado em Analise Desenvolvimento de Sistemas e trabalho com  
    Front-end.`
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const userProfile = {
      nome: data.get('nome'),
      email: data.get('email'),
      whatsapp: data.get('whatsapp'),
      assunto: data.get('assunto'),
      hobbys: data.getAll('hobbysName'),
      gosto: data.get('gostoName'),
      prefercontato: data.get('prefercontato')
    }

    setUseData(userProfile);
  }, []);

  const [useData, setUseData] = useState({})

  return (
    <div>
      <Head
        titlePage={dados.titlePagina}
        metaDescription={dados.metaDescription}
        keywords={dados.keywords}
      >
      </Head>

      <main>
        <Header nomeCompleto={dados.nomeCompleto} fotoPerfil={FotoPerfil} />

        <Historia
          historia={dados.historia}
        />

        <Contato submit={handleSubmit} />

        <ResultadoForm useData={useData} />

      </main>
    </div>
  )
}

export default memo(Home);
