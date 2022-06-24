import React, { useState, useEffect } from "react";
import axios from "axios";
import BizCard from "./BizCard";
import { Grid } from "@mui/material";

const AllBiz = () => {
  const [biz, setBiz] = useState([]);

  const getBiz = async () => {
    try {
      const res = await axios.get("http://localhost:8000/biz/getall");
      console.log(res.data);
      setBiz(res.data);
    } catch (err) {
      console.log("err");
    }
  };
  useEffect(() => {
    getBiz();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "3rem" }}>
        Support these little ones!
      </h1>
      <div className="bizcards">
        <Grid container spacing={5}>
          {biz?.map((x, y) => {
            return (
              <Grid key={y} item xs={12} sm={6}>
                <BizCard biz={x} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default AllBiz;
