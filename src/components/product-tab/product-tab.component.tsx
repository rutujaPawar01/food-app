import * as React from 'react';
import { Tab, Tabs, Box, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface LinkTabProps {
  label?: string;
  href?: string;
}

const useStyles = makeStyles({
  customTab: {
    "& .MuiTab-root": {
      borderBottom: '1px solid black',
    },
    "& .Mui-selected": {
      border: '1px solid black',
      borderBottomStyle: 'none',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
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
    <Box sx={{ width: '100%', mt:2 }}>
      <Tabs value={value} onChange={handleChange} className={classes.customTab}>
        {categories.map(item => <LinkTab label={item.label} href="/" />)}
      </Tabs>
    </Box>
  );
}
