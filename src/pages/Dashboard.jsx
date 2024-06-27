import React from "react";
import styled from "styled-components";
import Comunidade from "./Comunidade";
import { Link } from "react-router-dom";

const ChatMessage = ({ avatar, name, message }) => (
  <MessageWrapper>
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <MessageContent>
      <SenderName>{name}</SenderName>
      <MessageText>{message}</MessageText>
    </MessageContent>
  </MessageWrapper>
);

const Skill = ({ icon, name }) => (
  <SkillWrapper>
    <SkillIcon src={icon} alt={`${name} icon`} />
    <SkillName>{name}</SkillName>
  </SkillWrapper>
);

const ProfileDetail = ({ label, value }) => (
  <>
    <DetailLabel>{label}</DetailLabel>
    <DetailValue>{value}</DetailValue>
  </>
);

const Dashboard = () => {
  const chatMessages = [
    { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba03e4a138b712ccba758d010b19d77a6a6ebbe4c17864ba75c0b6e7c283d6b?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Sarah Doe", message: "Muito obrigada pelo reparo!" },
    { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba03e4a138b712ccba758d010b19d77a6a6ebbe4c17864ba75c0b6e7c283d6b?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Sarah Doe", message: "Muito obrigada pelo reparo!" },
    { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba03e4a138b712ccba758d010b19d77a6a6ebbe4c17864ba75c0b6e7c283d6b?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Sarah Doe", message: "Muito obrigada pelo reparo!" },
    { avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/eba03e4a138b712ccba758d010b19d77a6a6ebbe4c17864ba75c0b6e7c283d6b?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Sarah Doe", message: "Muito obrigada pelo reparo!" },
  ];

  const skills = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3ffe49ea6900420610f73abfc3c86bf2d4cc604158f5297b2aed59fd69354f2?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Reparo" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/066fc858cb5af21ccc1e2fa8b512e90133fbb05492113afbb40959462b8649c4?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Manutenção" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d900116ed2bf737c71c2d4025b433993d3e4dd16153490f1e59c94a369fff9e?apiKey=1aeb7b0691c842979fcde7487ae78091&", name: "Eletrodomésticos" },
  ];

  return (
    <AppWrapper>
      <Header>
        <LogoWrapper>
          <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/f529095ffdca6316b8e5d8e3a6316f0b9f675fac7abb19f638a091f6ee5c59f1?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Logo" />
          <LogoText src="https://cdn.builder.io/api/v1/image/assets/TEMP/320c6a09b1c14f7f395185980e2b4967fedacc6f3b60480baad697656147a454?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Logo text" />
        </LogoWrapper>
        <Nav>
          <NavItem>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4489bf41ae1a98f2b3ef29df79e726b7f1a92fb2fdbdbfeff59aac7006349e4?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Settings icon" />
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bb2a1754d9e6d3df9ce558b69c79b0754d3eeb73f9b7191902117a6b87e375?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Settings sub-icon" />
            <NavText>Configurações</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c5a38644ea542c3340b0ede6b67eb8c02381cbc1a7ceb7f2d32cd3e89c04a8?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Community icon" />
            <Link to="/Conectavel/comunidade">
            <NavText className="comunidade"  >Comunidade</NavText>
            </Link>
           
          </NavItem>
          <NavItem>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b104d7bd68f9054ff7dd003cd61a0d0bad60fe49b5b3c0084701db96d8dedb?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Discard icon" />
            <NavText>Descarte</NavText>
          </NavItem>
          <NavItem>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/44763aa780f448aab8556aea97b19489b528216280c698911393bbdba9c7fa9e?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Chat icon" />
            <NavText>Chat</NavText>
          </NavItem>
          <UserProfile>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4161ff6fae4117e16cd7d2a20f93ea96f458b7f85f1be0258493172f12e1a86?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="User icon" />
            <UserInfo>
              <UserAvatar src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb60ae5d4dcf0a75d969f48eea21ab4737e0639efebf9f5cabced339362f2c9?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="User avatar" />
              <UserDetails>
                <WelcomeText>Bem vindo de volta,</WelcomeText>
                <Link to="/Conectavel/TechnicianProfile">
                <UserName>Pedro Alves</UserName>
                </Link>
               
              </UserDetails>
            </UserInfo>
          </UserProfile>
        </Nav>
      </Header>
      <MainContent>
        <ChatSection>
          <SectionTitle>Chat</SectionTitle>
          {chatMessages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}
        </ChatSection>
        <ProfileSection>
          <ProfileBanner src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bc5abc1e32c8f82cb3939142e7c79bbad2dbfbf40f13576774ceefc19b889eb?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Profile banner" />
          <ProfileContent>
            <PersonalInfo>
              <ProfilePicture src="https://cdn.builder.io/api/v1/image/assets/TEMP/aebfeb9c435c188454f547df64b5001d07aa28e46d589b4656abb60c50c2c823?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Profile picture" />
              <InfoCard>
                <ProfileDetail label="Seu Nome" value="Pedro Alves" />
                <ProfileDetail label="E-mail" value="siddxd@growthx.com" />
                <ProfileDetail label="Celular" value="+91 49652845732" />
              </InfoCard>
              <AboutSection>
                <AboutTitle>Sobre Pedro Alves</AboutTitle>
                <AboutText>
                  Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
                </AboutText>
              </AboutSection>
              <SkillsSection>
                <SkillsTitle>Habilidades em</SkillsTitle>
                <SkillsList>
                  {skills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                  ))}
                </SkillsList>
              </SkillsSection>
            </PersonalInfo>
            <ProfessionalInfo>
              <SectionHeader>
                <SectionTitle>Detalhes profissionais</SectionTitle>
                <SectionIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/29c78087430a69ea823e333e8ebb0014202ccd320fa455f5387de5aa2888b5be?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Professional details icon" />
              </SectionHeader>
              <ExperienceSection>
                <SubSectionTitle>Experiência</SubSectionTitle>
                <InfoCard>
                  <InfoText>
                    <strong>7 Anos</strong>
                    <span>de total experiência</span>
                  </InfoText>
                  <InfoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f3cfb573a555f41b9381dec697dbfbe582251208c9ed0a172d939fe5755fdb3?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Experience icon" />
                </InfoCard>
              </ExperienceSection>
              <RatingsSection>
                <SubSectionTitle>Ratings</SubSectionTitle>
                <InfoCard>
                  <InfoText>
                    <strong>4 Estrelas</strong>
                    <span>De 34 clientes</span>
                  </InfoText>
                  <InfoIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f78bcecf4e0c913a2b5f868aea0e592e2256aa6f948c906d51616689eca1589b?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Ratings icon" />
                </InfoCard>
              </RatingsSection>
              <ReviewsSection>
                <SubSectionTitle>Avaliações de clientes</SubSectionTitle>
                <ReviewCard>
                  <ReviewerName>Ankit Srivastava</ReviewerName>
                  <RatingStars src="https://cdn.builder.io/api/v1/image/assets/TEMP/b51491019c05ec483199200b6d2c7e12151ed483041274c9cd2676120103f4b7?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="Rating stars" />
                  <ReviewText>
                    excelent conversation with him.. very knowledgeble personhappy to talk towith him
                  </ReviewText>
                </ReviewCard>
                <ViewAllReviews>Veja todas as avaliações -</ViewAllReviews>
              </ReviewsSection>
            </ProfessionalInfo>
          </ProfileContent>
        </ProfileSection>
      </MainContent>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  border-radius: 12px;
  background-color: #fafbff;
  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
`;

const Header = styled.header`
  border-bottom: 1px solid #cecece;
  background-color: #175ec6;
  width: 100%;
  padding: 14px 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    padding: 14px 20px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const LogoText = styled.img`
  width: 128px;
  height: auto;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 17px;
  color: #fff;
  font-weight: 500;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

// const Link = styled.link`
 
//   color: #fff;
// `;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 16px;
  white-space: nowrap;
  letter-spacing: -0.16px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavText = styled.span`
  font-family: Poppins, sans-serif;
   color: #fff;
  font-weight: 500;
  text-decoration: none;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserInfo = styled.div`
  border-radius: 9.212px;
  border: 1px solid #e8eff7;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  gap: 12px;
  padding: 12px 9px;
`;

const UserAvatar = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const WelcomeText = styled.span`
  font: 12px Poppins, sans-serif;
  color: #373b5c;
`;

const UserName = styled.span`
  font: 20px Poppins, sans-serif;
  color: #373b5c;
  text-decoration: none;
`;

// const Link = styled.link`
//  text-decoration: none;
// `;


const MainContent = styled.main`
  display: flex;
  gap: 20px;
  margin-top: 24px;
  padding: 0 51px;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const ChatSection = styled.section`
  width: 23%;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border: 2px solid #ebebee;
  background-color: #fff;
  padding: 21px 16px 80px;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const SectionTitle = styled.h2`
  color: rgba(34, 34, 34, 0.9);
  font: 400 24px Quantico, sans-serif;
  margin-bottom: 35px;
`;

const MessageWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 11px;
  padding: 18px 15px;
  margin-bottom: 18px;

  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Avatar = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SenderName = styled.span`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 12px;
`;

const MessageText = styled.p`
  color: rgba(73, 69, 79, 0.8);
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.12px;
  margin-top: 6px;
`;

const ProfileSection = styled.section`
  width: 77%;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ProfileBanner = styled.img`
  width: 100%;
  height: auto;
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: -65px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const PersonalInfo = styled.div`
  width: 56%;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border: 2px solid #ebebee;
  background-color: #fff;
  padding: 30px;

  @media (max-width: 991px) {
    width: 100%;
    padding: 20px;
  }
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 24px;
  display: block;
`;

const InfoCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 21px 16px;
  margin-bottom: 16px;
`;

const DetailLabel = styled.div`
  color: rgba(31, 31, 31, 0.7);
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 15px;
`;

const DetailValue = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
  font-size: 12px;
  margin-bottom: 25px;
`;

const AboutSection = styled.div`
  margin-bottom: 20px;
`;

const AboutTitle = styled.h3`
  color: #000;
  font: 500 16px Poppins, sans-serif;
  margin-bottom: 11px;
`;

const AboutText = styled.p`
  color: rgba(73, 69, 79, 0.8);
  font: 400 12px Poppins, sans-serif;
  letter-spacing: 0.12px;
`;

const SkillsSection = styled.div``;

const SkillsTitle = styled.h3`
  color: rgba(34, 34, 34, 0.9);
  font: 500 12px Poppins, sans-serif;
  margin-bottom: 18px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 30px;
  border: 1px solid #cecece;
  background-color: #fff;
  padding: 6px 14px;
`;

const SkillIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SkillName = styled.span`
  color: rgba(73, 69, 79, 0.8);
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.14px;
`;

const ProfessionalInfo = styled.div`
  width: 44%;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border: 2px solid #ebebee;
  background-color: #fff;
  padding: 24px 16px;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionIcon = styled.img`
  width: 54px;
  height: 54px;
`;

const SubSectionTitle = styled.h3`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 15px;
`;

const ExperienceSection = styled.div`
  margin-bottom: 20px;
`;

const RatingsSection = styled.div`
  margin-bottom: 20px;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: rgba(34, 34, 34, 0.9);
    font-family: Poppins, sans-serif;
    font-weight: 500;
    font-size: 12px;
  }

  span {
    color: rgba(73, 69, 79, 0.8);
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.12px;
    margin-top: 9px;
  }
`;

const InfoIcon = styled.img`
  width: 54px;
  height: 54px;
`;

const ReviewsSection = styled.div``;

const ReviewCard = styled.div`
  border-radius: 10.036px;
  box-shadow: 0px 3.797px 5.696px 0px rgba(65, 59, 137, 0.1);
  border: 1px solid #cecece;
  background-color: #fff;
  padding: 17px;
  margin-bottom: 17px;
`;

const ReviewerName = styled.h4`
  color: #413b89;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 12px;
`;

const RatingStars = styled.img`
  width: 281px;
  height: auto;
  margin-bottom: 11px;
`;

const ReviewText = styled.p`
  color: rgba(73, 69, 79, 0.8);
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0.13px;
`;

const ViewAllReviews = styled.a`
  color: #06208e;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`;

export default Dashboard;

