import axios from 'axios';
export class AnimalService {
    baseUrl = 'http://localhost:8080/animals'

    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

   	postAnimal(name,sex,age,weight,height,date){

   		const parsedDate = date.toISOString().slice(0, -1);
   		const snake = {name,sex,age,weight,height, arrivalDate: parsedDate};

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
