function checkUserLogged(username)
{
    if(username === undefined || username === null){
        console.log('is null');
    }

    else{
        window.location='/dashboard_2.html?email='+name;
        console.log('is not null');
    }

}