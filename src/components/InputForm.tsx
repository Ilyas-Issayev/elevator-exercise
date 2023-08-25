import React from "react";
import { useForm, SubmitHandler, UseFormReturn } from "react-hook-form";
import styled from "styled-components";

interface FormData {
  lifts: string;
  floors: string;
}

interface InputFormProps {
  onSubmit: SubmitHandler<FormData>;
  register: UseFormReturn<FormData>["register"];
}

const StyledInputForm = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input`
    padding: 11px 10px;
    font-size: 0.75rem;
    border: 2px #818CF8 solid;
    border-radius: 5px;
    background: #fff;
    outline: none;
    width: 100%;
`

const StyledLabel = styled.label`
    font-size: 0.75rem;
    color: #818CF8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 7px;
    padding: 0 3px;
    background: #fff;
    width: fit-content;
`

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: calc(100% - 22px);
position: static;
`

const StyledButton = styled.button`
    &:active{
        transform: translate(3px, 3px);
    }
    margin-top: 10px;
    padding: 5px 10px; 
    background: #818CF8;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
`

const InputForm: React.FC<InputFormProps> = ({ onSubmit, register }) => {
  const { handleSubmit } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    const newData = {
      ...data,
      lifts: data.lifts,
      floors: data.floors,
    };
    onSubmit(newData);
  };

  return (
    <StyledInputForm>
      <StyledDiv>
        <StyledLabel>
          Lifts:
        </StyledLabel>
        <StyledInput
          type="number"
          required
          {...register("lifts")}
        />
      </StyledDiv>
      <StyledDiv>
        <StyledLabel>
          Floors:
        </StyledLabel>
        <StyledInput
          type="number"
          required
          {...register("floors")}
        />
      </StyledDiv>
      <StyledButton onClick={handleSubmit(handleFormSubmit)}>Submit</StyledButton>
    </StyledInputForm>
  );
};

export default InputForm;
