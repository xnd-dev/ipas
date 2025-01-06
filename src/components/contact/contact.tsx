import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Check, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import * as S from "./contact.style";
import { links } from "./contact.constants";
import { FormData } from "./contact.types";

export function Contact() {
    const initialFormData: FormData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.phone && formData.message) {
            const mailtoLink = `mailto:ipasalagoas@gmail.com?subject=Contato de ${formData.name}&body=Nome: ${formData.name}%0D%0AE-mail: ${formData.email}%0D%0ATelefone: ${formData.phone}%0D%0AMensagem: ${formData.message}`;
            
            setFormData(initialFormData);

            alert('Mensagem enviada com sucesso!');
            
            window.location.href = mailtoLink;
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <S.SectionContainer id="contact">
            <S.ContactBoxContainer>
                <S.ContentBoxContainer>
                    <S.InfoContainer>
                        <S.TitleContainer>
                            <h3>Informações e contato:</h3>
                        </S.TitleContainer>
                        <S.MapContainer>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.9617950751267!2d-36.00117442422599!3d-9.512048899900552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x706ca03d0d70ef3%3A0xf550e31ab9552e52!2sR.%20Pref.%20Jos%C3%A9%20Lopes%20Duarte%20-%20Atalaia%2C%20AL%2C%2057690-000!5e0!3m2!1spt-BR!2sbr!4v1736120606829!5m2!1spt-BR!2sbr"></iframe>
                        </S.MapContainer>
                        <S.AdressContainer>
                            <h4>Endereço</h4>
                            <h5>Avenida Prefeito José Lopes Duarte, S/N - Lot. Santa Inês CEP: 57690-000, Atalaia/AL</h5>
                        </S.AdressContainer>
                        <S.CommunicationContainer>
                            <S.ChannelsContainer>
                                <h4>E-mail</h4>
                                <h5>contato@ipas.com</h5>
                            </S.ChannelsContainer>
                            <S.ChannelsContainer>
                                <h4>Telefone</h4>
                                <h5>(82) 99662-1031</h5>
                            </S.ChannelsContainer>
                        </S.CommunicationContainer>
                    </S.InfoContainer>
                    <S.FormBoxContainer>
                        <S.TitleContainer>
                            <h3>Envie uma mensagem:</h3>
                        </S.TitleContainer>
                        <S.FormContainer onSubmit={handleSubmit}>
                            <input type="text" id="name" name="name" placeholder="Nome*" required value={formData.name} onChange={handleChange} />
                            <input type="email" id="email" name="email" placeholder="E-mail*" required value={formData.email} onChange={handleChange} />
                            <input type="tel" id="phone" name="phone" placeholder="Telefone*" required value={formData.phone} onChange={handleChange} />
                            <textarea id="message" name="message" placeholder="Mensagem*" rows={5} required value={formData.message} onChange={handleChange} />
                            <S.ButtonContainer type="submit"><Check /> Enviar</S.ButtonContainer>
                        </S.FormContainer>
                    </S.FormBoxContainer>
                </S.ContentBoxContainer>
                <S.SocialMidiaContainer>
                    <S.TitleContainer><h3>Acesse nossas redes:</h3></S.TitleContainer>
                    <S.LogoContainer>
                        <a href={links.instagram} target="_blank" rel="noopener noreferrer"><InstagramLogo size={"2.5rem"} /></a>
                        <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinLogo size={"2.5rem"} /></a>
                        {/* <a href={links.facebook}><FacebookLogo size={"2.5rem"} /></a> */}
                    </S.LogoContainer>
                </S.SocialMidiaContainer>
            </S.ContactBoxContainer>
        </S.SectionContainer>
    );
}
