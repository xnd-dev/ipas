import React from 'react'
import { BackgroundContainer, ModalContainer } from './modal.styles';
import { ModalProps } from './modal.types';

export function Modal( {isOpen, closeModal } : ModalProps ) {

  if (isOpen) {
    return (
      <BackgroundContainer>
        <ModalContainer>
          {/*//@ts-ignore*/}
          <button onClick={closeModal}>x</button>
          <ul>
          {/*//@ts-ignore*/}
          <li><a href="#projects" onClick={closeModal}>Nossos Projetos</a></li>
          {/*//@ts-ignore*/}
          <li><a href="#help" onClick={closeModal}>Como ajudar</a></li>
          {/*//@ts-ignore*/}
          <li><a href="#voluntary" onClick={closeModal}>Seja um Voluntário</a></li>
          {/*//@ts-ignore*/}
          <li><a href="#contact" onClick={closeModal}>Contato</a></li>
          {/*//@ts-ignore*/}
          <li><a href="#contact" onClick={closeModal}>Doe Agora</a></li>
          </ul>
        </ModalContainer>
      </BackgroundContainer>
    );
 }
  return null
}