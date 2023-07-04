import {
  SectionContainer,
  TitleContainer,
  OverviewContainer,
  ImageContainer,
  ContentContainer,
  CardContainer,
  DescriptionContainer,
} from './projects-overview.styles'

import ImageProject1 from '../../../public/alimvid.png'
import ImageProject2 from '../../../public/acvolun.png'
import Image from 'next/image'

export function Section2() {
  return (
    <>
      <SectionContainer id="03">
        <ContentContainer>
          <TitleContainer>
            <h1>Nossos Projetos Sociais:</h1>
            <h4>Compromisso em transformar realidades</h4>
          </TitleContainer>
          <OverviewContainer>
            <CardContainer>
              <ImageContainer>
                <Image src={ImageProject1} alt="" sizes="100vw" />
              </ImageContainer>
              <DescriptionContainer>
                <h3>Alimentando Vidas</h3>
                <p>
                  O projeto &quot;Alimentando Vidas&quot; tem como objetivo
                  combater a fome e a insegurança alimentar nas comunidades
                  carentes. <br />
                </p>
                <p>
                  Através de parcerias e campanhas de arrecadação, o projeto
                  coleta alimentos e faz doações para famílias em situação de
                  vulnerabilidade social.
                  <br />
                </p>
                <p>
                  Com o apoio da comunidade e de voluntários, o projeto
                  &quot;Alimentando Vidas&quot; tem impactado positivamente a
                  vida de inúmeras pessoas, garantindo que elas tenham acesso a
                  uma alimentação adequada e nutritiva.
                </p>
              </DescriptionContainer>
            </CardContainer>
            <CardContainer>
              <DescriptionContainer>
                <h3>Ações voluntárias</h3>
                <p>
                  Nossas Ações Voluntárias são realizadas em datas comemorativas
                  como o Natal e o Dia das Crianças, e têm como objetivo levar
                  alegria, apoio e solidariedade para aqueles que mais precisam.{' '}
                  <br />
                </p>
                <p>
                  Nestes momentos especiais, nos unimos para proporcionar
                  experiências positivas e inesquecíveis para crianças, jovens,
                  adultos e idosos em situação de vulnerabilidade social.
                  <br />
                </p>
                <p>
                  Por meio de atividades recreativas, distribuição de presentes,
                  celebrações e interações afetuosas, promovemos o amor ao
                  próximo e fortalecemos os laços comunitários.
                </p>
              </DescriptionContainer>
              <ImageContainer>
                <Image src={ImageProject2} alt="" sizes="100vw" />
              </ImageContainer>
            </CardContainer>
          </OverviewContainer>
        </ContentContainer>
      </SectionContainer>
    </>
  )
}
