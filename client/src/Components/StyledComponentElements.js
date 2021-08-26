import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    margin: 20px;
`;

export const Subtitle = styled.h4`
    margin: 20px;
`;

export const Wrapper = styled.div`
    background-color: #f2f2f2;
    padding: 1em;
`;

export const Input = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    display: block;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    display: block;
`;

export const LoginButton = styled.button`
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`; 

export const Button = styled.button`
    float: right;
    margin: 10px;
    border-radius: 15px;
    padding: 10px;
    font-size: 1em;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`;

export const HomeSubtitle = styled.h2`
    text-align: center;
    margin: 1em;
    padding: 20px;
`

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    border-radius: 15px;
`

export const ParentTitle = styled.h3`
    text-align: center;
`

export const StyledButton = styled.button`
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #f2f2f2;
        color: black;
    }
    background: black;
    color: #f2f2f2;
    margin-bottom: 1rem;
    border-width: medium;
    border-color: black;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;

    
`

export const StyledSelect = styled.select`
    max-width: 50%;
    height: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    border-width: medium;
    border-color: black;
    border-radius: 10px;
        option {
            color: black;
            background: white;
        }
`
export const StyledOption = styled.option`
    text-align: center;
    background: #f2f2f2;

`

export const ChildDiv = styled.div` 
    
`
export const ParentDiv = styled.div`

`

export const ParentChildDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto); 
    grid-gap: 20; 
`

export const ChoreName = styled.h3`
    text-transform: capitalize;
    text-decoration: underline;
    text-align: center;
`

export const ChoreDesc = styled.p`
    text-align: center;
    padding: .1em;
    display: block;
`

export const ChoreDiv = styled.div`
    white-space: pre-line;
    width: 100%;
    padding: .5em;
    margin: .25em;
    display: grid;
    grid-template-columns: repeat(2, auto); 
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    background: #256ce1;
    color: #f2f2f2;
`

export const DelButton = styled.button`
    text-align: center;
    border-radius: 20px;
    padding: .5em;
    background: black;
    color: white;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        cursor: pointer;
    }
`

export const HouseholdChoreDiv = styled.div`
    white-space: pre-line;
    width: 100%;
    padding: .5em;
    margin: .25em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-style: solid;
    border-color: black;
    border-radius: 20px;
    background: #256ce1;
    color: #f2f2f2;
`