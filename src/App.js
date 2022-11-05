import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { AnimalService } from './service/AnimalService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Panel } from 'primereact/panel';

import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
        this.animalService = new AnimalService();
    }

    componentDidMount() {
        this.animalService.getAll().then(data => {
     
            this.setState({animals:data});

            console.log(this.state.animals);
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
        
              <Panel header="getAnimals( )" toggleable>
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

