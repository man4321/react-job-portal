import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { fetchCandidates, shortList, reject } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./jobPortal.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    margin: "16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "200px",
    width: "200px",
  },
});
function CandidateProfile(props) {
  const classes = useStyles();
  const { candidatesData, fetchCandidates, shortList, reject } = props;
  const [data, setData] = useState({ id: "", Image: "", name: "" });
  useEffect(() => {
    if (candidatesData === undefined) fetchCandidates();
    const userData = candidatesData.filter((candi) =>
      window.location.pathname.includes(candi.id)
    );
    setData(...userData);
  }, [fetchCandidates]);
  return (
    <div className="cards">
      <Card className={classes.root}>
        {data && (
          <CardContent>
            <img src={data.Image} className={classes.media} />
            <Typography>{data.name}</Typography>
          </CardContent>
        )}
        <CardActions>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                shortList(data);
              }}
            >
              Shortlist
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => {
                reject(data);
              }}
            >
              Reject
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    candidatesData: state.candidatesData,
  };
};
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCandidates,
      shortList,
      reject,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(CandidateProfile);
