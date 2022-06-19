import * as React from 'react';
import { Tab, Tabs, Box, styled, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface LinkTabProps {
  label?: string;
  href?: string;
}

const useStyles = makeStyles((theme: Theme) => {
  console.log('theme', theme.palette.text);
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

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function ProductTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const classes = useStyles();
  const categories = [
    { label: "Pizza" },
    { label: "Burger" }
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 2, color: 'text.primary' }}>
      <Tabs value={value} onChange={handleChange} className={classes.customTab}>
        {categories.map(item => <LinkTab label={item.label} href="/" />)}
      </Tabs>
    </Box>
  );
}
