window.addEventListener('load',checkNetworkStrength);

function checkNetworkStrength(){
    const statusText = document.getElementById('statusText');
    const ipText = document.getElementById('ipText');
    const strengthText = document.getElementById('strengthText');

    statusText.textContent = "checking";
    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json').then((response)=>response.json())
        .then((data)=>{
            statusText.textContent = 'connected';
            ipText.textContent = data.ip;
            const connection = navigator.connection;
            const networkStrength = connection ? connection.downlink +"Mbps" :'Unknown';
            strengthText.textContent = networkStrength;
        })
        .catch(()=>{
            statusText.textContent = "Disconected";
        ipText.textContent = '-';
        strengthText.textContent = '-';
        })

    }else{
        statusText.textContent = "Disconected";
        ipText.textContent = '-';
        strengthText.textContent = '-';
    }


}