import * as S from './projects-overview.styles'

import ImageProject1 from '../../../public/alimentando-vidas.png'
import ImageProject2 from '../../../public/acao-voluntaria.png'
import Image from 'next/image'

export function ProjectOverview() {
  return (
    <>
      <S.SectionContainer id="03">
        <S.ContentContainer>
          <S.TitleAndSubtitleContainer>
            <S.SectionTitleContainer>
              Nossos Projetos Sociais:
            </S.SectionTitleContainer>
            <S.SectionSubtitleContainer>
              Compromisso em transformar realidades
            </S.SectionSubtitleContainer>
          </S.TitleAndSubtitleContainer>
          <S.OverviewContainer>
            <S.CardContainer>
              <S.ImageContainer>
                <Image src={ImageProject1} alt="" sizes="100vw" />
              </S.ImageContainer>
              <S.DescriptionContainer>
                <S.TitleDescriptionContainer>
                  Alimentando Vidas
                </S.TitleDescriptionContainer>
                <S.TextDescriptionContainer>
                  <p>
                    O projeto &quot;Alimentando Vidas&quot; tem como objetivo
                    combater a fome e a insegurança alimentar nas comunidades
                    carentes.
                  </p>
                  <p>
                    Através de parcerias e campanhas de arrecadação, o projeto
                    coleta alimentos e faz doações para famílias em situação de
                    vulnerabilidade social.
                  </p>
                  <p>
                    Com o apoio da comunidade e de voluntários, o projeto
                    &quot;Alimentando Vidas&quot; tem impactado positivamente a
                    vida de inúmeras pessoas, garantindo que elas tenham acesso
                    a uma alimentação adequada e nutritiva.
                  </p>
                </S.TextDescriptionContainer>
              </S.DescriptionContainer>
            </S.CardContainer>
            <S.CardContainer>
              <S.ImageContainer>
                <Image src={ImageProject2} alt="" sizes="100vw" />
              </S.ImageContainer>
              <S.DescriptionContainer>
                <S.TitleDescriptionContainer>
                  Ações voluntárias
                </S.TitleDescriptionContainer>
                <S.TextDescriptionContainer>
                  <p>
                    Nossas Ações Voluntárias são realizadas em datas
                    comemorativas como o Natal e o Dia das Crianças, e têm como
                    objetivo levar alegria, apoio e solidariedade para aqueles
                    que mais precisam.
                  </p>
                  <p>
                    Nestes momentos especiais, nos unimos para proporcionar
                    experiências positivas e inesquecíveis para crianças,
                    jovens, adultos e idosos em situação de vulnerabilidade
                    social.
                  </p>
                  <p>
                    Por meio de atividades recreativas, distribuição de
                    presentes, celebrações e interações afetuosas, promovemos o
                    amor ao próximo e fortalecemos os laços comunitários.
                  </p>
                </S.TextDescriptionContainer>
              </S.DescriptionContainer>
            </S.CardContainer>
          </S.OverviewContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
