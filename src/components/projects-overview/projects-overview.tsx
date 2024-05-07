import * as S from './projects-overview.styles';
import React, { useState, useEffect, ReactNode, ReactElement, Children } from 'react';

import { project1 } from './projects-overview.constants';
import { GalleryColumns } from '../gallery-columns';

export function ProjectOverview() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {setIsMobile(document.body.clientWidth < 769);};
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  function order(ordenacao: number[], ...elementos: ReactElement[]): ReactElement[] {
    //@ts-ignore
    if (isMobile && elementos[1] && React.isValidElement(elementos[1])) {
      //@ts-ignore
      const filhos = Children.toArray(elementos[1]!.props.children) as ReactElement[];
      elementos[1] = filhos[0] as ReactElement;
      elementos[2] = filhos[1] as ReactElement;
      //@ts-ignore
      return ordenacao.map((indice) => elementos[indice]);
    }
    else {return ordenacao.map((indice) => elementos[indice]);}
  }
  
  
  const orderElements: number[][] = isMobile ? [[1, 0, 2], [1, 0, 2]] : [[0, 1, 2], [1, 2, 0]];

  return (
    <>
      <S.ProjectsOverviewContainer id="projects">
      {project1.map((project, index) => (
        <S.ProjectsOverviewSection key={'proj'+index}>
            {
              order(
                orderElements[index],
                <GalleryColumns key={'gal'+index} images={project.photos}></GalleryColumns>,
                <S.SectionText>
                  <S.SectionTitle key={'tit'+index}>{project.title}</S.SectionTitle>
                  <S.SectionInnerText key={'tex'+index}>
                    {project.list.map((elemento,index)=> 
                      <S.SectionParagraph>{elemento}</S.SectionParagraph>)
                    }
                  </S.SectionInnerText>  
                </S.SectionText>
              )
            }
        </S.ProjectsOverviewSection>
      ))}
      </S.ProjectsOverviewContainer>
    </>
  )
}
