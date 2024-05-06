import { Injectable } from '@angular/core';

export interface WilDate {
  ID: number;
  titel: string;
  beschreibung: string;
  beginn: Date;
  ende?: Date;   // wenn nicht vorhanden, dann offenes Ende und Beginn mit dem Text "ab", z.B. ab 18:00 Uhr"
  ort: string;
  adresse: string;
  gps: string;
  einrichtung: string;
  verantwortlich: string;
  format: string; // z.B. Beobachtung, Galerie
  thema: string;
  kinder: boolean;
}

export interface WiLData {
  timestamp: number;
  data: WilDate[];
}

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  public allWiLData: WiLData =
    {
      timestamp: Date.now(),
      data: [
        {
          ID:1,
          titel: "Alte und neue mathematische Zwei-Personen-Strategiespiele und Rätsel",
          beschreibung: "Die Leipziger Schülergesellschaft für Mathematik präsentiert bekannte und weniger bekannte Strategiespiele für zwei Personen. Reine Denkspiele, die ohne die Komponente des Zufalls auskommen, sind beliebte Beschäftigungen für jung und alt. Ferner werden mathematische Rätsel vorgestellt.",
          beginn: new Date("2023-06-23T16:00:00"),
          ende: new Date("2023-06-23T21:00:00"),
          ort: "Campus Augustusplatz der Universität Leipzig",
          adresse: "Augustusplatz 10 / Felix-Klein-Hörsaal, Raum P 501",
          gps: "51.33872113372504, 12.378495080399098",
          einrichtung: "Mathematisches Institut der Universität Leipzig",
          verantwortlich: "Dr. Axel Schüler, Leipziger Schülergesellschaft für Mathematik (LSGM)",
          format: "Spiel",
          thema: "Naturwissenschaft und Umwelt",
          kinder: true
        },
        {
          ID:2,
          titel: "Eine Musikstunde aus althochdeutscher Zeit – Der Traktat „De musica“ des Notker von St. Gallen aus dem 11. Jahrhundert",
          beschreibung: "Nach Notkers Monochordlehre aus dem ältesten deutschsprachigen Musiktraktat wird mittelalterliche Musikpraxis zu klingendem Leben erweckt.Eine Kooperation des Musikinstrumentenmuseums mit der Sächsischen Akademie der Wissenschaften/Althochdeutsches Wörterbuch.",
          beginn: new Date("2023-06-23T18:00:00"),
          ende: new Date("2023-06-23T19:30:00"),
          ort: "Musikinstrumentenmuseum der Universität Leipzig im Grassi",
          adresse: "Johannisplatz 5–11 / Zimeliensaal",
          gps: "51.337554749274524, 12.38843020041967",
          einrichtung: "Musikinstrumentenmuseum der Universität Leipzig im Grassi",
          verantwortlich: "Dr. Almut Mikeleitis-Winter, Dr. Torsten Woitkowitz, Aurelia Winter (Gesang, Flöten), Jonas Heller (Fidel) und Dr. Veit Heller (Portativ, Trumscheit)",
          format: "Konzert",
          thema: "Gesellschaft und Kultur",
          kinder: true
        },
        {
          ID:3,
          titel: "Vogelbeobachtungsexkursion im Clara-Zetkin-Park",
          beschreibung: "Eine geführte Exkursion für Vogelliebhaber aller Altersgruppen im schönen Clara-Zetkin-Park. Erfahren Sie mehr über die heimische Vogelwelt und entdecken Sie verschiedene Arten in ihrem natürlichen Lebensraum.",
          beginn: new Date("2023-07-08T09:00:00"),
          ende: new Date("2023-07-08T12:00:00"),
          ort: "Clara-Zetkin-Park, Leipzig",
          adresse: "Treffpunkt: Eingang Nord, Ecke Waldstraße/Käthe-Kollwitz-Straße",
          gps: "51.344861, 12.371352",
          einrichtung: "Naturkundemuseum Leipzig",
          verantwortlich: "Dr. Anna Müller, Naturkundemuseum Leipzig",
          format: "Exkursion",
          thema: "Natur und Umwelt",
          kinder: true
        },
        {
          ID:4,
          titel: "Kunstworkshop: Malen mit Naturfarben",
          beschreibung: "Ein kreativer Workshop für alle, die die Schönheit der Natur in ihren Kunstwerken einfangen möchten. Lernen Sie verschiedene Techniken kennen, um mit natürlichen Farbstoffen zu malen und lassen Sie Ihrer Kreativität freien Lauf!",
          beginn: new Date("2023-07-15T14:00:00"),
          ende: new Date("2023-07-15T17:00:00"),
          ort: "Kunsthaus Leipzig",
          adresse: "Karl-Tauchnitz-Straße 9-11",
          gps: "51.340681, 12.380785",
          einrichtung: "Kunsthaus Leipzig",
          verantwortlich: "Anna Schneider, Kunsthaus Leipzig",
          format: "Workshop",
          thema: "Kunst und Kreativität",
          kinder: true
        },
        {
          ID:5,
          titel: "Vortrag: Die Rolle der Bienen in der Ökosystemerhaltung",
          beschreibung: "Ein informativer Vortrag über die Bedeutung der Bienen für die Erhaltung der Ökosysteme. Erfahren Sie mehr über die faszinierende Welt der Bienen und ihre wichtige Rolle bei der Bestäubung von Pflanzen und der Sicherung der Nahrungsmittelproduktion.",
          beginn: new Date("2023-07-20T18:30:00"),
          ende: new Date("2023-07-20T20:00:00"),
          ort: "Botanischer Garten Leipzig",
          adresse: "Linnéstraße 1",
          gps: "51.337766, 12.373578",
          einrichtung: "Botanischer Garten Leipzig",
          verantwortlich: "Dr. Michaela Becker, Botanischer Garten Leipzig",
          format: "Vortrag",
          thema: "Natur und Umwelt",
          kinder: false
        },
        {
          ID:6,
          titel: "Theateraufführung: Romeo und Julia",
          beschreibung: "Eine beeindruckende Aufführung von Shakespeares zeitlosem Meisterwerk über Liebe und Schicksal. Tauchen Sie ein in die Welt von Verona und erleben Sie die tragische Liebesgeschichte von Romeo und Julia auf der Bühne.",
          beginn: new Date("2023-07-25T19:00:00"),
          ende: new Date("2023-07-25T21:30:00"),
          ort: "Schauspielhaus Leipzig",
          adresse: "Bosestraße 1",
          gps: "51.344788, 12.385421",
          einrichtung: "Schauspielhaus Leipzig",
          verantwortlich: "Julia Meier, Schauspielhaus Leipzig",
          format: "Theateraufführung",
          thema: "Gesellschaft und Kultur",
          kinder: false
        },
        {
          ID:7,
          titel: "Sporttag im Park: Aktiv sein und Spaß haben",
          beschreibung: "Ein Tag voller sportlicher Aktivitäten und Spaß für die ganze Familie. Kommen Sie vorbei und nehmen Sie an verschiedenen Spielen und Wettbewerben teil oder genießen Sie einfach die Bewegung im Freien.",
          beginn: new Date("2023-08-05T10:00:00"),
          ende: new Date("2023-08-05T16:00:00"),
          ort: "Rosental Park, Leipzig",
          adresse: "Treffpunkt: Eingang Süd, Prager Straße",
          gps: "51.332968, 12.376058",
          einrichtung: "Sportamt Leipzig",
          verantwortlich: "Max Mustermann, Sportamt Leipzig",
          format: "Sportevent",
          thema: "Sport und Freizeit",
          kinder: true
        }
      ]
    }

  constructor() { }
  public async loadData(): Promise<WiLData> {
    const response = await fetch('https://digiboard.htwk-leipzig.de/wil/getData.php');
    console.log(response);
    return await response.json();
  }
}
