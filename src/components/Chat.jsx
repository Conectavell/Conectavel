import * as React from "react";
import styled from "styled-components";

function Chat() {

    const Feedback = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 15px;
  gap: 11px;
  padding: 18px 80px 18px 15px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 37px;
  align-self: start;
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div6 = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
`;

const Div7 = styled.div`
  color: var(--Inactive-State-Color, rgba(73, 69, 79, 0.8));
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Poppins, sans-serif;
  letter-spacing: 0.12px;
  margin-top: 6px;
`;
  return (

    <Feedback>
          <Img2
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3f4fb956d1a7dd04858431b459ba81a0f400557053c5e99742f1ed26c7bd2b?apiKey=1aeb7b0691c842979fcde7487ae78091&"
          />
          <Div5>
            <Div6>John Doe</Div6>
            <Div7>Muito obrigada pelo reparo!</Div7>
          </Div5>
        </Feedback>


  )}

  export default Chat