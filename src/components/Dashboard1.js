import {
    makeStyles,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    InputBase,
  } from "@material-ui/core/";
  import { red } from "@material-ui/core/colors";
  import React from "react";
  import logo from "../userlogo.png";
  import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
  import SearchIcon from "@material-ui/icons/Search";
  
  const useStyles = makeStyles((theme) => ({
    head: {
      padding: "10px",
    },
    card: {
      margin: "5px",
      padding: "5px",
      '&:hover': {
        backgroundColor: "grey",
      },
    },
    logo: {
      height: "50px",
      width: "50px",
      borderRadius: "50%",
    },
    search: {
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      border: '2px solid',
      outline: 'none',
      padding: '10px',
      margin: '5px',
      background: 'white',
      borderRadius: '5px'
    },
  })
  );
  
  const arr = [{
  
    "name": "Sandip Rathod",
    "date": "15th Feb 2022 "
  },
  {
    "name": "Shubham Kadu",
    "date": "1st December 2021"
  },
  {
    "name": "Aniket Raut",
    "date": "15 July 2021"
  },
  {
    "name": "Komesh Waghade",
    "date": "20th June 2021"
  }]
  
  const Dashboard1 = () => {
    const classes = useStyles();
    return (
      <div>
        <div className={classes.search}>
          <InputBase placeholder="Search Patient" />
          <SearchIcon />
        </div>
        {
          arr.map((item, index) => {
            return (
              <Card className={classes.card} sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      <img src={logo} alt="logo" className={classes.logo}></img>
                    </Avatar>
                  }
                  action={
                    <IconButton color="secondary" aria-label="settings">
                      <FiberManualRecordIcon />
                    </IconButton>
                  }
                  title={item.name}
                  subheader={item.date}
                />
              </Card>
            );
          })
        }
      </div >
    );
  }
  
  export default Dashboard1;