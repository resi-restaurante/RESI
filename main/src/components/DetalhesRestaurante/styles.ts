import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 7rem;
  margin-bottom: 50rem;
`;

export const ContentRestaurant = styled.div`
  width: 54.3rem;
  height: 90rem;
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  margin-top: 25rem;
  img {
    width: 20rem;
    height: 14rem;
    margin: 3.7rem;
    border-radius: 1rem;
  }
`;
export const Title = styled.h1`
  position: absolute;
  left: 50rem;
  top: 10rem;
  color: #000;
`;
export const Description = styled.p`
  margin-top: 5rem;
  position: absolute;
  width: 314px;
  height: 68px;
  left: 50rem;
  top: 168px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;
export const Price = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: Roboto, sans-serif;
  margin-right: 4rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3rem;
  color: #e53935;
`;
export const Tables = styled.div`
  height: 38rem;
  border-radius: 1rem;
  background: #f5f3f4;
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
    grid-template-rows: 1fr 1fr;
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

export const Photos = styled.div`
  img {
    border-radius: 1rem;
    width: 12rem;
    height: 9rem;
  }
`;
