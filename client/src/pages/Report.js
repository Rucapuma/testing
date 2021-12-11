import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";


function Report() {


    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );


    let history = useHistory();
    const [formData, setFormData,] = useState("");
    const { authState } = useContext(AuthContext);
    const id  = localStorage.id;

    useEffect(() => {
        console.log(authState);
        console.log(localStorage);
        axios.get(`http://localhost:3001/forms/basicinfo/?id=${id}`).then((response) => {
          setFormData(response.data);
        });
      }, []);
    

  return (
    <><div className="loginContainer">
    <div className="basicInfo">
      {" "}
      <h1> Referral Report </h1>
      <ColoredLine color="Gray" />
      <h1> student_initials: abc </h1>
      <h1> student_agency: school1 </h1>
      <h1> student_agency_zip: 32095 </h1>
      <h1> relation: Counselor </h1>
      <h1> hr_teacher: john </h1>
      <h1> grade_level: 3 </h1>
      <h1> gender: male </h1>
      <h1> ethnicity: asian </h1>
      <h1> living_status: not homeless </h1>
      <h1> living_status_note: n/a </h1>
      <h1> background: n/a </h1>
      <h1> style_pref: n/a </h1>
      <h1> size_type: youth </h1>
      <h1> pant_size: 28 </h1>
      <h1> top_size: medium </h1>
      <h1> outfit_combo: none </h1>
      <h1> bottom_color: blue </h1>
      <h1> top_colors: black </h1>
      <h1> bra_info: none </h1>
      <h1> underwear: none </h1>
      <h1> shoe_size: 11 </h1>
      <h1> socks: yes </h1>
      <h1> hygiene_kit: none </h1>
      <h1> hygiene_items: none </h1>
      <h1> feminine_hygiene: none </h1>
      <h1> school_supplies: none </h1>
      
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

export default Report;