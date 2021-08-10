'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//const avatar = `src = "${userAvatar}" alt = "avatar"`;

const imgAvatar = document.querySelector(".js_user__avatar");

//imgAvatar.src=userAvatar;


if (userAvatar ==='') {
    imgAvatar.src = DEFAULT_AVATAR;
}
else {
    imgAvatar.src = userAvatar;
}