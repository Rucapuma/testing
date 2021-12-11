import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";


function Test() {

    let history = useHistory();
    const [formData, setFormData,] = useState("");
    const { authState } = useContext(AuthContext);
    const id  = localStorage.id;

    useEffect(() => {
        console.log(authState);
        console.log(localStorage);
        axios.get(`http://localhost:3001/auth/basicinfo/?id=${id}`).then((response) => {
          setFormData(response.data);
        });
      }, []);
    

  return (
    <><div className="loginContainer">
    <div className="basicInfo">
      {" "}
      <h1> student_initials: {formData.student_initials} </h1>
      <h1> student_agency: {formData.student_agency} </h1>
      <h1> student_agency_zip: {formData.student_agency_zip} </h1>
      <h1> relation: {formData.relation} </h1>
      <h1> hr_teacher: {formData.hr_teacher} </h1>
      <h1> grade_level: {formData.grade_level} </h1>
      <h1> gender: {formData.gender} </h1>
      <h1> ethnicity: {formData.ethnicity} </h1>
      <h1> living_status: {formData.living_status} </h1>
      <h1> living_status_note: {formData.living_status_note} </h1>
      <h1> background: {formData.background} </h1>
      <h1> style_pref: {formData.style_pref} </h1>
      <h1> size_type: {formData.size_type} </h1>
      <h1> pant_size: {formData.pant_size} </h1>
      <h1> top_size: {formData.top_size} </h1>
      <h1> outfit_combo: {formData.outfit_combo} </h1>
      <h1> bottom_color: {formData.bottom_color} </h1>
      <h1> top_colors: {formData.top_colors} </h1>
      <h1> bra_info: {formData.bra_info} </h1>
      <h1> underwear: {formData.underwear} </h1>
      <h1> shoe_size: {formData.shoe_size} </h1>
      <h1> socks: {formData.socks} </h1>
      <h1> hygiene_kit: {formData.hygiene_kit} </h1>
      <h1> hygiene_items: {formData.hygiene_items} </h1>
      <h1> feminine_hygiene: {formData.feminine_hygiene} </h1>
      <h1> school_supplies: {formData.school_supplies} </h1>
      <h1> status: {formData.status} </h1>
      <h1> status_note: {formData.status_note} </h1>
      <h1> volunteer: {formData.volunteer} </h1>
      <h1> referrer: {formData.referrer} </h1>
      
      <button id="printPage"
            onClick={() => {
             window.print();
            }}
          >
            Print Out Page
          </button>

    
    </div>




    
  </div></>
  );
}

export default Test;