import React from "react";
import { Radio, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiInput-input': {
      fontSize: '14px'
    }
  },
  addressWrapper: {
    padding: '5px',
    margin: '10px',
  },
  selectedAddress: {
    background: '#eee'
  },
  fieldGroup: {
    display: 'flex',
  }
}));

const Field = props => (
  <TextField size="small" InputProps={{ readOnly: true }} {...props} />
);

const FieldGroup = ({ children }) => {
  const { fieldGroup } = useStyles();
  return (
    <div className={fieldGroup}>
      {children}
    </div>
  )
}

const AddressRadios = ({ selectedId, handleChange, addresses }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {addresses.map((address, index) => {
        const isSelected = address.id === selectedId;

        return (
          <div
            className={`
              ${classes.addressWrapper}
              ${isSelected ? classes.selectedAddress : ''}
            `}
            key={address.id}
          >
            <Radio
              checked={isSelected}
              onChange={() => handleChange(address.id)}
            />
            <FieldGroup>
              <Field label="First Name" value={address.first_name} />
              <Field label="Last Name" value={address.last_name} />
            </FieldGroup>
            <FieldGroup>
              <Field label="Company Name" value={address.company_name} fullWidth />
            </FieldGroup>
            <FieldGroup>
              <Field label="Address Line 1" value={address.line_1} fullWidth />
            </FieldGroup>
            <FieldGroup>
              {address.line_2 && (
                <Field label="Address Line 2" value={address.line_2} fullWidth />
              )}
            </FieldGroup>
            <FieldGroup>
              <Field label="City" value={address.city} fullWidth />
            </FieldGroup>
            <FieldGroup>
              <Field label="Post Code" value={address.postcode} />
              <Field label="Country" value={address.country} />
            </FieldGroup>
          </div>
        );
      })}
    </div>
  );
}

export { AddressRadios };
export default AddressRadios;
