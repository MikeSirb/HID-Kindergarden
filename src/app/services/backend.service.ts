import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Kindergarden} from '../interfaces/Kindergarden';
import {StoreService} from './store.service';
import {Child, ChildResponse} from '../interfaces/Child';
import {ConfigService} from './config.service';
import {AlertService} from "./alert.service";
import {catchError, map, of} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private colorError: string = "#CF150B";
  private colorSuccess: string = "#3f51b5";

  constructor(private http: HttpClient, private storeService: StoreService, private configService: ConfigService, private alertService: AlertService) {
  }

  public getKindergardens() {
    this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens')
      .subscribe(
        data => {
          this.storeService.kindergardens = data;
          this.storeService.kindergardenAreLoading = false;
        },
        error => {
          console.error('Fehler beim Laden der Kindergärten:', error);

          const errorTitle: string = `Fehler beim Laden`;
          const errorMessage: string = `Die Kindergärten konnten nicht aus der Datenbank geladen werden.`;
          this.alertService.changeTitleAndMessage(errorTitle, errorMessage, this.colorError);
        }
      );
  }

  public getChildren() {
    const page = this.configService.getCurrentPage();
    const childrenPerPage = this.configService.getChildrenPerPage();
    const filter = this.configService.getFilter();

    let url = `http://localhost:5000/childs?_expand=kindergarden&_page=${page + 1}&_limit=${childrenPerPage}`;

    if (this.configService.getFilterStatus()) {
      url = `http://localhost:5000/childs?_expand=kindergarden&kindergardenId=${filter}&_page=${page + 1}&_limit=${childrenPerPage}`;
    }

    return this.http.get<ChildResponse[]>(url, {observe: 'response'}).pipe(
      map(data => {
        const modifiedChildren = data.body?.map(child => ({
          ...child,
          kindergardenName: child.kindergarden.name
        })) || [];

        this.storeService.children = modifiedChildren;
        this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));

        this.storeService.childrensAreLoading = false;
        this.storeService.isRemoving = false;

        this.storeService.childrenSort = new MatTableDataSource(this.storeService.children);
        this.storeService.childrenSort.sort = this.storeService.sort;

        return null;
      }),
      catchError(error => {
        console.error('Fehler beim Laden der Kinder:', error);
        this.storeService.childrensAreLoading = false;
        this.storeService.isRemoving = false;

        const errorTitle: string = `Fehler beim Laden`;
        const errorMessage: string = `Die Kinder konnten nicht aus der Datenbank geladen werden.`;
        this.alertService.changeTitleAndMessage(errorTitle, errorMessage, this.colorError);
        this.alertService.displayAlert = true;

        return of(errorMessage);
      })
    );
  }

  public addChildData(child: Child, date: Date) {
    child.enrollmentDate = date;
    console.log(child);

    this.http.post('http://localhost:5000/childs', child).subscribe(
      (response) => {
        const title: string = 'Information zur Anmeldung';
        const message: string = `${child.name} : wurde erfolgreich im Kindergarten angemeldet!`;

        this.alertService.changeTitleAndMessage(title, message, this.colorSuccess);
        this.getChildren().subscribe(() => {
          this.alertService.displayAlert = true;
        });
      },
      (error) => {
        console.error(`Fehler beim anmelden des Kindes ${child.name}:`, error);
        const errorTitle: string = 'Fehler bei der Anmeldung';
        const errorMessage: string = `${child.name} : Fehler beim Anmelden im Kindergarten.`;

        this.alertService.changeTitleAndMessage(errorTitle, errorMessage, this.colorError);
        this.alertService.displayAlert = true;
        this.storeService.childrensAreLoading = false;
      }
    );
  }


  public deleteChildData(child: Child) {
    this.configService.setSpinnerSmallerSize();

    this.http.delete(`http://localhost:5000/childs/${child.id}`).subscribe(_ => {
        const title: string = 'Information zur Abmeldung'
        const message: string = `${child.name} : wurde erfolgreich vom Kindergarten abgemeldet`;
        this.alertService.changeTitleAndMessage(title, message, this.colorSuccess);

        this.getChildren().subscribe(() => {
          this.alertService.displayAlert = true;
          this.configService.setSpinnerBiggerSize();
        })
      },
      (error) => {
        console.error(`Fehler beim abmelden des Kindes ${child.name}:`, error);
        const title: string = 'Fehler bei der Abmeldung'
        const message: string = `${child.name} : Fehler beim abmelden vom Kindergarten`;

        this.alertService.changeTitleAndMessage(title, message, this.colorError);
        this.alertService.displayAlert = true;
        this.configService.setSpinnerBiggerSize();
        this.storeService.isRemoving = false;

      }
    );
  }


}
