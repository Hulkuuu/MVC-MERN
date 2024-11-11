import React from 'react';
import styled from 'styled-components';

const SocialsCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Placeholder image or content */}
        <div className="img" />
        <span>About Me</span>
        <p className="info">
          I'm K.Teja , just a fellow classmate who is interested in almost everything but doesn't like anything. Thanks Namaaste, btw ... exams ravatleda? sadukovach gaa na about em untadi? .... ekkada daaka vaste please click on twitter icon. :)))))
        </p>
        <div className="share">
          <a href="https://github.com/Hulkuuu" aria-label="GitHub"><svg viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg></a>
          <a href="https://youtu.be/ChxDjT_aSUk" aria-label="Twitter"><svg viewBox="0 0 16 16" className="bi bi-twitter" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg></a>
          <a href="https://www.instagram.com/not_.teja?igsh=cjljbjJwZTJ1ZDdn" aria-label="Instagram"><svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a2.478 2.478 0 0 1 .92-.599c.28-.28.546-.453.92-.598.281-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047s2.39-.009 3.232-.047c.78-.036 1.204-.166 1.485-.276a2.478 2.478 0 0 1 .92-.599c.28-.28.546-.453.92-.598.28-.11.704-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485-.276-.843-.038-1.096-.047-3.232-.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-.486.145-.64.319-.638.56.85.41-.55 0-3.106 9.17-3.4t456." />
          </svg></a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;  /* Centers the card horizontally */
  align-items: center;      /* Centers the card vertically */
  height: 110vh;   

  .card {
    width: 400px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: black; /* Set text color to black */
  }
  .card .img {
    background-image: url('val.jpeg');
    background-size: cover;
    background-position: center;
    height: 200px;
    border-radius: 10px;
  }
  .card span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card .info {
    margin-top: 10px;
    font-size: 1rem;
  }
  .card .share {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  .card .share a {
    font-size: 1.5rem;
  }
`;

export default SocialsCard;
