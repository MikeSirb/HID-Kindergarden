import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Kindergarden} from './interfaces/Kindergarden';
import {StoreService} from './store.service';
import {Child, ChildResponse} from './interfaces/Child';
import {ConfigService} from './config.service';
import {AlertService} from "./alert.service";
import {of, switchMap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(private http: HttpClient, private storeService: StoreService, private configService: ConfigService, private alertService: AlertService) {
    }

    public getKindergardens() {
        this.http.get<Kindergarden[]>('http://localhost:5000/kindergardens').subscribe(data => {
            this.storeService.kindergardens = data;
        });
    }

    public getChildren() {
        const page = this.configService.getCurrentPage();
        const childrenPerPage = this.configService.getChildrenPerPage();
        const filter = this.configService.getFilter();

        let url = `http://localhost:5000/childs?_expand=kindergarden&_page=${page + 1}&_limit=${childrenPerPage}`;

        if (this.configService.getFilterStatus()) {
            console.log(filter);
            url = `http://localhost:5000/childs?_expand=kindergarden&kindergardenId=${filter}&_page=${page + 1}&_limit=${childrenPerPage}`;
        }

        return this.http.get<ChildResponse[]>(url, {observe: 'response'})
            .pipe(
                switchMap(data => {
                    console.log(data);
                    this.storeService.children = data.body!;
                    this.storeService.childrenTotalCount = Number(data.headers.get('X-Total-Count'));
                    this.storeService.isLoading = false;
                    this.storeService.isRemoving = false;

                    return of(null);
                })
            );


    }

    public addChildData(child: Child) {
        this.http.post('http://localhost:5000/childs', child).subscribe((response) => {
            const title: string = 'Information zur Anmeldung'
            const message: string = `${child.name} : wurde erfolgreich im Kindergarten angemeldet!`

            this.alertService.changeTitleAndMessage(title, message);
            this.getChildren().subscribe(() => {
                this.alertService.displayAlert = true;
            })
        })
    }


    public deleteChildData(child: Child) {
        this.http.delete(`http://localhost:5000/childs/${child.id}`).subscribe(_ => {
            const title: string = 'Information zur Abmeldung'
            const message: string = `${child.name} : wurde erfolgreich vom Kindergarten abgemeldet`;
            this.alertService.changeTitleAndMessage(title, message);

            this.getChildren().subscribe(() => {
                this.alertService.displayAlert = true;
            })
        })
    }


}
