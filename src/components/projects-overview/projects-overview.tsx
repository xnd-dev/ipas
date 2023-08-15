import * as S from './projects-overview.styles'

import ImageProject1 from '../../../public/feeding.svg'
import ImageProject2 from '../../../public/voluntary.svg'
import Image from 'next/image'

export function ProjectOverview() {
  return (
    <>
      <S.SectionContainer id="nossos-projetos">
        <S.ContentContainer>
          <S.TitleAndSubtitleContainer>
            <S.TitleContainer>Nossos Projetos Sociais:</S.TitleContainer>
            <S.SubtitleContainer>
              Compromisso em transformar realidades
            </S.SubtitleContainer>
          </S.TitleAndSubtitleContainer>
          <S.OverviewContainer>
            <S.CardContainer>
              <S.ImageContainer>
                <Image src={ImageProject1} alt="" />
              </S.ImageContainer>
              <S.DescriptionContainer>
                <S.TitleDescriptionContainer>
                  Alimentando Vidas
                </S.TitleDescriptionContainer>
                <S.TextDescriptionContainer>
                  <S.StrongContainer>Objetivo</S.StrongContainer>
                  <br />
                  <li>
                    Combater a fome e a insegurança alimentar nas comunidades
                    carentes
                  </li>
                  <br />
                  <S.StrongContainer>Atuação</S.StrongContainer>
                  <br />

                  <li>Parcerias e campanhas de arrecadação</li>
                  <li>Coleta de Alimentos</li>
                  <li>Participação da comunidade e de voluntários</li>
                  <li>Doações para famílias em situação de vulnerabilidade</li>

                  <br />
                  <S.StrongContainer>Impacto</S.StrongContainer>
                  <br />

                  <li>850 famílias atendidas mensalmente</li>
                  <li>Garantia de alimentação adequada e nutritiva</li>
                </S.TextDescriptionContainer>
              </S.DescriptionContainer>
            </S.CardContainer>
            <S.CardContainer>
              <S.ImageContainer>
                <Image src={ImageProject2} alt="" />
              </S.ImageContainer>
              <S.DescriptionContainer>
                <S.TitleDescriptionContainer>
                  Ações Voluntárias
                </S.TitleDescriptionContainer>
                <S.TextDescriptionContainer>
                  <S.StrongContainer>Objetivo</S.StrongContainer>
                  <br />

                  <li>
                    Levar alegria, apoio e solidariedade para aqueles que mais
                    precisam
                  </li>

                  <br />
                  <S.StrongContainer>Atuação</S.StrongContainer>

                  <br />

                  <li>Ações em datas comemorativas</li>
                  <li>Atividades Recreativa e distribuição de presentes</li>
                  <li>Celebração e interações afetuosas</li>

                  <br />
                  <S.StrongContainer>Impacto</S.StrongContainer>
                  <br />

                  <li>Promoção do amor ao próximo</li>
                  <li>Fortalecimento dos laços comunitários</li>
                  <li>
                    Experiências felizes para pessoas em situação de
                    vulnerabilidade social
                  </li>
                </S.TextDescriptionContainer>
              </S.DescriptionContainer>
            </S.CardContainer>
          </S.OverviewContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
