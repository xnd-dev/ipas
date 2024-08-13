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
                        <S.MapContainer>Mapa</S.MapContainer>
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
                            <input type="text" id="name" name="name" placeholder="Nome" required value={formData.name} onChange={handleChange} />
                            <input type="email" id="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
                            <input type="tel" id="phone" name="phone" placeholder="Telefone" required value={formData.phone} onChange={handleChange} />
                            <textarea id="message" name="message" placeholder="Mensagem" rows={5} required value={formData.message} onChange={handleChange} />
                            <S.ButtonContainer type="submit"><Check /> Enviar</S.ButtonContainer>
                        </S.FormContainer>
                    </S.FormBoxContainer>
                </S.ContentBoxContainer>
                <S.SocialMidiaContainer>
                    <S.TitleContainer><h3>Acesse nossas redes:</h3></S.TitleContainer>
                    <S.LogoContainer>
                        <a href={links.instagram}><InstagramLogo size={"2.5rem"} /></a>
                        <a href={links.linkedin}><LinkedinLogo size={"2.5rem"} /></a>
                        {/* <a href={links.facebook}><FacebookLogo size={"2.5rem"} /></a> */}
                    </S.LogoContainer>
                </S.SocialMidiaContainer>
            </S.ContactBoxContainer>
        </S.SectionContainer>
    );
}
