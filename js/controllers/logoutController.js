function logoutUser(){
    console.log('doing logout ');
    sessionStorage.removeItem('logged');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('surname');
    sessionStorage.removeItem('role');
    window.location='/login.html';

}