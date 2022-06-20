import { Button, styled } from '@mui/material';

export const CustomButton = styled(Button)`
   border-radius: 50px;
   text-transform: none; 
   background-color: ${(props) => props.theme.palette.info.main};
   font-size: 1rem;
`;