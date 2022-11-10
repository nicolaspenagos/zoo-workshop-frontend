
import './App.css';
import { Component } from 'react';
import { AnimalService } from './service/AnimalService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import { SelectButton } from 'primereact/selectbutton';

import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



export default class snakeApi extends Component {
    constructor() {
        super();
        this.state = {
            sex: 'M',
            name: '',
            age: '',
            height: '',
            weight: '',
            date: '',
            animalId: '',
            animal: []
        };
        this.animalService = new AnimalService();
        this.value = 'M';
        this.citySelectItems = [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' },

        ];
        this.options = ['M', 'F'];



    }

    componentDidMount() {
        this.animalService.getAll().then(data => {

            this.setState({ animals: data });

        });
    }


    render() {

         return (
            <div className="main">

            <header className="title">
                 <img src="/snake.png" className="title__img" />
                  <img src="/laptop.png" className="title__img" />
                <h1>Animals API</h1>

            </header>
            <div className="row">
                <Card className ="card" title="Post Animal" subTitle="Enter the following animal data">
                    <div className="col">
                        <InputText value={this.state.name} className="card__row" placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}></InputText>
                        <SelectButton value={this.state.sex} options={this.options} onChange={(e) => this.setState({ sex: e.value })} />
                        <InputNumber value={this.state.age} className="card__row" placeholder="Age"  onChange={(e) => this.setState({age: e.value})}></InputNumber>
                        <InputNumber value={this.state.weight} className="card__row" placeholder="Weight" onChange={(e) => this.setState({weight: e.value})} ></InputNumber>
                        <InputNumber value={this.state.height} className="card__row" placeholder="Height" onChange={(e) => this.setState({height: e.value})}></InputNumber>
                        <Calendar value={this.state.date} className="card__row" placeholder="Arrival Date" onChange={(e) => this.setState({ date: e.value })}></Calendar >
                       
              
                        <Button className="card__row button" 
                            onClick={
                                ()=>{
                                    this.animalService.postAnimal(this.state.name, this.state.sex, this.state.age,this.state.weight,this.state.height,this.state.date)
                                        .then(
                                            ()=>{
                                                 this.animalService.getAll().then(data => {

                                                    this.setState({ animals: data });

                                                });
                                            }
                                        ); 
                                    
                                    this.setState({name:'',sex:'M', age:'', weight:'', height:'', date:''})
                                }
                            }>Post</Button>
                    </div>
                </Card>
                <Card className=" card__search" title="Get Animal" subTitle="Enter an animal name">
                    <div className="col">
                        <InputText value={this.state.animalId} className="card__row" placeholder="Animal name" onChange={(e) => this.setState({animalId: e.target.value})}></InputText>
                        <Button className="button__search" onClick={
                            ()=>{
                           
                                this.animalService.getAnimal(this.state.animalId).then(
                                    anim => {
                                        let animalArray = [];
                                        animalArray.push(anim);
                                        this.setState({animal:animalArray});
                                    }
                                );
                            }
                        }>Search</Button>
                        <DataTable value={this.state.animal}>
                            <Column field="animalId" header="AnimalId"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="sex" header="Sex"></Column>
                            <Column field="age" header="Age"></Column>
                            <Column field="weight" header="Weight"></Column>
                            <Column field="height" header="Height"></Column>
                            <Column field="arrivalDate" header="Arrival Date"></Column>
                        </DataTable>
                    </div>
                </Card>
            </div>
        
            <Panel className="animals" header="getAnimals( )" toggleable>
                 <DataTable value={this.state.animals}>
               
                    <Column field="animalId" header="AnimalId"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="sex" header="Sex"></Column>
                    <Column field="age" header="Age"></Column>
                    <Column field="weight" header="Weight"></Column>
                    <Column field="height" header="Height"></Column>
                    <Column field="arrivalDate" header="Arrival Date"></Column>
                  
                    
                 </DataTable>
            </Panel>
            </div>

        );
    }
}