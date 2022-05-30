function sendEmail(e) {
  e.preventDefault();
  user = document.getElementById("name");
  message = document.getElementById("message");
  phone = document.getElementById("phone");
  email = document.getElementById("email");

  Email.send({
    SecureToken: "e3f0a22e-7191-451c-a9eb-e7f0f7523d55",
    To: "pushinternational.org@gmail.com",
    From: `pushinternational.org@gmail.com`,
    Subject: `Get in touch from ${user.value}`,
    Body: `
	    <h1>${user.value} is trying to get in touch with you</h1>
	    <h2>${user.value}'s email ${email.value}</h2>
		<h2>${user.value}'s Phone Number ${phone.value}</h2>
	    <h2>${user.value}'s Message</h2>
	    <h3>${message.value}</h3>
	     `,
  }).then((message) => {
    if (message == "OK") {
      alert("Thank you, we will get back to you shortly.");
    } else {
      alert("Error Sending Email");
    }
  });
  user.value = "";
  message.value = "";
  phone.value = "";
  email.value = "";
}

function sendVol1(e) {
  e.preventDefault();

  Email.send({
    SecureToken: "e3f0a22e-7191-451c-a9eb-e7f0f7523d55",
    To: "pushinternational.org@gmail.com",
    From: `pushinternational.org@gmail.com`,
    Subject: `${e.target.name.value} wants to volunteer`,
    Body: `
	    <h1>${e.target.name.value}'s Details</h1>
	    <h2>Name: ${e.target.name.value}</h2>
	    <h2>Phone Number: ${e.target.phone.value}</h2>
	    <h2>Email: ${e.target.email.value}</h2>
	    <h2>Message: ${e.target.message.value}</h2>
	     `,
  }).then((message) => {
    if (message == "OK") {
      alert(
        "Thank you for your interest in volunteering with us. We will get back to you shortly."
      );
      window.location.href = "thank.html";
    } else {
      alert("Error Sending Email");
    }
  });
  e.target.name.value = "";
  e.target.phone.value = "";
  e.target.email.value = "";
  e.target.message.value = "";
}

function sendVol2(e) {
  e.preventDefault();

  Email.send({
    SecureToken: "e3f0a22e-7191-451c-a9eb-e7f0f7523d55",
    To: "pushinternational.org@gmail.com",
    From: `pushinternational.org@gmail.com`,
    Subject: `${e.target.name.value} wants to Patner up`,
    Body: `
	    <h1>${e.target.name.value}'s Details</h1>
	    <h2>Name: ${e.target.name.value}</h2>
	    <h2>Phone Number: ${e.target.phone.value}</h2>
        <h2>Amount: #${e.target.amount.value}</h2>
	    <h2>Email: ${e.target.email.value}</h2>
	    <h2>Message: ${e.target.message.value}</h2>
	     `,
  }).then((message) => {
    if (message == "OK") {
      alert(
        "Thank you for your interest in partner with us. Please Proceed to donating your amount."
      );
      window.location.href = "donate.html";
    } else {
      alert("Error Sending Email");
    }
  });
  e.target.name.value = "";
  e.target.amount.value = "";
  e.target.phone.value = "";
  e.target.email.value = "";
  e.target.message.value = "";
}
