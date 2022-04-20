import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import * as Loader from "react-spinners";
import { css } from "@emotion/react";
import { Button, Container, Image } from "react-bootstrap";

function MaidDetail() {
  const override = css`
    position: absolute;
    left: 30%;
    top: 45%;
  `;
  const [loading, setloading] = React.useState(true);
  const [maidDetail, setmaidDetail] = React.useState({});
  const url = `http://localhost:3000/api/v1/maids/maid/${useParams().maidId}`;

  React.useEffect(() => {
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        setloading(false);
        setmaidDetail(res.data.Maid);
      })
      .catch((err) => {
        //setloading(false);
        //error page;
        console.log(err);
      });
  });

  return (
    <>
      {/* <Loader.BarLoader
        color="gray"
        loading={loading}
        css={override}
        size={80}
      /> */}
      <Container style={{ width: "800px", marginTop: "50px", marginRight: "auto", marginLeft: "auto", position:"relative" }}>
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "5px" }}>
          <Container>
            <h4>John Doe</h4>
            <h6 style={{ marginTop: "10px" }}>Average Ratings: 4</h6>
            <h6 style={{ marginTop: "10px" }}>Price: 3000</h6>
          </Container>
          <Image src="https://cdn.monsterchildren.com/wp-content/uploads/2020/10/02234139/rob-monster-children-850x850.jpg" style={{ width: "150px", height: "150px" }} />
        </Container>
        <Container style={{ padding: "5px", borderBottom: "1px solid gray", fontSize: "20px", marginTop: "20px" }}>
          Cleaning | Cooking | Laundry | Eldery Care
        </Container>
        <Link to="/checkout" state={{ maid: maidDetail }}>
          <Button variant="secondary" style={{ marginTop: "20px", position:"absolute", right:"0", left: "auto" }}>Book Now</Button>
        </Link>
      </Container>
    </>
  );
}

export default MaidDetail;
