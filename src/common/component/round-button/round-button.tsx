import { Button, styled } from '@mui/material';
import React from 'react';

const CustomButton = styled(Button)`
   border-radius: 50px;
   text-transform: none; 
   background-color: ${(props) => props.theme.palette.info.main};
   font-size: 1rem;
`;

function RoundButton(props:{children: string}) {
    return (
        <CustomButton variant="contained">
            {props.children}
        </CustomButton>
    );
}

export default RoundButton;
