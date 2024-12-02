import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import harshit_profile from '../assets/harshit_bnq.png';



// Keyframes for the glowing animation
const glow = keyframes`
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const HomeBanner = () => {
  return (
    <Banner
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProfileSection>
        <GlowingCircle />
        <Ring />
        <ProfilePic src={harshit_profile} alt="Profile" />
      </ProfileSection>

      <TextContent>
        <Name
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Harshit Gaur
        </Name>
        <Summary
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          A passionate data scientist eager to transform data into actionable insights and develop innovative solutions.
        </Summary>
        <CTA
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="https://www.youtube.com/@harshitgaur2898"
  target="_blank"
>
  <LogoIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.8,8.001c-0.24-0.91-0.96-1.63-1.88-1.87C17.93,6,12,6,12,6s-5.93,0-7.92,0.13c-0.92,0.24-1.64,0.96-1.88,1.87 C2,10,2,12.001,2,12.001s0,2.001,0.2,4.001c0.24,0.91,0.96,1.63,1.88,1.87C6.07,18,12,18,12,18s5.93,0,7.92-0.13 c0.92-0.24,1.64-0.96,1.88-1.87C22,14,22,12.001,22,12.001S22,10,21.8,8.001z M10,15.001v-6l5,3L10,15.001z" />
  </LogoIcon>
  Watch My YouTube
</CTA>
<br></br>
<CTA
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="https://www.youtube.com/@harshitgaur2898"
  target="_blank"
>
<LogoIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3h-2V2h-2v1H9V2H7v1H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H8v-2h4v2zm0-4H8v-2h4v2zm6 4H9v-2h10v2zm0-4H9v-2h10v2z"/>
    </LogoIcon>
  Click to Book Session
</CTA>
      </TextContent>
    </Banner>
  );
};

export default HomeBanner;

// Styled Components
const Banner = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 2rem;
  background: transparent;
  color: var(--text-color);

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
`;

const ProfileSection = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${glow} 6s ease-in-out infinite;
  z-index: -1;

  @media (max-width: 1024px) {
    width: 420px;
    height: 420px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Ring = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  border: 3px dotted var(--text-secondary-color);
  animation: ${rotate} 6s linear infinite;

  @media (max-width: 1024px) {
    width: 420px;
    height: 420px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`;

const ProfilePic = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid var(--text-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    width: 420px;
    height: 420px;
  }

  @media (max-width: 768px) {
    width: 420px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  padding: 1rem;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  margin: 0;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Summary = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary-color);
  margin: 1rem 0;
  line-height: 1.8;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CTA = styled(motion.a)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: var(--text-color);
  color: var(--bg-color);
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--text-secondary-color);
    color: var(--bg-color);
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;

const LogoIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px; /* Spacing between icon and text */
  fill: currentColor; /* Matches the color of the button text */
  vertical-align: middle;
`;

