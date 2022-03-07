import React from "react";
import { useState } from "react";
import  "./ConditionSubmit.css";

function ConditionSubmit() {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [city, setCity] = useState();
  let [date, setDate] = useState();
  let [time, setTime] = useState();
  let [description, setDescription] = useState();

  const cities = [
    { id: "Berovo", name: "Berovo" },
    { id: "Delcevo", name: "Delcevo" },
    { id: "Kocani", name: "Kocani" },
    { id: "MakedonskaKamenica", name: "Makedonska Kamenica" },
    { id: "Pehcevo", name: "Pehcevo" },
    { id: "Probistip", name: "Probistip" },
    { id: "Stip", name: "Stip" },
    { id: "Vinica", name: "Vinica" },
    { id: "Kratovo", name: "Kratovo" },
    { id: "KrivaPalanka", name: "Kriva Palanka" },
    { id: "Kumanovo", name: "Kumanovo" },
    { id: "Bitola", name: "Bitola" },
    { id: "DemirHisar", name: "Demir Hisar" },
    { id: "Krusevo", name: "Krusevo" },
    { id: "Prilep", name: "Prilep" },
    { id: "Resen", name: "Resen" },
    { id: "Gostivar", name: "Gostivar" },
    { id: "Tetovo", name: "Tetovo" },
    { id: "Skopje", name: "Skopje" },
    { id: "Bogdanci", name: "Bogdanci" },
    { id: "Gevgelija", name: "Gevgelija" },
    { id: "Radovis", name: "Radovis" },
    { id: "Strumica", name: "Strumica" },
    { id: "Valandovo", name: "Valandovo" },
    { id: "Debar", name: "Debar" },
    { id: "Kicevo", name: "Kicevo" },
    { id: "MakedonskiBrod", name: "Makedonski Brod" },
    { id: "Ohrid", name: "Ohrid" },
    { id: "Struga", name: "Struga" },
    { id: "DemirKapija", name: "Demir Kapija" },
    { id: "Kavadarci", name: "Kavadarci" },
    { id: "Negotino", name: "Negotino" },
    { id: "SvetiNikole", name: "Sveti Nikole" },
    { id: "Veles", name: "Veles" },
  ];
  let citiesList =
    cities.length > 0 &&
    cities.map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      );
    }, this);

  function submitForm(e) {
    
    if (city == null || city === "") {
      alert("You must select a city to submit your form!");
      e.preventDefault();
    } else {
      alert("Thank you for submitting information for weather in your city!");
    }
  }

  return (
    <div className="formContainer">
      <h1 className="white">
        Please enter your thoughts of the weather conditions in your town
      </h1>
      <form onSubmit={submitForm}>
        <div className="container">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            maxLength="15"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="lastName">Last Name: </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            maxLength="20"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="cities">City: </label>
          <select
            id="cities"
            value={city}
            defaultValue={"default"}
            required
            onChange={(e) => setCity(e.target.value)}
          >
            <option value={"default"} disabled>
              Choose a City
            </option>
            {citiesList}
          </select>
        </div>
        <div className="container">
          <label htmlFor="date">Select date: </label>
          <input
            id="date"
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="time">Select time: </label>
          <input
            id="time"
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="container">
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            type="text"
            placeholder="Describe weather condition in your city"
            maxLength="100"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ConditionSubmit;
