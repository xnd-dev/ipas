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
  
  return (
    <>
      <S.SectionContainer id="projects">
      {project1.map((project, index) => (
        <S.SectionSecao key={index}>
          {isMobile ? 
            <>
            <S.SectionTitle>{project.title}</S.SectionTitle>
            <GalleryColumns images={project.fotos}></GalleryColumns>
            {project.list.map((elemento,index)=> <S.SectionContent>{elemento}</S.SectionContent>)}
            </>
          :
          index % 2 === 0 ? (
            <>
          <GalleryColumns images={project.fotos}></GalleryColumns>
          <S.SectionText>
          <div style={{ paddingRight: '9.19rem' }}>
            <S.SectionTitle>{project.title}</S.SectionTitle>
            {project.list.map((elemento,index)=> <S.SectionContent>{elemento}</S.SectionContent>)}
          </div>  
          </S.SectionText>
            </>
          ) : (
            <>
          <S.SectionText>
          <div style={{ paddingLeft: '9.19rem' }}>
            <S.SectionTitle>{project.title}</S.SectionTitle>
            {project.list.map((elemento,index)=> <S.SectionContent>{elemento}</S.SectionContent>)}
          </div>              
          </S.SectionText>    
          <GalleryColumns images={project.fotos}></GalleryColumns>
            </>
          )}
        </S.SectionSecao>
      ))}
      </S.SectionContainer>
    </>
  )
}
