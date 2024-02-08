import emailjs from '@emailjs/browser';
console.log("All well");
//var submitbtn = document.getElementById("submit");
//submitbtn.addEventListener("click", sendmail);
function sendmail() {
    alert("Iko supchek! ");
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const service_id = "service_o80g188";
    const template_id = "template_meed5oh";
    const public_key = "jnfSL9hIpXqmATE3I";

    emailjs.send(service_id, template_id, params, public_key)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Meaage sent successfully");

            })
        .catch((err) => console.log(err));
};




export { sendmail };