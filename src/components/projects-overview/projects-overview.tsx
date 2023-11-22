import * as S from './projects-overview.styles';
import { useState, useEffect } from 'react';

import { project1 } from './projects-overview.constants';
import { GalleryColumns } from '../gallery-columns';

export function ProjectOverview() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {setIsMobile(document.body.clientWidth < 768);};
    window.addEventListener('resize', checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  function order<T>(ordenacao: number[], ...elementos: T[]): T[] {
    const new_order = ordenacao.map((indice) => elementos[indice]);
    return new_order;
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
                <S.SectionTitle key={'tit'+index}>{project.title}</S.SectionTitle>,
                <S.SectionText key={'tex'+index}>
                  {project.list.map((elemento,index)=> 
                    <S.SectionParagraph>{elemento}</S.SectionParagraph>)
                  }
                </S.SectionText>  
              )
            }
        </S.ProjectsOverviewSection>
      ))}
      </S.ProjectsOverviewContainer>
    </>
  )
}
