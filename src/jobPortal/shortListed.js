import React, { Fragment, useEffect, useState } from "react";
import SingleCard from "./single";
import "./jobPortal.css";
import { fetchCandidates } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

function ShortListed(props) {
  const { fetchCandidates, shortListed } = props;
  const [data, setData] = useState({ serch: "", data: shortListed });
  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);
  console.log(shortListed);
  const searchHandler = (event) => {
    const name = event.target.value;
    const filteData = shortListed.filter((candi) => {
      return candi.name.toLowerCase().includes(name.toLowerCase());
    });
    setData({ serch: name, data: filteData });
  };
  return (
    <div>
      {shortListed.lenght === 0 ?(<div>Nothing to show</div>) : (
        <Fragment>
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
              ? shortListed.map((data) => {
                  return <SingleCard key={data.id} data={data} />;
                })
              : data.data.map((data) => {
                  return <SingleCard key={data.id} data={data} />;
                })}
          </div>
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    candidatesData: state.candidatesData,
    shortListed: state.shortListed,
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

export default connect(mapStateToProps, mapActionToProps)(ShortListed);
