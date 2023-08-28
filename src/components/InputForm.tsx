import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface FormData {
  lifts: string;
  floors: string;

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

const InputForm = () => {
  const { register } = useFormContext<FormData>();


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
    </StyledInputForm>
  );
};

export default InputForm;
