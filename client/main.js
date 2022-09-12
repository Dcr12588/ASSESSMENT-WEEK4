/* The above code is creating a button that when clicked will call the getCompliment function. The
getCompliment function will make a get request to the server and then alert the response. */
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const futureBtn = document.getElementById("futureButton")
const motivationBtn = document.getElementById("motivationButton")

const getCompliment = () => {
    axios.get("http://localhost:5000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)



const getFortune = () => {
    axios.get("http://localhost:5000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)


const getFuture = () => {
    axios.get("http://localhost:5000/api/future/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

futureBtn.addEventListener('click', getFuture)


const getMotivation = () => {
    axios.get("http://localhost:5000/api/motivation/")
        .then(res => {
            const data = res.data;
            alert(data.message);
            console.log(data)
            if (data.id === 2){
             return deleteMotivation(data.id);
            }
            
    });
};

motivationBtn.addEventListener('click', getMotivation)



const deleteMotivation = id => axios.delete(`http://localhost:5000/api/motivation/${id}`)



                                                                           