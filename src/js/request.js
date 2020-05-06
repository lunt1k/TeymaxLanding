const form = document.getElementById('formEmail');

form.addEventListener('submit', submitForm);

const submitBtn = document.getElementById('submitBtn');
const status = document.getElementById('status');
const modalEmail = document.getElementById('modalEmail');

function submitForm(e) {
  e.preventDefault();

  const formElements = e.target.elements;

  let postData = {};
  [...formElements].forEach((item) => {
    if (item.name) {
      postData = { ...postData, [item.name]: item.value };
    }
  });

  console.log(postData);

  submitBtn.disabled = true;
  status.innerHTML = 'please wait...';

  const formData = new FormData(this);
  // formData.append('name', postData['name']);
  // formData.append('email', postData['email']);
  // formData.append('message', postData['message']);

  (async () => {
    try {
      const res = await fetch('http://localhost:9000/mail.php', {
        method: 'POST',
        body: formData,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      });

      console.log(res);

      form.innerHTML = 'Thanks';
      modalEmail.style.transform = 'translateY(-100%)';
    } catch (e) {
      status.innerHTML = e.message;
      submitBtn.disabled = false;
    }
  })();

  // const ajax = new XMLHttpRequest();
  // ajax.open('POST', '../php/mail.php');
  // ajax.setRequestHeader('Content-Type', 'multipart/form-data');
  // ajax.setRequestHeader('Access-Control-Request-Method', 'POST');
  // ajax.onreadystatechange = () => {
  //   console.log(ajax.readyState);
  //   console.log(ajax.status);
  //   console.log(ajax.responseText);
  //   if (ajax.readyState == 4 && ajax.status == 200) {
  //     if (ajax.responseText == 'success') {
  //       form.innerHTML = 'Thanks';
  //       modalEmail.style.transform = 'translateY(-100%)';
  //     }
  //   } else {
  //     status.innerHTML = ajax.responseText;
  //     submitBtn.disabled = false;
  //   }
  // };
  // //const jsonData = JSON.stringify(postData);
  // ajax.send(formData);
}
