import headingStyle from './headingStyle.css';
import style from './style.css';

import 'font-awesome/css/font-awesome.css';



const env = process.env.NODE_ENV;


setTimeout((ev) => {
    document.getElementById("env").innerText = env;
}, 6000);