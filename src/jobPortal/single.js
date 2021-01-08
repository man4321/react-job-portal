import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    margin:'16px',
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media:{
    height:'200px',
    width:'200px'
  }
});

export default function SingleCard(props) {
  const classes = useStyles();
  const {Image,id,name}=props.data;
  // const clickHandler=()=>{
  //   console.log("clicked" +id)
  //   props.history.push('/'+id);
  // }
  return (
    <Link to={`/${id}`} style={{textDecoration:'none'}}>
    <Card className={classes.root}>
      <CardContent>
       <img src={Image} className={classes.media}/>
       <Typography>
         {name}
       </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </Link>
  );
}
