import styled from 'styled-components';

export const Container = styled.div`
  margin: 1%;
  color: #000;
  .table-circule {
    background: #fff;
    border: 2px solid #e53935;
    box-shadow: 0 0 3px #e53935;
    box-sizing: border-box;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }
  .table {
    background: #fff;
    border: 1px solid #e53935;
    box-shadow: 0 0 3px #e53935;
    box-sizing: border-box;
    border-radius: 9px;
    padding: 15px;

    min-width: 80px;
  }

  .table-row {
    margin: 1rem;
  }
  .selectable-table:hover {
    cursor: pointer;

    padding: 5px;
  }

  .full-table {
    background-color: white;
    border: solid 2px white;
    // border: solid 2px rgba(245, 246, 250, 0.4)
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }
  .empty-table {
    background-color: red;
    border: solid 2px white;
    border-radius: 50%;
    padding: 1px 10px;
    margin: 3px;
  }

  .table-name {
    color: red;
    font-size: 0.8rem;
    padding-top: 15px;
    font-family: Roboto, sans-serif;
  }
`;

// .table-display-message
//     padding: 2% 0
//     text-align: center
//     font-size: 1.3rem
//     color: white

// .tables-display
//     background-color: $red
//     margin: 10% 2%
//     padding: 3% 5%
//     border-radius: 25px

// @media (min-width: $small-break)
//     .tables-display
//         margin: 6% 2.5%

// .table-key
//     padding-top: 1%
//     padding-bottom: 4.5%
//     color: white

// .available-tables
//     color: rgb(255, 255, 255)
//     font-size: 1.2rem
//     font-family: Roboto, sans-serif
