/* The above code is creating a button that when clicked will call the getCompliment function. The
getCompliment function will make a get request to the server and then alert the response. */
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const futureBtn = document.getElementById("futureButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)


const getFuture = () => {
    axios.get("http://localhost:4000/api/future/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

futureBtn.addEventListener('click', getFuture)


