/* Exporting the function getCompliment to be used in other files. */

const motivations = [{id:1, message:`keep pushing!`}, {id:2, message:`Dont give up!`}]
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Your hard work will pay off!", "You will stive in where your mind takes you" , "You're getting closer to your dreams" , "Happiness begins with family" , "Your creaytivity will take you far"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getFuture: (req, res) => {
        const futures = [ `You will make 1 million dollars`];
      
        // choose random future reading
        let randomIndex = Math.floor(Math.random() * futures.length);
        let randomFuture = futures[randomIndex];
      
        res.status(200).send(randomFuture);
    },
    getMotivation: (req, res) => {
      
        // choose random motivational reading
        let randomIndex = Math.floor(Math.random() * motivations.length);
        let randomMotivation = motivations[randomIndex];
      
        res.status(200).send(randomMotivation);
    },
    deleteMotivation: (req,res) => {
        console.log(req.params)
        let index =  motivations.findIndex(elem => elem.id === +req.params.id);
        motivations.splice(index, 1);
        res.status(200).send(motivations);
    },
     }