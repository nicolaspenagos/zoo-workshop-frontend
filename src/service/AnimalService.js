import axios from 'axios';
export class AnimalService {
    baseUrl = 'http://localhost:8080/animals'

    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

   	postAnimal(name,sex,age,weight,height,date, momId, dadId){

      console.log(momId+','+dadId);
   		const parsedDate = date.toISOString().slice(0, -1);

      let motherId = (momId.length>0)? momId:null;
      let fatherId = (dadId.length>0)? dadId:null;
   		const snake = {name,sex,age,weight,height, arrivalDate: parsedDate, motherId, fatherId};
      console.log(snake);





   		return axios.post(this.baseUrl,snake)
   			.then(res => res.data)
   			.catch(function (error) {
			    if (error.response) {
			      // Request made and server responded
			      let code = error.response.data.code;
			      let msg = error.response.data.message;
			      alert("ERROR "+code+"\n"+msg);
		
			    } else if (error.request) {
			      // The request was made but no response was received
			      console.log(error.request);
			    } else {
			      // Something happened in setting up the request that triggered an Error
			      console.log('Error', error.message);
			    }

 		 });

   	}

   	getAnimal(animalId){
   		return axios.get(this.baseUrl+'/'+animalId).then(res => res.data);

   	}


   		
   	



}
