import React from "react";
import Card from "@material-ui/core/Card";
import "./AccountJobCard.scss";

export const AccountJobCard = ({ name, id }) => {
  return (
    <Card className="root-card">
      <h3 className="name">{name}</h3>
      <h4 className="id">{id}</h4>
    </Card>
  );
};

export default AccountJobCard;
