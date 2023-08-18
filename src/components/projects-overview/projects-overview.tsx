import * as S from './projects-overview.styles'

import ImageProject1 from '../../../public/feeding.svg'
import ImageProject2 from '../../../public/voluntary.svg'
import Image from 'next/image'
import { project1, project2 } from './projects-overview.constants'

export function ProjectOverview() {
  return (
    <>
      <S.SectionContainer id="projects">
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
                {project1.map(({ title, list }, index) => (
                  <S.TextDescriptionContainer key={index}>
                    <S.StrongContainer>{title}</S.StrongContainer>
                    <ul>
                      {list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </S.TextDescriptionContainer>
                ))}
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
                {project2.map(({ title, list }, index) => (
                  <S.TextDescriptionContainer key={index}>
                    <S.StrongContainer>{title}</S.StrongContainer>
                    <ul>
                      {list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </S.TextDescriptionContainer>
                ))}
              </S.DescriptionContainer>
            </S.CardContainer>
          </S.OverviewContainer>
        </S.ContentContainer>
      </S.SectionContainer>
    </>
  )
}
