import * as S from './gallery-columns.styles'

import Image from 'next/image'
type GalleryColumnsProps = {
    images: string[][];
  };

export function GalleryColumns({ images }: GalleryColumnsProps) {
  return (
<S.GalleryColumnsContainer>
      {images.map((column, columnIndex) => (
        <S.Column key={columnIndex} className={`column${columnIndex + 1}`}>
          {column.map((image, imageIndex) => (
            <img key={imageIndex} src={'../../../v5/'+image} alt={`Imagem ${imageIndex + 1}`} />
          ))}
        </S.Column>
      ))}
    </S.GalleryColumnsContainer>
  )
}
