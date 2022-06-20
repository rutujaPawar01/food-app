import * as React from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Icategories } from '../../pages/menu/categories.type';
import { LinkTabProps } from './link-tab-props.types';
import { IproductTabs } from './product-tabs.types';
import { useStyles } from './product-tab.style';

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

export default function ProductTabs({ currentCategory, setCurrentCategory }: IproductTabs) {
  const classes = useStyles();
  const [categories, setCategories] = useState<Icategories[]>();

  useEffect(() => {
    /** get all category data */
    axios.get('http://54.169.31.224:3000/category')
      .then(function (response) {
        setCategories([...response.data.data]);
        setCurrentCategory(response.data.data[0]); //default category
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
        {categories && categories.map(item => <LinkTab key={item.slug} label={item.name} href="/" value={item} />)}
      </Tabs>
    </Box>
  );
}
