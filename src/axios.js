import axios from 'axios'

axios.defaults.baseURL='https://incremail-app.herokuapp.com/api/';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');