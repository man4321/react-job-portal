import React, { useEffect, useState } from "react";
import SingleCard from "./single";
import "./jobPortal.css";
import { fetchCandidates } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

function Candidates(props) {
  const { fetchCandidates, candidatesData } = props;
  const [data, setData] = useState({ serch: "", data: candidatesData });
  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  const searchHandler = (event) => {
    const name = event.target.value;
    const filteData = candidatesData.filter((candi) => {
      return candi.name.toLowerCase().includes(name.toLowerCase());
    });
    setData({ serch: name, data: filteData });
  };
  return (
    <div>
      <div className="search">
        <div>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={data.serch}
          onChange={(event) => {
            searchHandler(event);
          }}
        />
      </div>
      
      <Typography>All Candidates</Typography>
      <div className="cards">
        {data.serch === ""
          ? candidatesData.map((data) => {
              return <SingleCard key={data.id} data={data} />;
            })
          : data.data.map((data) => {
              return <SingleCard key={data.id} data={data} />;
            })}
      </div>
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
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(Candidates);
