export class AlertTrafic {
    description : string;
    niveau : string;
    debutvalidite : Date;
    nomcourtligne: string;
    url : string;
    titre : string;
    level : string = 'warning';

    public getColor() : String {
        if (this.niveau == 'Mineure')
            return 'warning';
        if (this.niveau == 'Majeure')
            return 'danger';
        return 'primary';
    }
}