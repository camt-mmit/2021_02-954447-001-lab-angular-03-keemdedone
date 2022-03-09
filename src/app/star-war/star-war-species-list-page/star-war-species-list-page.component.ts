import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,switchMap } from 'rxjs';
import { species,List, SearchData } from '../models';
import { StarWarSpeciesService } from '../star-war-species.service';

@Component({
  selector: 'app-star-war-species-list-page',
  templateUrl: './star-war-species-list-page.component.html',
  styleUrls: ['./star-war-species-list-page.component.scss']
})
export class StarWarSpeciesListPageComponent implements OnInit {
  data$!: Observable<List<species>>;
  search!: SearchData;

  constructor(
    private readonly service: StarWarSpeciesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    // (async() => {
    //  this.data = await this.service.getAll()
    // })();
    this.search = this.route.snapshot.queryParams
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => {
        this.search = params;
        return this.service.getAll(params);
      })
    )
  }

  onSearch(search:SearchData): void{
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: search,
      replaceUrl: true,
    })
  }

  onItemSelect(id: string):void{
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
