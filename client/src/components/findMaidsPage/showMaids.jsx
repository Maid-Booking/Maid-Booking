import { React, useState, useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Loader from "react-spinners";
import { css } from "@emotion/react";
function ShowMaids(props) {
  const [loading, setloading] = useState(true);
  const [maids, setmaids] = useState([]);

  const override = css`
    position: absolute;
    left: 30%;
    top: 45%;
  `;
  const url = "http://localhost:3000/api/v1/maids/";

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
      params: props.filters,
    })
      .then((res) => {
        setmaids(res.data.data.Maids);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        //show error component
        console.log(err);
      });
  }, []); // eslint-disable-line

  return (
    <>
      <Loader.BarLoader
        color="gray"
        loading={loading}
        css={override}
        size={80}
      />
      <Container style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Container style={{ width: '35%', border: "1px solid gray", borderRadius: "3px", marginBottom: "30px" }}>
          <Container style={{ padding: "5px", borderBottom: "1px solid gray" }}>
            Cleaning | Cooking | Laundry | Eldery Care
          </Container>
          <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "5px" }}>
            <h5>
              John Doe
            </h5>
            <Image src="https://cdn.monsterchildren.com/wp-content/uploads/2020/10/02234139/rob-monster-children-850x850.jpg" style={{ width: "120px", height: "120px" }} />
          </Container>
          <h6 style={{ marginTop: "10px" }}>Average Ratings: 4</h6>
          <h6 style={{ marginTop: "10px" }}>Price: 3000</h6>
          <Link
            to="/maidDetails/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button variant="secondary" style={{ marginBottom: '5px' }}>Learn More</Button>
          </Link>
        </Container>
      </Container>
    </>
  );
}
export default ShowMaids;
