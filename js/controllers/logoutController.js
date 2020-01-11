function logoutUser(){
    console.log('doing logout ');
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('surname');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('img');
    sessionStorage.removeItem('userId');
    window.location='/login.html';

}