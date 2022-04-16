import React from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl, Container, Button } from "react-bootstrap";

function Filters(props) {
  const handleClick = (e) => {
    let newArray = [];
    const arrayOfBoxes = Array.from(
      e.target.parentElement.parentElement.children
    );
    arrayOfBoxes.map((el) => {
      if (el.children[0].checked === true) newArray.push(el.children[0].value);
      return 0;
    });

    const prevObj = { ...props.filters };
    prevObj[e.target.name] = newArray;
    props.setfilters({ prevObj });
  };

  //for price input and rating Average
  const handleInput = (e) => {
    const prevObj = { ...props.filters };
    prevObj[e.target.name] = e.target.value;
    props.setfilters({ prevObj });
  };

  return (
    <Container>
      <InputGroup className="mb-3" size="sm">
        <DropdownButton
          variant="outline-secondary"
          title="Select Services"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Cleaning</Dropdown.Item>
          <Dropdown.Item href="#">Cooking</Dropdown.Item>
          <Dropdown.Item href="#">Laundry</Dropdown.Item>
          <Dropdown.Item href="#">Elderly Care</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          variant="outline-secondary"
          title="Prices"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">1000-2000</Dropdown.Item>
          <Dropdown.Item href="#">2000-3000</Dropdown.Item>
          <Dropdown.Item href="#">3000-4000</Dropdown.Item>
          <Dropdown.Item href="#">4000-5000</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-label="Text input with dropdown button" placeholder="search for maids.." />
        <DropdownButton
          variant="outline-secondary"
          title="Avg. Ratings"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">1</Dropdown.Item>
          <Dropdown.Item href="#">2</Dropdown.Item>
          <Dropdown.Item href="#">3</Dropdown.Item>
          <Dropdown.Item href="#">4</Dropdown.Item>
          <Dropdown.Item href="#">5</Dropdown.Item>
        </DropdownButton>
        <Button variant="outline-success">Search</Button>
      </InputGroup>
      {/* <h5>
        show following filters: Services(Cleaning,Cooking,Laundry,Elederly Care,
        Baby Sitting) Price range(2000 to 5000) RatingaAverage (1, 2,3,4,5)
        Gender(Male, Female, Other)
      </h5> */}
    </Container>
  );
}

export default Filters;
