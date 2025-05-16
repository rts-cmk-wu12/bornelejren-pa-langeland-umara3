
import React, { useState } from "react";
 
const Sponsor = () => {

  const [formData, setFormData] = useState({

    type: "",

    name: "",

    email: "",

    address: "",

    phone: "",

    amount: ""

  });
 
  const handleChange = (e) => {

    setFormData((prev) => ({

      ...prev,

      [e.target.name]: e.target.value

    }));

  };
 
  const handleSubmit = async (e) => {

    e.preventDefault();
 
    try {

      const res = await fetch("/api/donations", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(formData)

      });
 
      if (res.ok) {

        alert("Tak for din støtte!");

        setFormData({

          type: "",

          name: "",

          email: "",

          address: "",

          phone: "",

          amount: ""

        });

      } else {

        alert("Noget gik galt. Prøv igen.");

      }

    } catch (err) {

      console.error("Fejl ved indsendelse:", err);

      alert("Der opstod en fejl.");

    }

  };
 
  return (
<section className="sponsor-container">
<h1 className="tilmeld__heading">Tilmeld som sponsor</h1>
<form onSubmit={handleSubmit} className="sponsor-form">
<label>

          Støttetype:
<select name="type" value={formData.type} onChange={handleChange} required>
<option value="">-- Vælg --</option>
<option value="børnesponsor">Børnesponsor (4.000 kr)</option>
<option value="lejrsponsor">Lejrsponsor (2.000 kr)</option>
<option value="diplomsponsor">Diplomsponsor (min. 1.000 kr)</option>
</select>
</label>
<label>

          Firmanavn:
<input type="text" name="name" value={formData.name} onChange={handleChange} required />
</label>
<label>

          Email:
<input type="email" name="email" value={formData.email} onChange={handleChange} required />
</label>
<label>

          Adresse:
<input type="text" name="address" value={formData.address} onChange={handleChange} required />
</label>
<label>

          Telefon:
<input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
</label>
<label>

          Beløb (DKK):
<input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
</label>
<button type="submit" className="sponsor-button">

            Tilmeld
</button>
</form>
</section>

  );

};
 
export default Sponsor;

 

