import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';
import EV from '../images/ev.jpg'




export default function ImageDisplay() {
  

  return (
    <div >
      <img src={EV} width="200"  alt="EV"/>
      
      <img src={EV} width="200" alt="EV"/>
      <img src={EV} width="200" alt="EV"/>
    </div>
    
  );
}
