import axios from 'axios';

const sendLoginData = (data) => {
    const baseUrl = `localhost:8000/api/`;
      axios({
        method:'post',
        url:'login',
        baseURL: `${baseUrl}`,
        data: {
            email: data.email,
            password: data.pwd,
            remember: data.remeberMe
        }
       })
       .then(response => {
          window.location.reload();
       })
       .catch(error => {
            // window.location.reload();
            console.log(error);
       });
};

export {sendLoginData};