import { CustomButton } from './round-button.style';

function RoundButton(props:{children: string}) {
    return (
        <CustomButton variant="contained">
            {props.children}
        </CustomButton>
    );
}

export default RoundButton;
