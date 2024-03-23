function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("emailaddress").value,
      message: document.getElementById("projectsummary").value,
    };
  
    const serviceID = "service_ucezivv";
    const templateID = "Ytemplate_iv036bn";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("emailaddress").value = "";
          document.getElementById("projectsummary").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }