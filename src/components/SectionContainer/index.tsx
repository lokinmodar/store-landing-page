import styled from 'styled-components';

const SectionContainer = styled.section`
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 95%;
  border-radius: 6px;
  color: #fff;

  margin: 0 auto;

  height: 75vh;
  width: 90%;

  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
    height: 100%;
    margin-top: 15px;
    margin-bottom: 15px;

    margin-left: auto;
    margin-right: auto;

    h2 {
      font-family: 'Yanone Kaffeesatz', 'Noto Mono', 'Arial Narrow', sans-serif;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 15px;
    }

    h1 {
      font-family: 'Yanone Kaffeesatz', 'Noto Mono', 'Arial Narrow', sans-serif;
      font-weight: 400;
      font-size: 28px;
      margin-bottom: 15px;
      text-align: left;
    }

    p {
      text-align: left;
      line-height: 1.4;
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 700px) {
    #cont {
      text-align: center;
      max-width: 90%;
      width: 90%;
    }
  }
`;

export default SectionContainer;
