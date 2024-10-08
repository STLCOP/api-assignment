import styled from "styled-components";

export const TaskListContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
  text-align: center;

  @media (max-width: 600px) {
    padding: 1rem;
    max-width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background: #fff;
    margin: 0.5rem 0;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid #ccc;
    color:#000;
  }

  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 3px;
    margin-top:10px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 80%;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color :#000;

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const AddTaskButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 0.3rem 0.8rem;
  }
`;
