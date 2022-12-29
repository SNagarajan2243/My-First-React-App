import React from "react";

import Card from "../UI/Card";

import "./InputDetail.css";

import InputList from "./InputList";

const InputDetail = (props) => {
  return (
    <Card>
      {props.details.length ? (
        <ul className="listMargin">
          {props.details.map((detail) => {
            return (
              <InputList
                detail={detail}
                deleteHandler={props.deleteHandler}
                key={detail.key}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className="infoAlign">No Users Details</h1>
      )}
    </Card>
  );
};

export default InputDetail;
