import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPockemons()
    .subscribe((response:any)=>{
      response.results.forEach((result:any) =>{
        this.dataService.getMoreData(result.name)
        .subscribe((uniueResponse: any) =>{
          this.pokemons.push(uniueResponse);
          console.log(this.pokemons)
        })
      })
    })
  }

}
