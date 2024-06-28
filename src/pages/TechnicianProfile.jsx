import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, since, specialty, experience }) => (
  <ProfileInfo>
    <ProfileName>{name}</ProfileName>
    <ProfileDetail>Desde</ProfileDetail>
    <ProfileValue>{since}</ProfileValue>
    <ProfileDetail>Especialidade</ProfileDetail>
    <ProfileValue>{specialty}</ProfileValue>
    <ProfileDetail>Experiências</ProfileDetail>
    <ProfileValue>{experience}</ProfileValue>
  </ProfileInfo>
);

const ReviewCard = ({ reviewer, rating, comment }) => (
  <ReviewContainer>
    <ReviewerName>{reviewer}</ReviewerName>
    <RatingStars src="https://cdn.builder.io/api/v1/image/assets/TEMP/678387d47da82e9dbabd5c4d455013194b8c9fdef424fb97e7e6fa5359be6fc3?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Rating" />
    <ReviewComment>{comment}</ReviewComment>
  </ReviewContainer>
);

function TechnicianProfile() {
  return (
    <ProfileWrapper>

<Link to="/Conectavel/Dashboard" className="fotoPerfil">     
   <Logo  className="fotoPerfil" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ba01509d55808d6e52bb3e618109a54f10aaf55ff21f47d1bf2e1433d21a18?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Logo" />
</Link>

      <MainCard>
        <CoverImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcad1bfee4f5fc16bdcb60eb694925d533f9d251196f904308ed247e9c974460?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Cover" />
        <ContentSection>
          <ProfileSection>
            <InfoColumn>
              <ProfileImageWrapper>
                <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f14c0e497079a105341beec0176e9fabf80dd6f1a69910d89616b0560dfa3b?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Profile" />
                <LocationInfo>
                  <LocationLabel>Localização</LocationLabel>
                  <LocationValue>São Paulo</LocationValue>
                  <SubLocation>
                    <LocationIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c0ee60d15cab3a163cee41a8a9299c37abe23ab319f1f03108ce776a2a49bb?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Location icon" />
                    <LocationName>Guaianases</LocationName>
                  </SubLocation>
                </LocationInfo>
              </ProfileImageWrapper>
            </InfoColumn>
            <DetailsColumn>
              <ProfileCard
                name="Pedro Alves"
                since="Fevereiro de 2024"
                specialty="Tecnico em Televisores"
                experience="Trabalho há 10 anos no ramo da Eletrônica"
              />
            </DetailsColumn>
          </ProfileSection>
          
          <ReviewSection>
            <ReviewTitle>Avaliação de clientes</ReviewTitle>
            <ReviewCard
              reviewer="Julia dos Santos"
              rating={5}
              comment="Gostei muito do serviço, mas a garantia é curta!"
            />
          </ReviewSection>

        </ContentSection>
        <ViewAllReviews>Veja todas as avaliações -</ViewAllReviews>
        <ContactButton>Contatar</ContactButton>
      </MainCard>
      <GallerySection>
        <GalleryTitle>Galeria de Pedro Alves</GalleryTitle>
        <GalleryGrid>
          <GalleryImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/008219cf54deac161cc971de0dc2a71834484f39425876a821786da60efd6dd4?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Gallery image 1" />
          <GalleryImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/fccae4a43c05767b6814b3ae1ef0ff2dde7240014fe1b367ce4cb4ae790dfe5c?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Gallery image 2" />
        </GalleryGrid>
      </GallerySection>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.main`
  border-radius: 12px;
  background-color: #fafbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px 80px 22px;
  

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 50px;
  align-self: flex-start;
     position: fixed;
    top: 0;
    left: 0;
`;





const MainCard = styled.section`
  border-radius: 24px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  margin-top: 36px;
  width: 100%;
  max-width: 1160px;
  padding-bottom: 23px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const CoverImage = styled.img`
  aspect-ratio: 10;
  object-fit: cover;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentSection = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  padding: 0 59px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 20px;
  max-width: 91px
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileImage = styled.img`
  aspect-ratio: 1.04;
  object-fit: cover;
  width: 100%;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const LocationLabel = styled.h3`
  color: #175ec6;
  margin-top: 10px;
  font: 700 16px Poppins, sans-serif;
`;

const LocationValue = styled.p`
  color: #111;
  margin-top: 9px;
  font: 24px Poppins, sans-serif;
`;

const SubLocation = styled.div`
  display: flex;
  margin-top: 4px;
  gap: 3px;
  font-size: 13px;
  color: rgba(73, 69, 79, 0.8);
  white-space: nowrap;
  letter-spacing: 0.13px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LocationIcon = styled.img`
  aspect-ratio: 0.95;
  object-fit: contain;
  width: 19px;
`;

const LocationName = styled.span`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  margin: auto 0;
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  margin-top: 6px;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  color: #111;
  font-weight: 700;
  padding: 2px 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileName = styled.h2`
  letter-spacing: -1.12px;
  align-self: stretch;
  font: 56px/100% Quantico, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const ProfileDetail = styled.h4`
  color: #175ec6;
  font-family: Poppins, sans-serif;
  margin: 35px 0 0 12px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const ProfileValue = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  line-height: 130%;
  margin: 9px 0 0 12px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const ReviewSection = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ReviewTitle = styled.h3`
  color: #175ec6;
  font: 700 16px Poppins, sans-serif;
  margin-top: 35px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ReviewContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 3.8px 5.7px 0 rgba(65, 59, 137, 0.1);
  border: 1px solid #cecece;
  background-color: #fff;
  display: flex;
  margin-top: 7px;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13px;
  letter-spacing: 0.13px;
  padding: 17px 0 30px;
`;

const ReviewerName = styled.h4`
  color: #413b89;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  margin-left: 15px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const RatingStars = styled.img`
  aspect-ratio: 12.5;
  object-fit: contain;
  width: 281px;
  align-self: center;
  margin-top: 12px;
`;

const ReviewComment = styled.p`
  color: rgba(73, 69, 79, 0.8);
  font-family: Poppins, sans-serif;
  font-weight: 400;
  width: 251px;
  margin: 13px 0 0 16px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const ViewAllReviews = styled.a`
  color: #06208e;
  align-self: flex-end;
  margin-right: 111px;
  font: 500 12px Poppins, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const ContactButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #175ec6;
  width: 532px;
  max-width: 100%;
  color: #fff;
  margin: 26px 0 0 65px;
  padding: 13px 60px;
  font: 500 16px Poppins, sans-serif;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 13px 20px;
    margin-left: 0;
    align-self: center;
  }
`;

const GallerySection = styled.section`
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  border: 2px solid #ebebee;
  background-color: #fff;
  display: flex;
  margin-top: 34px;
  width: 1000px;
  max-width: 100%;
  flex-direction: column;
  padding: 33px 19px;
  @media (max-width: 991px) {
    padding: 33px 20px;
  }
`;

const GalleryTitle = styled.h2`
  color: rgba(34, 34, 34, 0.9);
  font: 500 24px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const GalleryGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
   width: 680px;
  margin-top: 46px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-top: 40px;
  }
`;

const GalleryImage = styled.img`
  aspect-ratio: 1.09;
  object-fit: cover;
  width: 60%;
 
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 23px;
  }
`;

export default TechnicianProfile;