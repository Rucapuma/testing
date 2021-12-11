import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function Refer() {
  const initialValues = {
    student_initials: "",
	  student_agency: "",
	  student_agency_zip: 0,
	  relation: "",
    hr_teacher: "", 
    grade_level: "",
    gender: "",
    ethnicity: "",
    living_status: "",
    living_status_note: "",
    background: "",
    style_pref: "",
    size_type: "",
    pant_size: "",
    top_size: "",
    outfit_combo: "",
    bottom_color: "",
    top_colors: "",
    bra_info: "",
    underwear: "",
    shoe_size: "",
    socks: "",
    hygiene_kit: "",
    hygiene_items: "",
    feminine_hygiene: "",
    school_supplies: "",
    status: 1,
    status_note: "",
    volunteer: 0,
    referrer: "1",
  };


  const validationSchema = Yup.object().shape({
    // first_name: Yup.string().min(4).max(20).required(),
    // last_name: Yup.string().min(4).max(20).required(),
    // email: Yup.string().min(7).max(40).required(),
    // password: Yup.string().min(4).max(20).required(),
    // phone: Yup.string().min(4).max(12).required(),
    // agency: Yup.string().min(4).max(20).required(),
    // agency_zip: Yup.string().min(5).max(5).required(),
    // nearest_location: Yup.string().min(4).max(20).required(),
  });


  let history = useHistory();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/referrals", data).then(() => {
      console.log(data);
      history.push("/report");
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <ErrorMessage name="referrer" component="span" />
          <Field
            autoComplete="off"
            id="referrer"
            name="referrer"
            hidden
          />

          
          <ErrorMessage name="status" component="span" />
          <Field
            autoComplete="off"
            id="status"
            name="status"
            hidden
          />

           <label>Initials: </label>
          <ErrorMessage name="student_initials" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="student_initials"
            name="student_initials"
            placeholder="(Enter student_initials...)"
          />

          <label>Student Agency: </label>
          <ErrorMessage name="student_agency" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="student_agency"
            name="student_agency"
            placeholder="(Enter student_agency...)"
          />

          <label>Student Agency Zipcode: </label>
          <ErrorMessage name="student_agency_zip" component="span" />
          <Field
            autoComplete="off"
            id="student_agency_zip"
            name="student_agency_zip"
            placeholder="(Enter student_agency_zip...)"
          />

          <label>Relation: </label>
          <ErrorMessage name="relation" component="span" />
          <Field
            autoComplete="off"
            id="relation"
            name="relation"
            placeholder="(Enter relation...)"
          />

          <label>Homeroom Teacher: </label>
          <ErrorMessage name="hr_teacher" component="span" />
          <Field
            autoComplete="off"
            id="hr_teacher"
            name="hr_teacher"
            placeholder="(Enter hr_teacher...)"
          />

          <label>Grade Level: </label>
          <ErrorMessage name="grade_level" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="grade_level"
            name="grade_level"
            placeholder="(Enter grade_level...)"
          />

          <label>Gender: </label>
          <ErrorMessage name="gender" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="gender"
            name="gender"
            placeholder="(Enter gender...)"
          />

          <label>Ethnicity: </label>
          <ErrorMessage name="ethnicity" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="ethnicity"
            name="ethnicity"
            placeholder="(Enter your ethnicity...)"
          />

          <label>Living Status: </label>
          <ErrorMessage name="living_status" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="living_status"
            name="living_status"
            placeholder="(Enter our living_status...)"
          />

          <label>Living Status Note: </label>
          <ErrorMessage name="living_status_note" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="living_status_note"
            name="living_status_note"
            placeholder="(Select living_status_note...)"
          />

          <label>background: </label>
          <ErrorMessage name="background" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="background"
            name="background"
            placeholder="(Select background...)"
          />

          <label>Style Preference: </label>
          <ErrorMessage name="style_pref" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="style_pref"
            name="style_pref"
            placeholder="(Select style_pref...)"
          />

          <label>Size Type: </label>
          <ErrorMessage name="size_type" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="size_type"
            name="size_type"
            placeholder="(Select size_type...)"
          />

          <label>Pant Size: </label>
          <ErrorMessage name="pant_size" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="pant_size"
            name="pant_size"
            placeholder="(Select pant_size...)"
          />

          <label>Top Size: </label>
          <ErrorMessage name="top_size" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="top_size"
            name="top_size"
            placeholder="(Select top_size...)"
          />

          <label>Outfit combo: </label>
          <ErrorMessage name="outfit_combo" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="outfit_combo"
            name="outfit_combo"
            placeholder="(Select outfit_combo...)"
          />

          <label>bottom color: </label>
          <ErrorMessage name="bottom_color" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="bottom_color"
            name="bottom_color"
            placeholder="(Select bottom_color...)"
          />

          <label>top colors: </label>
          <ErrorMessage name="top_colors" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="top_colors"
            name="top_colors"
            placeholder="(Select top_colors...)"
          />

          <label>bra info: </label>
          <ErrorMessage name="bra_info" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="bra_info"
            name="bra_info"
            placeholder="(Select bra_info...)"
          />

          <label>underwear: </label>
          <ErrorMessage name="underwear" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="underwear"
            name="underwear"
            placeholder="(Select underwear...)"
          />

          <label>shoe size: </label>
          <ErrorMessage name="shoe_size" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="shoe_size"
            name="shoe_size"
            placeholder="(Select shoe_size...)"
          />

          <label>socks: </label>
          <ErrorMessage name="socks" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="socks"
            name="socks"
            placeholder="(Select socks...)"
          />

          <label>hygiene kit: </label>
          <ErrorMessage name="hygiene_kit" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="hygiene_kit"
            name="hygiene_kit"
            placeholder="(Select hygiene_kit...)"
          />

          <label>hygiene items: </label>
          <ErrorMessage name="hygiene_items" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="hygiene_items"
            name="hygiene_items"
            placeholder="(Select hygiene_items...)"
          />

          <label>feminine hygiene: </label>
          <ErrorMessage name="feminine_hygiene" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="feminine_hygiene"
            name="feminine_hygiene"
            placeholder="(Select feminine_hygiene...)"
          />

          <label>School Supplies: </label>
          <ErrorMessage name="school_supplies" component="span" />
          <Field
            autoComplete="off"
            type="text"
            id="school_supplies"
            name="school_supplies"
            placeholder="(Select school_supplies...)"
          />

          <button type="submit"> Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Refer;
