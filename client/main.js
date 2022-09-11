/* The above code is creating a button that when clicked will call the getCompliment function. The
getCompliment function will make a get request to the server and then alert the response. */
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)