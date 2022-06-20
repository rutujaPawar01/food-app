import * as React from 'react';
import { Tab, Tabs, Box, styled, Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Icategories } from '../../pages/menu/categories.type';

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: Icategories;
}

const useStyles = makeStyles((theme: Theme) => {
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

interface IproductTabs {
  currentCategory: Icategories,
  setCurrentCategory: React.Dispatch<React.SetStateAction<Icategories>>
}


export default function ProductTabs({ currentCategory, setCurrentCategory }: IproductTabs) {
  const classes = useStyles();
  const [categories, setCategories] = useState<Icategories[]>();

  useEffect(() => {
    axios.get('http://54.169.31.224:3000/category')
      .then(function (response) {
        setCategories([...response.data.data]);
        setCurrentCategory(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (event: React.SyntheticEvent, category: Icategories) => {
    setCurrentCategory(category);
  };

  return (
    <Box sx={{ width: '100%', mt: 2, color: 'text.primary' }}>
      <Tabs value={currentCategory} onChange={handleChange} className={classes.customTab}>
        {categories && categories.map(item => <LinkTab label={item.name} href="/" value={item} />)}
      </Tabs>
    </Box>
  );
}
