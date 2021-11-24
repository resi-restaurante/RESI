import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RestaurantGrid = styled.div`
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  margin-top: 1rem;
  width: 50%;
  h1 {
    margin-top: 3rem;
  }
  button {
    align-self: center;
    margin: 1rem;
    width: 90%;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
  img {
    @media screen and (max-width: 720px) {
      width: 15rem;
      height: 10rem;
      margin: 0 auto;
    }
    width: 20rem;
    height: 14rem;
    margin: 3.7rem;
    border-radius: 1rem;
  }
`;

export const ContentRestaurant = styled.div`
  @media screen and (max-width: 720px) {
    margin: 1rem;
  }
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #000;
`;

export const Adress = styled.h4`
  display: flex;
  margin-left: 8rem;
  color: #e53935;
  p {
    font-style: italic;
    font-size: 16px;
    font-weight: 300;
  }

  svg {
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 16px;
  width: 90%;
  color: #000000;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;

  align-items: center;
  width: 60%;

  margin-bottom: 2rem;
  cursor: pointer;
  color: #b11f2b;

  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    justify-content: center;
  }

  p {
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
  }
`;

export const ContainerCarrossel = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 50%;
    height: 50%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const TableSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
`;
export const Table = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  background: #faf9fa;
  margin-left: 14rem;
  padding: 1.5rem;
  color: #434343;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 700;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem;
    color: #434343;
  }
  section {
    margin-left: 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
  }
  .custom-input {
    border-radius: 1rem;
    border: 1px #e53945 solid;
    padding: 0.5rem 1rem;
    background-color: #fff;
    height: 2rem;
    width: 8rem;
    box-shadow: 0 0 3px #e53935;
  }
  .custom-input:focus {
    outline: none;
    border: 1px solid #e53935;
    box-shadow: 0 0 10px 2px #c53030;
  }
  .reserv {
    width: 5.8rem;
    height: 2rem;
    background: #e53935;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 4px;
    margin-left: 42rem;
  }
  .tableChairs {
    margin: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span {
      margin-right: 1.4rem;
      height: 2rem;
      width: 2rem;
    }
  }
  .full-table {
    background: #630000;
    border: 2px solid #e53935;
    box-shadow: 0 0 3px #630000;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }
  .empty-table {
    background: #fff;
    border: 2px solid #e53935;
    box-shadow: 0 0 3px #e53935;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }
`;
export const DatePickerCalendar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;
export const DatePickerTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem;
  margin: 1rem;
  h3 {
    margin: 1rem;
    color: #434343;
  }
`;
