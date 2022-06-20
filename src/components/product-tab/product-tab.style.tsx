import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    customTab: {

      "& .MuiTab-root": {
        borderBottom: '1px solid black',
        color: theme.palette.text.primary,
      },
      "& .Mui-selected": {
        border: '1px solid black',
        borderBottomStyle: 'none',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      "& .MuiTabs-flexContainer": {
        "& .Mui-selected": {
          color: theme.palette.text.primary,
        },
      }
    }
  }
});