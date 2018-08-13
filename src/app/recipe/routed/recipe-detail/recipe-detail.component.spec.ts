import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailComponent } from './recipe-detail.component';
import {SharedModule} from "../../../shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";
import {MOCK_RECIPES} from "../../shared/recipe.mock";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {StrToArrayPipe} from "../../../shared/str-to-array.pipe";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ RecipeDetailComponent, StrToArrayPipe ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    component.recipe = MOCK_RECIPES[0];
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });


  fdescribe('Action expanded', () => {
    it('div toggle should be undifined on init', () => {
      //GIVEN
      const divExpanded = fixture.debugElement.query(By.css('.e2e-expanded'));


      //THEN


      //EXPECT
      expect(divExpanded).toBeNull();

    });

    it('div toggle should be toggled on click', () => {
      //GIVEN

      const toggleButton = fixture.debugElement.nativeElement.querySelector('.e2e-toggle');


      //THEN
      toggleButton.click();


      //EXPECT


      const divExpanded = fixture.debugElement.query(By.css('.e2e-expanded'));
      expect(component.toggled).toBeTruthy();
      expect(divExpanded).toBeDefined();

    })




  })
});
