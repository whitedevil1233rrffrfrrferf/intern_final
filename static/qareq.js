<<<<<<< HEAD
document.getElementById("form_id").addEventListener('submit',function(event){
    event.preventDefault();
    const formData = {
        role: document.getElementById('role').value,
        req: document.getElementById('req').value,
        assign: document.getElementById('assign').value,
        target_date: document.getElementById('target_date').value,
    };
    
    const templateParams = {
        role: formData.role,
        req: formData.req,
        assign: formData.assign,
        target_date: formData.target_date,
        email:config.email
    };
    emailjs.send(config.service_id, config.template_id, templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send email.');
    });
=======
document.getElementById("form_id").addEventListener('submit',function(event){
    event.preventDefault();
    const formData = {
        role: document.getElementById('role').value,
        req: document.getElementById('req').value,
        assign: document.getElementById('assign').value,
        target_date: document.getElementById('target_date').value,
    };
    
    const templateParams = {
        role: formData.role,
        req: formData.req,
        assign: formData.assign,
        target_date: formData.target_date,
        email:config.email
    };
    emailjs.send(config.service_id, config.template_id, templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send email.');
    });
>>>>>>> 71c6430a (updated)
})