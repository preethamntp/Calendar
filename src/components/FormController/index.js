import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Form,
  CustomButton,
  TextField,
  ButtonContainer,
  InputForm
} from "./styledComponents";
import { useFormik } from "formik";
import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Index({ openProps, selectedDate }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      email: "",
      description: "",
      date: selectedDate
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validateForm: EventSchema
  });

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  // const [eventForm, setEventForm] = useState({
  // title: "",
  // email: "",
  // description: "",
  // date: selectedDate,
  // isValid: false
  // });

  useEffect(() => {
    setOpen(openProps);
  }, [openProps]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleInputChange = e => {
  //   setEventForm(prevState => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  // const submitForm = () => {
  //   console.log(eventForm);
  // };

  const body = (
    // <form onSubmit={formik.handleSubmit}>
    // ({ errors, touched, isValidating }) => (
    <div style={modalStyle} className={classes.paper}>
      <div className="main-content">
        <Form
          // onSubmit={e => {
          //   e.preventDefault();
          //   submitForm();
          // }}
          onSubmit={formik.handleSubmit}
        >
          <div>
            <InputForm
              placeholder="Title"
              // value={eventForm.title}
              // onChange={handleInputChange}
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              // error={!formik.values.title && Boolean(formik.errors.title)}
              error={formik.validateForm.title}
            />
            <InputForm
              placeholder="Email"
              // value={eventForm.email}
              // onChange={handleInputChange}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.touched.email ? formik.errors.email : ""}
              error={Boolean(formik.validateForm.isValid)}
            />
            {/* {errors.email && touched.email && <div>{errors.email}</div>} */}

            <InputForm
              placeholder="Date"
              // value={eventForm.date}
              // onChange={handleInputChange}
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              error={!formik.values.date && Boolean(formik.errors.date)}
            />

            <TextField
              placeholder="Description"
              // value={eventForm.description}
              // onChange={handleInputChange}
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              error={Boolean(!formik.errors.description)}
            />
            <ButtonContainer>
              <CustomButton
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Create Event
              </CustomButton>
            </ButtonContainer>
          </div>
        </Form>
      </div>
    </div>
  );
  // </form>
  // );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
