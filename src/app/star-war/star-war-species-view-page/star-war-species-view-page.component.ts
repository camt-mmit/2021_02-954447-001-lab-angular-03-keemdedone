import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { species } from '../models';
import { StarWarSpeciesService } from '../star-war-species.service';

@Component({
  selector: 'app-star-war-species-view-page',
  templateUrl: './star-war-species-view-page.component.html',
  styleUrls: ['./star-war-species-view-page.component.scss']
})
export class StarWarSpeciesViewPageComponent implements OnInit {
  data$!: Observable<species>;
  constructor(
    private readonly service: StarWarSpeciesService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.service.get(params['id'])),
    );
  }

  goBack(): void{
    history.back();
  }

}
