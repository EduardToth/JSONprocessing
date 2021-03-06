prism.run(['$q', '$http', function ($q, $http) {
   /* Translations definition - start */
   var translationsGlobal = 
{
  "de":   {
          "dashboards": {
               "Production Analytics" : "Produktionsanalysen",
               "Production Analytics(1)" : "Produktionsanalysen(1)",
               "Production Analytics(2)" : "Produktionsanalysen(2)",
               "Production Analytics(3)" : "Produktionsanalysen(3)",
               "Production Analytics(4)" : "Produktionsanalysen(4)",
               "Production Analytics(1) (1)" : "Produktionsanalysen(1) (1)",
               "Production Analytics(1) (2)" : "Produktionsanalysen(1) (2)",
               "Production Analytics(1) (3)" : "Produktionsanalysen(1) (3)",
               "Production Analytics(1) (4)" : "Produktionsanalysen(1) (4)",
               "Production Analytics(2) (1)" : "Produktionsanalysen(2) (1)",
               "Production Analytics(2) (2)" : "Produktionsanalysen(2) (2)",
               "Production Analytics(2) (3)" : "Produktionsanalysen(2) (3)",
               "Production Analytics(2) (4)" : "Produktionsanalysen(2) (4)",
               "Production Analytics(3) (1)" : "Produktionsanalysen(3) (1)",
               "Production Analytics(3) (2)" : "Produktionsanalysen(3) (2)",
               "Production Analytics(3) (3)" : "Produktionsanalysen(3) (3)",
               "Production Analytics(3) (4)" : "Produktionsanalysen(3) (4)",
               "Production Analytics(4) (1)" : "Produktionsanalysen(4) (1)",
               "Production Analytics(4) (2)" : "Produktionsanalysen(4) (2)",
               "Production Analytics(4) (3)" : "Produktionsanalysen(4) (3)",
               "Production Analytics(4) (4)" : "Produktionsanalysen(4) (4)"
               }
          },
  "en":   {
          "dashboards": {
               "Production Analytics" : "Production Analytics",
               "Production Analytics(1)" : "Production Analytics(1)",
               "Production Analytics(2)" : "Production Analytics(2)",
               "Production Analytics(3)" : "Production Analytics(3)",
               "Production Analytics(4)" : "Production Analytics(4)",
               "Production Analytics(1) (1)" : "Production Analytics(1) (1)",
               "Production Analytics(1) (2)" : "Production Analytics(1) (2)",
               "Production Analytics(1) (3)" : "Production Analytics(1) (3)",
               "Production Analytics(1) (4)" : "Production Analytics(1) (4)",
               "Production Analytics(2) (1)" : "Production Analytics(2) (1)",
               "Production Analytics(2) (2)" : "Production Analytics(2) (2)",
               "Production Analytics(2) (3)" : "Production Analytics(2) (3)",
               "Production Analytics(2) (4)" : "Production Analytics(2) (4)",
               "Production Analytics(3) (1)" : "Production Analytics(3) (1)",
               "Production Analytics(3) (2)" : "Production Analytics(3) (2)",
               "Production Analytics(3) (3)" : "Production Analytics(3) (3)",
               "Production Analytics(3) (4)" : "Production Analytics(3) (4)",
               "Production Analytics(4) (1)" : "Production Analytics(4) (1)",
               "Production Analytics(4) (2)" : "Production Analytics(4) (2)",
               "Production Analytics(4) (3)" : "Production Analytics(4) (3)",
               "Production Analytics(4) (4)" : "Production Analytics(4) (4)"
               }
          },
  "es":   {
          "dashboards": {
               "Production Analytics" : "Production Analytics",
               "Production Analytics(1)" : "Production Analytics(1)",
               "Production Analytics(2)" : "Production Analytics(2)",
               "Production Analytics(3)" : "Production Analytics(3)",
               "Production Analytics(4)" : "Production Analytics(4)",
               "Production Analytics(1) (1)" : "Production Analytics(1) (1)",
               "Production Analytics(1) (2)" : "Production Analytics(1) (2)",
               "Production Analytics(1) (3)" : "Production Analytics(1) (3)",
               "Production Analytics(1) (4)" : "Production Analytics(1) (4)",
               "Production Analytics(2) (1)" : "Production Analytics(2) (1)",
               "Production Analytics(2) (2)" : "Production Analytics(2) (2)",
               "Production Analytics(2) (3)" : "Production Analytics(2) (3)",
               "Production Analytics(2) (4)" : "Production Analytics(2) (4)",
               "Production Analytics(3) (1)" : "Production Analytics(3) (1)",
               "Production Analytics(3) (2)" : "Production Analytics(3) (2)",
               "Production Analytics(3) (3)" : "Production Analytics(3) (3)",
               "Production Analytics(3) (4)" : "Production Analytics(3) (4)",
               "Production Analytics(4) (1)" : "Production Analytics(4) (1)",
               "Production Analytics(4) (2)" : "Production Analytics(4) (2)",
               "Production Analytics(4) (3)" : "Production Analytics(4) (3)",
               "Production Analytics(4) (4)" : "Production Analytics(4) (4)"
               }
          },
  "fr":   {
          "dashboards": {
               "Production Analytics" : "Analyses de production",
               "Production Analytics(1)" : "Analyses de production(1)",
               "Production Analytics(2)" : "Analyses de production(2)",
               "Production Analytics(3)" : "Analyses de production(3)",
               "Production Analytics(4)" : "Analyses de production(4)",
               "Production Analytics(1) (1)" : "Analyses de production(1) (1)",
               "Production Analytics(1) (2)" : "Analyses de production(1) (2)",
               "Production Analytics(1) (3)" : "Analyses de production(1) (3)",
               "Production Analytics(1) (4)" : "Analyses de production(1) (4)",
               "Production Analytics(2) (1)" : "Analyses de production(2) (1)",
               "Production Analytics(2) (2)" : "Analyses de production(2) (2)",
               "Production Analytics(2) (3)" : "Analyses de production(2) (3)",
               "Production Analytics(2) (4)" : "Analyses de production(2) (4)",
               "Production Analytics(3) (1)" : "Analyses de production(3) (1)",
               "Production Analytics(3) (2)" : "Analyses de production(3) (2)",
               "Production Analytics(3) (3)" : "Analyses de production(3) (3)",
               "Production Analytics(3) (4)" : "Analyses de production(3) (4)",
               "Production Analytics(4) (1)" : "Analyses de production(4) (1)",
               "Production Analytics(4) (2)" : "Analyses de production(4) (2)",
               "Production Analytics(4) (3)" : "Analyses de production(4) (3)",
               "Production Analytics(4) (4)" : "Analyses de production(4) (4)"
               }
          },
  "it":   {
          "dashboards": {
               "Production Analytics" : "Analisi produzione",
               "Production Analytics(1)" : "Analisi produzione(1)",
               "Production Analytics(2)" : "Analisi produzione(2)",
               "Production Analytics(3)" : "Analisi produzione(3)",
               "Production Analytics(4)" : "Analisi produzione(4)",
               "Production Analytics(1) (1)" : "Analisi produzione(1) (1)",
               "Production Analytics(1) (2)" : "Analisi produzione(1) (2)",
               "Production Analytics(1) (3)" : "Analisi produzione(1) (3)",
               "Production Analytics(1) (4)" : "Analisi produzione(1) (4)",
               "Production Analytics(2) (1)" : "Analisi produzione(2) (1)",
               "Production Analytics(2) (2)" : "Analisi produzione(2) (2)",
               "Production Analytics(2) (3)" : "Analisi produzione(2) (3)",
               "Production Analytics(2) (4)" : "Analisi produzione(2) (4)",
               "Production Analytics(3) (1)" : "Analisi produzione(3) (1)",
               "Production Analytics(3) (2)" : "Analisi produzione(3) (2)",
               "Production Analytics(3) (3)" : "Analisi produzione(3) (3)",
               "Production Analytics(3) (4)" : "Analisi produzione(3) (4)",
               "Production Analytics(4) (1)" : "Analisi produzione(4) (1)",
               "Production Analytics(4) (2)" : "Analisi produzione(4) (2)",
               "Production Analytics(4) (3)" : "Analisi produzione(4) (3)",
               "Production Analytics(4) (4)" : "Analisi produzione(4) (4)"
               }
          },
  "ja":   {
          "dashboards": {
               "Production Analytics" : "プロダクション分析",
               "Production Analytics(1)" : "プロダクション分析(1)",
               "Production Analytics(2)" : "プロダクション分析(2)",
               "Production Analytics(3)" : "プロダクション分析(3)",
               "Production Analytics(4)" : "プロダクション分析(4)",
               "Production Analytics(1) (1)" : "プロダクション分析(1) (1)",
               "Production Analytics(1) (2)" : "プロダクション分析(1) (2)",
               "Production Analytics(1) (3)" : "プロダクション分析(1) (3)",
               "Production Analytics(1) (4)" : "プロダクション分析(1) (4)",
               "Production Analytics(2) (1)" : "プロダクション分析(2) (1)",
               "Production Analytics(2) (2)" : "プロダクション分析(2) (2)",
               "Production Analytics(2) (3)" : "プロダクション分析(2) (3)",
               "Production Analytics(2) (4)" : "プロダクション分析(2) (4)",
               "Production Analytics(3) (1)" : "プロダクション分析(3) (1)",
               "Production Analytics(3) (2)" : "プロダクション分析(3) (2)",
               "Production Analytics(3) (3)" : "プロダクション分析(3) (3)",
               "Production Analytics(3) (4)" : "プロダクション分析(3) (4)",
               "Production Analytics(4) (1)" : "プロダクション分析(4) (1)",
               "Production Analytics(4) (2)" : "プロダクション分析(4) (2)",
               "Production Analytics(4) (3)" : "プロダクション分析(4) (3)",
               "Production Analytics(4) (4)" : "プロダクション分析(4) (4)"
               }
          },
  "nl":   {
          "dashboards": {
               "Production Analytics" : "Productieanalyse",
               "Production Analytics(1)" : "Productieanalyse(1)",
               "Production Analytics(2)" : "Productieanalyse(2)",
               "Production Analytics(3)" : "Productieanalyse(3)",
               "Production Analytics(4)" : "Productieanalyse(4)",
               "Production Analytics(1) (1)" : "Productieanalyse(1) (1)",
               "Production Analytics(1) (2)" : "Productieanalyse(1) (2)",
               "Production Analytics(1) (3)" : "Productieanalyse(1) (3)",
               "Production Analytics(1) (4)" : "Productieanalyse(1) (4)",
               "Production Analytics(2) (1)" : "Productieanalyse(2) (1)",
               "Production Analytics(2) (2)" : "Productieanalyse(2) (2)",
               "Production Analytics(2) (3)" : "Productieanalyse(2) (3)",
               "Production Analytics(2) (4)" : "Productieanalyse(2) (4)",
               "Production Analytics(3) (1)" : "Productieanalyse(3) (1)",
               "Production Analytics(3) (2)" : "Productieanalyse(3) (2)",
               "Production Analytics(3) (3)" : "Productieanalyse(3) (3)",
               "Production Analytics(3) (4)" : "Productieanalyse(3) (4)",
               "Production Analytics(4) (1)" : "Productieanalyse(4) (1)",
               "Production Analytics(4) (2)" : "Productieanalyse(4) (2)",
               "Production Analytics(4) (3)" : "Productieanalyse(4) (3)",
               "Production Analytics(4) (4)" : "Productieanalyse(4) (4)"
               }
          }
}
 var translations = "";
{
  "de":   {
          "tables": {
               "Date" : "Datum",
               "Error" : "Fehler",
               "Job" : "Auftrag",
               "Printer" : "Drucker",
               "Shift" : "Schicht",
               "State" : "Status",
               "Clicks" : "Klicks"
               },
          "columns": {
               "Date" : {
                    "Datum" : "Date",
                    }
               "Error" : {
                    "Dauer" : "Duration",
                    "Fehler" : "Error",
                    "Fehlercode" : "Error Code",
                    "Start-Zeitstempel" : "Start Timestamp",
                    }
               "Job" : {
                    "Kopien" : "Copies",
                    "Dauer" : "Duration",
                    "Engine-Nummer" : "Engine Number",
                    "Impressionen" : "Impressions",
                    "Auftrag-ID" : "Job ID",
                    "Auftragsname" : "Job Name",
                    "Auftragsgröße" : "Job Size",
                    "Auftragsstatus" : "Job State",
                    "Seiten" : "Pages",
                    "Druckseite" : "Printing Side",
                    "Start-Zeitstempel" : "Start Timestamp",
                    "Durchsatz" : "Throughput",
                    }
               "Printer" : {
                    "Konto-ID" : "Account ID",
                    "Kontoname" : "Account Name",
                    "Data Collector" : "Data Collector",
                    "Druckername" : "Printer Name",
                    "Druckertyp" : "Printer Type",
                    }
               "Shift" : {
                    "Schichtname" : "Shift Name",
                    }
               "State" : {
                    "Dauer" : "Duration",
                    "Engine-Nummer" : "Engine Number",
                    "Druckerstatus" : "Printer State",
                    "Start-Zeitstempel" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Gesamt" : "Total",
                    "Schwarzweiß" : "Black & White",
                    "Vollfarbe" : "Full Color",
                    "Einzel-/2-farbig" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Schichten",
               "Printers" : "Drucker",
               "Data Collectors" : "Data Collectors",
               "Days" : "Tage",
               "Date" : "Datum"
               },
          "formulas": {
               "Up time" : "Aktive Zeit",
               "Down time" : "Ausfallzeit",
               "Idle time" : "Leerlauf",
               "Daily Average" : "Tagesdurchschnitt",
               "Best Daily" : "Tagesbestwert",
               "Best Weekly" : "Wochenbestwert",
               "Best Monthly" : "Monatsbestwert",
               "Jobs Printed" : "Gedruckte Aufträge",
               "Jobs Aborted" : "Abgebrochene Aufträge",
               "Printer Impressions" : "Druckerimpressionen",
               "Printer Throughput" : "Druckerdurchsatz",
               "Shift Impressions" : "Impressionen pro Schicht",
               "Shift Throughput" : "Durchsatz pro Schicht",
               "Throughput (Feet)" : "Durchsatz (Fuß)",
               "Throughput (Meters)" : "Durchsatz (Meter)",
               "Throughput (Sheets)" : "Durchsatz (Blätter)",
               "Throughput (Impressions)" : "Durchsatz (Impressionen)",
               "Total Throughput" : "Gesamtdurchsatz",
               "Total Impressions" : "Gesamtimpressionen",
               "Total Clicks" : "Gesamtklicks",
               "Black & White Clicks" : "Klicks Schwarzweiß",
               "Full-Color Clicks" : "Klicks Vollfarbe",
               "Single/2-Color Clicks" : "Klicks Einzel/2-farbig",
               "Daily Impressions" : "Tägliche Impressionen",
               "Impressions" : "Impressionen",
               "Feet" : "Fuß",
               "Meters" : "Meter",
               "Sheets" : "Blätter",
               "Years" : "Jahre",
               "Quarters" : "Quartale",
               "Months" : "Monate",
               "Weeks" : "Wochen",
               "Days" : "Tage",
               "Hours" : "Stunden",
               "Minutes" : "Minuten",
               "Seconds" : "Sekunden",
               "Jobs" : "Aufträge",
               "Clicks" : "Klicks",
               "Aborted" : "Abgebrochen",
               "Printed" : "Gedruckt"
               },
          "widgets": {
               "Printer Status" : "Druckerstatus"
               "Device Status" : "Gerätestatus"
               "Finisher Status" : "Finisherstatus"
               "Daily Utilization" : "Tägliche Verwendung"
               "Weekly Utilization" : "Wöchentliche Verwendung"
               "Monthly Utilization" : "Monatliche Verwendung"
               "Printer Utilization" : "Druckerverwendung"
               "Finisher Utilization" : "Finisherverwendung"
               "Device Utilization" : "Geräteverwendung"
               "Jobs Printed Today" : "Heute gedruckte Jobs"
               "Clicks Today" : "Heutige Klicks"
               "Daily Impressions" : "Tägliche Impressionen"
               "Daily Throughput" : "Täglicher Durchsatz"
               "Daily Clicks" : "Tägliche Klicks"
               "Daily Throughput (Feet)" : "Täglicher Durchsatz (Fuß)"
               "Daily Throughput (Meters)" : "Täglicher Durchsatz (Meter)"
               "Daily Throughput (Sheets)" : "Täglicher Durchsatz (Blätter)"
               "Weekly Impressions" : "Wöchentliche Impressionen"
               "Weekly Throughput" : "Wöchentlicher Durchsatz"
               "Weekly Clicks" : "Wöchentliche Klicks"
               "Weekly Throughput (Feet)" : "Wöchentlicher Durchsatz (Fuß)"
               "Weekly Throughput (Meters)" : "Wöchentlicher Durchsatz (Meter)"
               "Weekly Throughput (Sheets)" : "Wöchentlicher Durchsatz (Blätter)"
               "Monthly Impressions" : "Monatliche Impressionen"
               "Monthly Throughput" : "Monatlicher Durchsatz"
               "Monthly Clicks" : "Monatliche Klicks"
               "Monthly Throughput (Feet)" : "Monatlicher Durchsatz (Fuß)"
               "Monthly Throughput (Meters)" : "Monatlicher Durchsatz (Meter)"
               "Monthly Throughput (Sheets)" : "Monatlicher Durchsatz (Blätter)"
               "Clicks per Printer" : "Klicks pro Drucker"
               "Daily Clicks per Printer" : "Tägliche Klicks pro Drucker"
               "Monthly Clicks per Printer" : "Monatliche Klicks pro Drucker"
               "Printer Throughput (Impressions)" : "Druckerdurchsatz (Impressionen)"
               "Printer Throughput" : "Druckerdurchsatz"
               "Printer Throughput (Feet)" : "Druckerdurchsatz (Fuß)"
               "Printer Throughput (Meters)" : "Druckerdurchsatz (Meter)"
               "Printer Throughput (Sheets)" : "Druckerdurchsatz (Blätter)"
               "Shift Throughput (Impressions)" : "Durchsatz pro Schicht (Impressionen)"
               "Shift Throughput" : "Durchsatz pro Schicht"
               "Shift Throughput (Feet)" : "Durchsatz pro Schicht (Fuß)"
               "Shift Throughput (Meters)" : "Durchsatz pro Schicht (Meter)"
               "Shift Throughput (Sheets)" : "Durchsatz pro Schicht (Blätter)"
               "Jobs Printed per Printer" : "Gedruckte Aufträge pro Drucker"
               "Jobs Printed per Shift" : "Gedruckte Aufträge pro Schicht"
               "Total Throughput - Peak Hours" : "Gesamtdurchsatz - Spitzenstunden"
               "Total Throughput (Feet) - Peak Hours" : "Gesamtdurchsatz (Fuß) - Spitzenstunden"
               "Total Throughput (Meters) - Peak Hours" : "Gesamtdurchsatz (Meter) - Spitzenstunden"
               "Total Throughput (Sheets) - Peak Hours" : "Gesamtdurchsatz (Blätter) - Spitzenstunden"
               "Total Impressions - Peak Hours" : "Gesamtimpressionen - Spitzenstunden"
               "Throughput - Best & Worst Calendar Days" : "Durchsatz - beste und schlechteste Kalendertage"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Durchsatz (Fuß) - beste und schlechteste Kalendertage"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Durchsatz (Meter) - beste und schlechteste Kalendertage"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Durchsatz (Blätter) - beste und schlechteste Kalendertage"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Durchsatz (Impressionen) - Beste und schlechteste Kalendertage"
               "Text" : "Text"
               "Untitled" : "Ohne Titel"
               "Jobs Printed / Aborted" : "Gedruckte/abgebrochene Aufträge"
               "Jobs 1-sided / 2-sided" : "Einseitige/zweiseitige Aufträge"
               "Speed" : "Geschwindigkeit"
               "Speed (Pages/Min)" : "Geschwindigkeit (Seiten/Min)"
               "Speed (Sheets/Min)" : "Geschwindigkeit (Blätter/Min)"
               "Speed (Feet/Min)" : "Geschwindigkeit (Fuß/Min)"
               "Speed (Meters/Min)" : "Geschwindigkeit (Meter/Min)"
               "Highest Speed" : "Höchste Geschwindigkeit"
               "Highest Speed (Pages/Min)" : "Höchste Geschwindigkeit (Seiten/Min)"
               "Highest Speed (Sheets/Min)" : "Höchste Geschwindigkeit (Blätter/Min)"
               "Highest Speed (Feet/Min)" : "Höchste Geschwindigkeit (Fuß/Min)"
               "Highest Speed (Meters/Min)" : "Höchste Geschwindigkeit (Meter/Min)"
               "Humidity" : "Feuchtigkeit"
               "Temperature" : "Temperatur"
               "Temperature (Celsius)" : "Temperatur (Celsius)"
               "Temperature (Fahrenheit)" : "Temperatur (Fahrenheit)"
               "Highest Temperature" : "Höchste Temperatur"
               "Highest Temperature (Celsius)" : "Höchste Temperatur (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Höchste Temperatur (Fahrenheit)"
               "Humidity Peaks" : "Feuchtigkeitsspitzen"
               "Speed Peaks" : "Geschwindigkeitsspitzen"
               "Temperature Peaks" : "Temperaturspitzen"

               }
     },
  "en":   {
          "tables": {
               "Date" : "Date",
               "Error" : "Error",
               "Job" : "Job",
               "Printer" : "Printer",
               "Shift" : "Shift",
               "State" : "State",
               "Clicks" : "Clicks"
               },
          "columns": {
               "Date" : {
                    "Date" : "Date",
                    }
               "Error" : {
                    "Duration" : "Duration",
                    "Error" : "Error",
                    "Error Code" : "Error Code",
                    "Start Timestamp" : "Start Timestamp",
                    }
               "Job" : {
                    "Copies" : "Copies",
                    "Duration" : "Duration",
                    "Engine Number" : "Engine Number",
                    "Impressions" : "Impressions",
                    "Job ID" : "Job ID",
                    "Job Name" : "Job Name",
                    "Job Size" : "Job Size",
                    "Job State" : "Job State",
                    "Pages" : "Pages",
                    "Printing Side" : "Printing Side",
                    "Start Timestamp" : "Start Timestamp",
                    "Throughput" : "Throughput",
                    }
               "Printer" : {
                    "Account ID" : "Account ID",
                    "Account Name" : "Account Name",
                    "Data Collector" : "Data Collector",
                    "Printer Name" : "Printer Name",
                    "Printer Type" : "Printer Type",
                    }
               "Shift" : {
                    "Shift Name" : "Shift Name",
                    }
               "State" : {
                    "Duration" : "Duration",
                    "Engine Number" : "Engine Number",
                    "Printer State" : "Printer State",
                    "Start Timestamp" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Total" : "Total",
                    "Black & White" : "Black & White",
                    "Full Color" : "Full Color",
                    "Single/2 Color" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Shifts",
               "Printers" : "Printers",
               "Data Collectors" : "Data Collectors",
               "Days" : "Days",
               "Date" : "Date"
               },
          "formulas": {
               "Up time" : "Up time",
               "Down time" : "Down time",
               "Idle time" : "Idle time",
               "Daily Average" : "Daily Average",
               "Best Daily" : "Best Daily",
               "Best Weekly" : "Best Weekly",
               "Best Monthly" : "Best Monthly",
               "Jobs Printed" : "Jobs Printed",
               "Jobs Aborted" : "Jobs Aborted",
               "Printer Impressions" : "Printer Impressions",
               "Printer Throughput" : "Printer Throughput",
               "Shift Impressions" : "Shift Impressions",
               "Shift Throughput" : "Shift Throughput",
               "Throughput (Feet)" : "Throughput (Feet)",
               "Throughput (Meters)" : "Throughput (Meters)",
               "Throughput (Sheets)" : "Throughput (Sheets)",
               "Throughput (Impressions)" : "Throughput (Impressions)",
               "Total Throughput" : "Total Throughput",
               "Total Impressions" : "Total Impressions",
               "Total Clicks" : "Total Clicks",
               "Black & White Clicks" : "Black & White Clicks",
               "Full-Color Clicks" : "Full-Color Clicks",
               "Single/2-Color Clicks" : "Single/2-Color Clicks",
               "Daily Impressions" : "Daily Impressions",
               "Impressions" : "Impressions",
               "Feet" : "Feet",
               "Meters" : "Meters",
               "Sheets" : "Sheets",
               "Years" : "Years",
               "Quarters" : "Quarters",
               "Months" : "Months",
               "Weeks" : "Weeks",
               "Days" : "Days",
               "Hours" : "Hours",
               "Minutes" : "Minutes",
               "Seconds" : "Seconds",
               "Jobs" : "Jobs",
               "Clicks" : "Clicks",
               "Aborted" : "Aborted",
               "Printed" : "Printed"
               },
          "widgets": {
               "Printer Status" : "Printer Status"
               "Device Status" : "Device Status"
               "Finisher Status" : "Finisher Status"
               "Daily Utilization" : "Daily Utilization"
               "Weekly Utilization" : "Weekly Utilization"
               "Monthly Utilization" : "Monthly Utilization"
               "Printer Utilization" : "Printer Utilization"
               "Finisher Utilization" : "Finisher Utilization"
               "Device Utilization" : "Device Utilization"
               "Jobs Printed Today" : "Jobs Printed Today"
               "Clicks Today" : "Clicks Today"
               "Daily Impressions" : "Daily Impressions"
               "Daily Throughput" : "Daily Throughput"
               "Daily Clicks" : "Daily Clicks"
               "Daily Throughput (Feet)" : "Daily Throughput (Feet)"
               "Daily Throughput (Meters)" : "Daily Throughput (Meters)"
               "Daily Throughput (Sheets)" : "Daily Throughput (Sheets)"
               "Weekly Impressions" : "Weekly Impressions"
               "Weekly Throughput" : "Weekly Throughput"
               "Weekly Clicks" : "Weekly Clicks"
               "Weekly Throughput (Feet)" : "Weekly Throughput (Feet)"
               "Weekly Throughput (Meters)" : "Weekly Throughput (Meters)"
               "Weekly Throughput (Sheets)" : "Weekly Throughput (Sheets)"
               "Monthly Impressions" : "Monthly Impressions"
               "Monthly Throughput" : "Monthly Throughput"
               "Monthly Clicks" : "Monthly Clicks"
               "Monthly Throughput (Feet)" : "Monthly Throughput (Feet)"
               "Monthly Throughput (Meters)" : "Monthly Throughput (Meters)"
               "Monthly Throughput (Sheets)" : "Monthly Throughput (Sheets)"
               "Clicks per Printer" : "Clicks per Printer"
               "Daily Clicks per Printer" : "Daily Clicks per Printer"
               "Monthly Clicks per Printer" : "Monthly Clicks per Printer"
               "Printer Throughput (Impressions)" : "Printer Throughput (Impressions)"
               "Printer Throughput" : "Printer Throughput"
               "Printer Throughput (Feet)" : "Printer Throughput (Feet)"
               "Printer Throughput (Meters)" : "Printer Throughput (Meters)"
               "Printer Throughput (Sheets)" : "Printer Throughput (Sheets)"
               "Shift Throughput (Impressions)" : "Shift Throughput (Impressions)"
               "Shift Throughput" : "Shift Throughput"
               "Shift Throughput (Feet)" : "Shift Throughput (Feet)"
               "Shift Throughput (Meters)" : "Shift Throughput (Meters)"
               "Shift Throughput (Sheets)" : "Shift Throughput (Sheets)"
               "Jobs Printed per Printer" : "Jobs Printed per Printer"
               "Jobs Printed per Shift" : "Jobs Printed per Shift"
               "Total Throughput - Peak Hours" : "Total Throughput - Peak Hours"
               "Total Throughput (Feet) - Peak Hours" : "Total Throughput (Feet) - Peak Hours"
               "Total Throughput (Meters) - Peak Hours" : "Total Throughput (Meters) - Peak Hours"
               "Total Throughput (Sheets) - Peak Hours" : "Total Throughput (Sheets) - Peak Hours"
               "Total Impressions - Peak Hours" : "Total Impressions - Peak Hours"
               "Throughput - Best & Worst Calendar Days" : "Throughput - Best & Worst Calendar Days"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Throughput (Feet) - Best & Worst Calendar Days"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Throughput (Meters) - Best & Worst Calendar Days"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Throughput (Sheets) - Best & Worst Calendar Days"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Throughput (Impressions) - Best & Worst Calendar Days"
               "Text" : "Text"
               "Untitled" : "Untitled"
               "Jobs Printed / Aborted" : "Jobs Printed / Aborted"
               "Jobs 1-sided / 2-sided" : "Jobs 1-sided / 2-sided"
               "Speed" : "Speed"
               "Speed (Pages/Min)" : "Speed (Pages/Min)"
               "Speed (Sheets/Min)" : "Speed (Sheets/Min)"
               "Speed (Feet/Min)" : "Speed (Feet/Min)"
               "Speed (Meters/Min)" : "Speed (Meters/Min)"
               "Highest Speed" : "Highest Speed"
               "Highest Speed (Pages/Min)" : "Highest Speed (Pages/Min)"
               "Highest Speed (Sheets/Min)" : "Highest Speed (Sheets/Min)"
               "Highest Speed (Feet/Min)" : "Highest Speed (Feet/Min)"
               "Highest Speed (Meters/Min)" : "Highest Speed (Meters/Min)"
               "Humidity" : "Humidity"
               "Temperature" : "Temperature"
               "Temperature (Celsius)" : "Temperature (Celsius)"
               "Temperature (Fahrenheit)" : "Temperature (Fahrenheit)"
               "Highest Temperature" : "Highest Temperature"
               "Highest Temperature (Celsius)" : "Highest Temperature (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Highest Temperature (Fahrenheit)"
               "Humidity Peaks" : "Humidity Peaks"
               "Speed Peaks" : "Speed Peaks"
               "Temperature Peaks" : "Temperature Peaks"

               }
     },
  "es":   {
          "tables": {
               "Date" : "Fecha",
               "Error" : "Error",
               "Job" : "Trabajo",
               "Printer" : "Impresora",
               "Shift" : "Turno",
               "State" : "Estado",
               "Clicks" : "Copias"
               },
          "columns": {
               "Date" : {
                    "Fecha" : "Date",
                    }
               "Error" : {
                    "Duración" : "Duration",
                    "Error" : "Error",
                    "Código de error" : "Error Code",
                    "Marca de tiempo de inicio" : "Start Timestamp",
                    }
               "Job" : {
                    "Copias" : "Copies",
                    "Duración" : "Duration",
                    "Número de motor" : "Engine Number",
                    "Impresiones" : "Impressions",
                    "ID del trabajo" : "Job ID",
                    "Nombre del trabajo" : "Job Name",
                    "Tamaño del trabajo" : "Job Size",
                    "Estado del trabajo" : "Job State",
                    "Páginas" : "Pages",
                    "Cara de impresión" : "Printing Side",
                    "Marca de tiempo de inicio" : "Start Timestamp",
                    "Productividad" : "Throughput",
                    }
               "Printer" : {
                    "ID de la cuenta" : "Account ID",
                    "Nombre de la cuenta" : "Account Name",
                    "Data Collector" : "Data Collector",
                    "Nombre de impresora" : "Printer Name",
                    "Tipo de impresora" : "Printer Type",
                    }
               "Shift" : {
                    "Nombre del turno" : "Shift Name",
                    }
               "State" : {
                    "Duración" : "Duration",
                    "Número de motor" : "Engine Number",
                    "Estado de la impresora" : "Printer State",
                    "Marca de tiempo de inicio" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Total" : "Total",
                    "Blanco y negro" : "Black & White",
                    "A todo color" : "Full Color",
                    "1/2 color(es)" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Turnos",
               "Printers" : "Impresoras",
               "Data Collectors" : "Recopiladores de datos",
               "Days" : "Días",
               "Date" : "Fecha"
               },
          "formulas": {
               "Up time" : "Tiempo en activo",
               "Down time" : "Tiempo en inactivo",
               "Idle time" : "Tiempo en reposo",
               "Daily Average" : "Media diaria",
               "Best Daily" : "Mejor diaria",
               "Best Weekly" : "Mejor semanal",
               "Best Monthly" : "Mejor mensual",
               "Jobs Printed" : "Trabajos impresos",
               "Jobs Aborted" : "Trabajos cancelados",
               "Printer Impressions" : "Impresiones de la impresora",
               "Printer Throughput" : "Productividad de la impresora",
               "Shift Impressions" : "Impresiones del turno",
               "Shift Throughput" : "Productividad del turno",
               "Throughput (Feet)" : "Productividad (pies)",
               "Throughput (Meters)" : "Productividad (metros)",
               "Throughput (Sheets)" : "Productividad (hojas)",
               "Throughput (Impressions)" : "Productividad (impresiones)",
               "Total Throughput" : "Productividad total",
               "Total Impressions" : "Total de impresiones",
               "Total Clicks" : "Total de copias",
               "Black & White Clicks" : "Copias en blanco y negro",
               "Full-Color Clicks" : "Copias a todo color",
               "Single/2-Color Clicks" : "Copias a 1/2 color(es)",
               "Daily Impressions" : "Impresiones diarias",
               "Impressions" : "Impresiones",
               "Feet" : "Pies",
               "Meters" : "Metros",
               "Sheets" : "Hojas",
               "Years" : "Años",
               "Quarters" : "Trimestres",
               "Months" : "Meses",
               "Weeks" : "Semanas",
               "Days" : "Días",
               "Hours" : "Horas",
               "Minutes" : "Minutos",
               "Seconds" : "Segundos",
               "Jobs" : "Trabajos",
               "Clicks" : "Copias",
               "Aborted" : "Cancelado",
               "Printed" : "Impreso"
               },
          "widgets": {
               "Printer Status" : "Estado de la impresora"
               "Device Status" : "Estado del dispositivo"
               "Finisher Status" : "Estado del dispositivo de acabado"
               "Daily Utilization" : "Utilización diaria"
               "Weekly Utilization" : "Utilización semanal"
               "Monthly Utilization" : "Utilización mensual"
               "Printer Utilization" : "Utilización de la impresora"
               "Finisher Utilization" : "Utilización del dispositivo de acabado"
               "Device Utilization" : "Utilización del dispositivo"
               "Jobs Printed Today" : "Trabajos impresos hoy"
               "Clicks Today" : "Copias hoy"
               "Daily Impressions" : "Impresiones diarias"
               "Daily Throughput" : "Productividad diaria"
               "Daily Clicks" : "Copias diarias"
               "Daily Throughput (Feet)" : "Productividad diaria (pies)"
               "Daily Throughput (Meters)" : "Productividad diaria (metros)"
               "Daily Throughput (Sheets)" : "Productividad diaria (hojas)"
               "Weekly Impressions" : "Impresiones semanales"
               "Weekly Throughput" : "Productividad semanal"
               "Weekly Clicks" : "Copias semanales"
               "Weekly Throughput (Feet)" : "Productividad semanal (pies)"
               "Weekly Throughput (Meters)" : "Productividad semanal (metros)"
               "Weekly Throughput (Sheets)" : "Productividad semanal (hojas)"
               "Monthly Impressions" : "Impresiones mensuales"
               "Monthly Throughput" : "Productividad mensual"
               "Monthly Clicks" : "Copias mensuales"
               "Monthly Throughput (Feet)" : "Productividad mensual (pies)"
               "Monthly Throughput (Meters)" : "Productividad mensual (metros)"
               "Monthly Throughput (Sheets)" : "Productividad mensual (hojas)"
               "Clicks per Printer" : "Copias por impresora"
               "Daily Clicks per Printer" : "Copias diarias por impresora"
               "Monthly Clicks per Printer" : "Copias mensuales por impresora"
               "Printer Throughput (Impressions)" : "Productividad de la impresora (impresiones)"
               "Printer Throughput" : "Productividad de la impresora"
               "Printer Throughput (Feet)" : "Productividad de la impresora (pies)"
               "Printer Throughput (Meters)" : "Productividad de la impresora (metros)"
               "Printer Throughput (Sheets)" : "Productividad de la impresora (hojas)"
               "Shift Throughput (Impressions)" : "Productividad del turno (impresiones)"
               "Shift Throughput" : "Productividad del turno"
               "Shift Throughput (Feet)" : "Productividad del turno (pies)"
               "Shift Throughput (Meters)" : "Productividad del turno (metros)"
               "Shift Throughput (Sheets)" : "Productividad del turno (hojas)"
               "Jobs Printed per Printer" : "Trabajos impresos por impresora"
               "Jobs Printed per Shift" : "Trabajos impresos por turno"
               "Total Throughput - Peak Hours" : "Productividad total - Horas punta"
               "Total Throughput (Feet) - Peak Hours" : "Productividad total (pies) - Horas punta"
               "Total Throughput (Meters) - Peak Hours" : "Productividad total (metros) - Horas punta"
               "Total Throughput (Sheets) - Peak Hours" : "Productividad total (hojas) - Horas punta"
               "Total Impressions - Peak Hours" : "Total de impresiones - Horas punta"
               "Throughput - Best & Worst Calendar Days" : "Productividad - Mejores y peores días naturales"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Productividad (pies) - Mejores y peores días naturales"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Productividad (metros) - Mejores y peores días naturales"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Productividad (hojas) - Mejores y peores días naturales"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Productividad (impresiones) - Mejores y peores días naturales"
               "Text" : "Texto"
               "Untitled" : "Sin título"
               "Jobs Printed / Aborted" : "Trabajos impresos / cancelados"
               "Jobs 1-sided / 2-sided" : "Trabajos a 1 cara / 2 caras"
               "Speed" : "Velocidad"
               "Speed (Pages/Min)" : "Velocidad (Páginas/min)"
               "Speed (Sheets/Min)" : "Velocidad (Hojas/min)"
               "Speed (Feet/Min)" : "Velocidad (Pies/min)"
               "Speed (Meters/Min)" : "Velocidad (Metros/min)"
               "Highest Speed" : "Velocidad máxima"
               "Highest Speed (Pages/Min)" : "Velocidad máxima (Páginas/min)"
               "Highest Speed (Sheets/Min)" : "Velocidad máxima (Hojas/min)"
               "Highest Speed (Feet/Min)" : "Velocidad máxima (Pies/min)"
               "Highest Speed (Meters/Min)" : "Velocidad máxima (Metros/min)"
               "Humidity" : "Humedad"
               "Temperature" : "Temperatura"
               "Temperature (Celsius)" : "Temperatura (Celsius)"
               "Temperature (Fahrenheit)" : "Temperatura (Fahrenheit)"
               "Highest Temperature" : "Temperatura máxima"
               "Highest Temperature (Celsius)" : "Temperatura máxima (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Temperatura máxima (Fahrenheit)"
               "Humidity Peaks" : "Picos de humedad"
               "Speed Peaks" : "Picos de velocidad"
               "Temperature Peaks" : "Picos de temperatura"

               }
     },
  "fr":   {
          "tables": {
               "Date" : "Date",
               "Error" : "Erreur",
               "Job" : "Travail",
               "Printer" : "Imprimante",
               "Shift" : "Équipe",
               "State" : "État",
               "Clicks" : "Clics"
               },
          "columns": {
               "Date" : {
                    "Date" : "Date",
                    }
               "Error" : {
                    "Durée" : "Duration",
                    "Erreur" : "Error",
                    "Code d'erreur" : "Error Code",
                    "Horodatage de début" : "Start Timestamp",
                    }
               "Job" : {
                    "Copies" : "Copies",
                    "Durée" : "Duration",
                    "Numéro de moteur" : "Engine Number",
                    "Impressions" : "Impressions",
                    "ID travail" : "Job ID",
                    "Nom du travail" : "Job Name",
                    "Taille du travail" : "Job Size",
                    "État du travail" : "Job State",
                    "Pages" : "Pages",
                    "Face d'impression" : "Printing Side",
                    "Horodatage de début" : "Start Timestamp",
                    "Débit" : "Throughput",
                    }
               "Printer" : {
                    "ID compte" : "Account ID",
                    "Nom du compte" : "Account Name",
                    "Collecteur de données" : "Data Collector",
                    "Nom de l'imprimante" : "Printer Name",
                    "Type d'imprimante" : "Printer Type",
                    }
               "Shift" : {
                    "Nom de l'équipe" : "Shift Name",
                    }
               "State" : {
                    "Durée" : "Duration",
                    "Numéro de moteur" : "Engine Number",
                    "État de l'imprimante" : "Printer State",
                    "Horodatage de début" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Total" : "Total",
                    "Noir et blanc" : "Black & White",
                    "Pleine couleur" : "Full Color",
                    "Une/deux couleurs" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Équipes",
               "Printers" : "Imprimantes",
               "Data Collectors" : "Collecteurs de données",
               "Days" : "Jours",
               "Date" : "Date"
               },
          "formulas": {
               "Up time" : "Temps de fonctionnement",
               "Down time" : "Temps d'arrêt",
               "Idle time" : "Temps d'inactivité",
               "Daily Average" : "Moyenne quotidienne",
               "Best Daily" : "Meilleur du jour",
               "Best Weekly" : "Meilleur de la semaine",
               "Best Monthly" : "Meilleur du mois",
               "Jobs Printed" : "Nb de travaux imprimés",
               "Jobs Aborted" : "Nb de travaux abandonnés",
               "Printer Impressions" : "Impressions de l'imprimante",
               "Printer Throughput" : "Débit de l'imprimante",
               "Shift Impressions" : "Impressions de l'équipe",
               "Shift Throughput" : "Débit de l'équipe",
               "Throughput (Feet)" : "Débit (pieds)",
               "Throughput (Meters)" : "Débit (mètres)",
               "Throughput (Sheets)" : "Débit (feuilles)",
               "Throughput (Impressions)" : "Débit (impressions)",
               "Total Throughput" : "Débit total",
               "Total Impressions" : "Nb total d'impressions",
               "Total Clicks" : "Total clics",
               "Black & White Clicks" : "Clics noir et blanc",
               "Full-Color Clicks" : "Clics pleine couleur",
               "Single/2-Color Clicks" : "Clics une/deux couleurs",
               "Daily Impressions" : "Impressions quotidiennes",
               "Impressions" : "Impressions",
               "Feet" : "Pieds",
               "Meters" : "Mètres",
               "Sheets" : "Feuilles",
               "Years" : "Années",
               "Quarters" : "Trimestres",
               "Months" : "Mois",
               "Weeks" : "Semaines",
               "Days" : "Jours",
               "Hours" : "Heures",
               "Minutes" : "Minutes",
               "Seconds" : "Secondes",
               "Jobs" : "Travaux",
               "Clicks" : "Clics",
               "Aborted" : "Abandonnés",
               "Printed" : "Imprimés"
               },
          "widgets": {
               "Printer Status" : "État de l'imprimante"
               "Device Status" : "État du périphérique"
               "Finisher Status" : "État du finisseur"
               "Daily Utilization" : "Utilisation quotidienne"
               "Weekly Utilization" : "Utilisation hebdomadaire"
               "Monthly Utilization" : "Utilisation mensuelle"
               "Printer Utilization" : "Utilisation de l'imprimante"
               "Finisher Utilization" : "Utilisation du finisseur"
               "Device Utilization" : "Utilisation du périphérique"
               "Jobs Printed Today" : "Impressions du jour"
               "Clicks Today" : "Clics aujourd'hui"
               "Daily Impressions" : "Impressions quotidiennes"
               "Daily Throughput" : "Débit quotidien"
               "Daily Clicks" : "Clics quotidiens"
               "Daily Throughput (Feet)" : "Débit quotidien (pieds)"
               "Daily Throughput (Meters)" : "Débit quotidien (mètres)"
               "Daily Throughput (Sheets)" : "Débit quotidien (feuilles)"
               "Weekly Impressions" : "Impressions hebdomadaires"
               "Weekly Throughput" : "Débit hebdomadaire"
               "Weekly Clicks" : "Clics hebdomadaires"
               "Weekly Throughput (Feet)" : "Débit hebdomadaire (pieds)"
               "Weekly Throughput (Meters)" : "Débit hebdomadaire (mètres)"
               "Weekly Throughput (Sheets)" : "Débit hebdomadaire (feuilles)"
               "Monthly Impressions" : "Impressions mensuelles"
               "Monthly Throughput" : "Débit mensuel"
               "Monthly Clicks" : "Clics mensuels"
               "Monthly Throughput (Feet)" : "Débit mensuel (pieds)"
               "Monthly Throughput (Meters)" : "Débit mensuel (mètres)"
               "Monthly Throughput (Sheets)" : "Débit mensuel (feuilles)"
               "Clicks per Printer" : "Clics par imprimante"
               "Daily Clicks per Printer" : "Clics quotidiens par imprimante"
               "Monthly Clicks per Printer" : "Clics mensuels par imprimante"
               "Printer Throughput (Impressions)" : "Débit de l'imprimante (impressions)"
               "Printer Throughput" : "Débit de l'imprimante"
               "Printer Throughput (Feet)" : "Débit de l'imprimante (pieds)"
               "Printer Throughput (Meters)" : "Débit de l'imprimante (mètres)"
               "Printer Throughput (Sheets)" : "Débit de l'imprimante (feuilles)"
               "Shift Throughput (Impressions)" : "Débit de l'équipe (impressions)"
               "Shift Throughput" : "Débit de l'équipe"
               "Shift Throughput (Feet)" : "Débit de l'équipe (pieds)"
               "Shift Throughput (Meters)" : "Débit de l'équipe (mètres)"
               "Shift Throughput (Sheets)" : "Débit de l'équipe (feuilles)"
               "Jobs Printed per Printer" : "Nb de travaux imprimés par imprimante"
               "Jobs Printed per Shift" : "Nb de travaux imprimés par équipe"
               "Total Throughput - Peak Hours" : "Débit total - Heures pleines"
               "Total Throughput (Feet) - Peak Hours" : "Débit total (pieds) - Heures pleines"
               "Total Throughput (Meters) - Peak Hours" : "Débit total (mètres) - Heures pleines"
               "Total Throughput (Sheets) - Peak Hours" : "Débit total (feuilles) - Heures pleines"
               "Total Impressions - Peak Hours" : "Nb total d'impressions - Heures pleines"
               "Throughput - Best & Worst Calendar Days" : "Débit - Meilleur et pire jours calendaires"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Débit (pieds) - Meilleur et pire jours calendaires"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Débit (mètres) - Meilleur et pire jours calendaires"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Débit (feuilles) - Meilleur et pire jours calendaires"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Débit (impressions) – Meilleur et pire jour calendaire"
               "Text" : "Texte"
               "Untitled" : "Sans titre"
               "Jobs Printed / Aborted" : "Nb de travaux imprimés / abandonnés"
               "Jobs 1-sided / 2-sided" : "Nb de travaux recto / recto verso"
               "Speed" : "Vitesse"
               "Speed (Pages/Min)" : "Vitesse (Pages/Min)"
               "Speed (Sheets/Min)" : "Vitesse (Feuilles/Min)"
               "Speed (Feet/Min)" : "Vitesse (Pieds/Min)"
               "Speed (Meters/Min)" : "Vitesse (Mètres/Min)"
               "Highest Speed" : "Vitesse maximale"
               "Highest Speed (Pages/Min)" : "Vitesse maximale (Pages/Min)"
               "Highest Speed (Sheets/Min)" : "Vitesse maximale (Feuilles/Min)"
               "Highest Speed (Feet/Min)" : "Vitesse maximale (Pieds/Min)"
               "Highest Speed (Meters/Min)" : "Vitesse maximale (Mètres/Min)"
               "Humidity" : "Humidité"
               "Temperature" : "Température"
               "Temperature (Celsius)" : "Température (Celsius)"
               "Temperature (Fahrenheit)" : "Température (Fahrenheit)"
               "Highest Temperature" : "Température maximale"
               "Highest Temperature (Celsius)" : "Température maximale (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Température maximale (Fahrenheit)"
               "Humidity Peaks" : "Pics d'humidité"
               "Speed Peaks" : "Pics de vitesse"
               "Temperature Peaks" : "Pics de température"

               }
     },
  "it":   {
          "tables": {
               "Date" : "Data",
               "Error" : "Errore",
               "Job" : "Processo",
               "Printer" : "Stampante",
               "Shift" : "Turno",
               "State" : "Stato",
               "Clicks" : "Clic"
               },
          "columns": {
               "Date" : {
                    "Data" : "Date",
                    }
               "Error" : {
                    "Durata" : "Duration",
                    "Errore" : "Error",
                    "Codice errore" : "Error Code",
                    "Avvia Timestamp" : "Start Timestamp",
                    }
               "Job" : {
                    "Copie" : "Copies",
                    "Durata" : "Duration",
                    "Numero motore" : "Engine Number",
                    "Impressioni" : "Impressions",
                    "ID processo" : "Job ID",
                    "Nome processo" : "Job Name",
                    "Dimensione processo" : "Job Size",
                    "Stato processo" : "Job State",
                    "Pagine" : "Pages",
                    "Lato stampa" : "Printing Side",
                    "Avvia Timestamp" : "Start Timestamp",
                    "Throughput" : "Throughput",
                    }
               "Printer" : {
                    "ID account" : "Account ID",
                    "Nome account" : "Account Name",
                    "Raccolta dati" : "Data Collector",
                    "Nome stampante" : "Printer Name",
                    "Tipo stampante" : "Printer Type",
                    }
               "Shift" : {
                    "Nome turno" : "Shift Name",
                    }
               "State" : {
                    "Durata" : "Duration",
                    "Numero motore" : "Engine Number",
                    "Stato stampante" : "Printer State",
                    "Avvia Timestamp" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Totale" : "Total",
                    "Bianco e nero" : "Black & White",
                    "Colori" : "Full Color",
                    "Monocolore/Bicolore" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Turni",
               "Printers" : "Stampanti",
               "Data Collectors" : "Raccolte dati",
               "Days" : "Giorni",
               "Date" : "Data"
               },
          "formulas": {
               "Up time" : "Tempo di attività",
               "Down time" : "Tempo di inattività",
               "Idle time" : "Tempo di standby",
               "Daily Average" : "Media giornaliera",
               "Best Daily" : "Giornaliero migliore",
               "Best Weekly" : "Settimanale migliore",
               "Best Monthly" : "Mensile migliore",
               "Jobs Printed" : "Processi stampati",
               "Jobs Aborted" : "Processi interrotti",
               "Printer Impressions" : "Impressioni stampante",
               "Printer Throughput" : "Throughput stampante",
               "Shift Impressions" : "Impressioni turno",
               "Shift Throughput" : "Throughput turno",
               "Throughput (Feet)" : "Throughput (piedi)",
               "Throughput (Meters)" : "Throughput (metri)",
               "Throughput (Sheets)" : "Throughput (fogli)",
               "Throughput (Impressions)" : "Throughput (impressioni)",
               "Total Throughput" : "Throughput totale",
               "Total Impressions" : "Impressioni totali",
               "Total Clicks" : "Clic totali",
               "Black & White Clicks" : "Clic Bianco e nero",
               "Full-Color Clicks" : "Clic Colori",
               "Single/2-Color Clicks" : "Clic Monocolore/Bicolore",
               "Daily Impressions" : "Impressioni giornal.",
               "Impressions" : "Impressioni",
               "Feet" : "Piedi",
               "Meters" : "Metri",
               "Sheets" : "Fogli",
               "Years" : "Anni",
               "Quarters" : "Quadrimestri",
               "Months" : "Mesi",
               "Weeks" : "Settimane",
               "Days" : "Giorni",
               "Hours" : "Ore",
               "Minutes" : "Minuti",
               "Seconds" : "Secondi",
               "Jobs" : "Processi",
               "Clicks" : "Clic",
               "Aborted" : "Interrotto",
               "Printed" : "Stampato"
               },
          "widgets": {
               "Printer Status" : "Stato stampante"
               "Device Status" : "Stato dispositivo"
               "Finisher Status" : "Stato dispositivo di finitura"
               "Daily Utilization" : "Utilizzo giornaliero"
               "Weekly Utilization" : "Utilizzo settimanale"
               "Monthly Utilization" : "Utilizzo mensile"
               "Printer Utilization" : "Utilizzo stampante"
               "Finisher Utilization" : "Utilizzo dispositivo di finitura"
               "Device Utilization" : "Utilizzo dispositivo"
               "Jobs Printed Today" : "Processi stampati oggi"
               "Clicks Today" : "Clic oggi"
               "Daily Impressions" : "Impressioni giornal."
               "Daily Throughput" : "Throughput giornaliero"
               "Daily Clicks" : "Clic giornalieri"
               "Daily Throughput (Feet)" : "Throughput giornal. (piedi)"
               "Daily Throughput (Meters)" : "Throughput giornal. (metri)"
               "Daily Throughput (Sheets)" : "Throughput giornal. (fogli)"
               "Weekly Impressions" : "Impressioni settim."
               "Weekly Throughput" : "Throughput settimanale"
               "Weekly Clicks" : "Clic settimanali"
               "Weekly Throughput (Feet)" : "Throughput settim. (piedi)"
               "Weekly Throughput (Meters)" : "Throughput settim. (metri)"
               "Weekly Throughput (Sheets)" : "Throughput settim. (fogli)"
               "Monthly Impressions" : "Impressioni mens."
               "Monthly Throughput" : "Throughput mensile"
               "Monthly Clicks" : "Clic mensili"
               "Monthly Throughput (Feet)" : "Throughput mens. (piedi)"
               "Monthly Throughput (Meters)" : "Throughput mens. (metri)"
               "Monthly Throughput (Sheets)" : "Throughput mens. (fogli)"
               "Clicks per Printer" : "Clic per stampante"
               "Daily Clicks per Printer" : "Clic giornalieri per stampante"
               "Monthly Clicks per Printer" : "Clic mensili per stampante"
               "Printer Throughput (Impressions)" : "Throughput stampante (impressioni)"
               "Printer Throughput" : "Throughput stampante"
               "Printer Throughput (Feet)" : "Throughput stampante (piedi)"
               "Printer Throughput (Meters)" : "Throughput stampante (metri)"
               "Printer Throughput (Sheets)" : "Throughput stampante (fogli)"
               "Shift Throughput (Impressions)" : "Throughput turno (impressioni)"
               "Shift Throughput" : "Throughput turno"
               "Shift Throughput (Feet)" : "Throughput turno (piedi)"
               "Shift Throughput (Meters)" : "Throughput turno (metri)"
               "Shift Throughput (Sheets)" : "Throughput turno (fogli)"
               "Jobs Printed per Printer" : "Processi stampati per stampante"
               "Jobs Printed per Shift" : "Processi stampati per turno"
               "Total Throughput - Peak Hours" : "Throughput totale - Ore di punta"
               "Total Throughput (Feet) - Peak Hours" : "Throughput totale (piedi) - Ore di punta"
               "Total Throughput (Meters) - Peak Hours" : "Throughput totale (metri) - Ore di punta"
               "Total Throughput (Sheets) - Peak Hours" : "Throughput totale (fogli) - Ore di punta"
               "Total Impressions - Peak Hours" : "Impressioni totali - Ore di punta"
               "Throughput - Best & Worst Calendar Days" : "Throughput - I giorni migliori e peggiori del calendario"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Throughput (piedi) - I giorni migliori e peggiori del calendario"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Throughput (metri) - I giorni migliori e peggiori del calendario"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Throughput (fogli) - I giorni migliori e peggiori del calendario"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Throughput (Impressioni) - I giorni migliori e peggiori del calendario"
               "Text" : "Testo"
               "Untitled" : "Senza titolo"
               "Jobs Printed / Aborted" : "Processi stampati/interrotti"
               "Jobs 1-sided / 2-sided" : "Processi facciata singola/doppia"
               "Speed" : "Velocità"
               "Speed (Pages/Min)" : "Velocità (Pagine/Min)"
               "Speed (Sheets/Min)" : "Velocità (Fogli/Min)"
               "Speed (Feet/Min)" : "Velocità (Piedi/Min)"
               "Speed (Meters/Min)" : "Velocità (Metri/Min)"
               "Highest Speed" : "Velocità massima"
               "Highest Speed (Pages/Min)" : "Velocità massima (Pagine/Min)"
               "Highest Speed (Sheets/Min)" : "Velocità massima (Fogli/Min)"
               "Highest Speed (Feet/Min)" : "Velocità massima (Piedi/Min)"
               "Highest Speed (Meters/Min)" : "Velocità massima (Metri/Min)"
               "Humidity" : "Umidità"
               "Temperature" : "Temperatura"
               "Temperature (Celsius)" : "Temperatura (Celsius)"
               "Temperature (Fahrenheit)" : "Temperatura (Fahrenheit)"
               "Highest Temperature" : "Temperatura massima"
               "Highest Temperature (Celsius)" : "Temperatura massima (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Temperatura massima (Fahrenheit)"
               "Humidity Peaks" : "Picchi di umidità"
               "Speed Peaks" : "Picchi di velocità"
               "Temperature Peaks" : "Picchi di temperatura"

               }
     },
  "ja":   {
          "tables": {
               "Date" : "日付",
               "Error" : "エラー",
               "Job" : "ジョブ",
               "Printer" : "プリンター",
               "Shift" : "シフト",
               "State" : "状態",
               "Clicks" : "クリック数"
               },
          "columns": {
               "Date" : {
                    "日付" : "Date",
                    }
               "Error" : {
                    "所要時間" : "Duration",
                    "エラー" : "Error",
                    "エラーコード" : "Error Code",
                    "開始のタイムスタンプ" : "Start Timestamp",
                    }
               "Job" : {
                    "部数" : "Copies",
                    "所要時間" : "Duration",
                    "エンジン番号" : "Engine Number",
                    "インプレッション" : "Impressions",
                    "ジョブID" : "Job ID",
                    "ジョブ名" : "Job Name",
                    "ジョブサイズ" : "Job Size",
                    "ジョブの状態" : "Job State",
                    "ページ数" : "Pages",
                    "印刷面" : "Printing Side",
                    "開始のタイムスタンプ" : "Start Timestamp",
                    "スループット" : "Throughput",
                    }
               "Printer" : {
                    "アカウントID" : "Account ID",
                    "アカウント名" : "Account Name",
                    "Data Collector" : "Data Collector",
                    "プリンター名" : "Printer Name",
                    "プリンタータイプ" : "Printer Type",
                    }
               "Shift" : {
                    "シフト名" : "Shift Name",
                    }
               "State" : {
                    "所要時間" : "Duration",
                    "エンジン番号" : "Engine Number",
                    "プリンターの状態" : "Printer State",
                    "開始のタイムスタンプ" : "Start Timestamp",
                    }
               "Clicks" : {
                    "合計" : "Total",
                    "白黒" : "Black & White",
                    "フルカラー" : "Full Color",
                    "単色/2色" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "シフト",
               "Printers" : "プリンター",
               "Data Collectors" : "Data Collector",
               "Days" : "日",
               "Date" : "日付"
               },
          "formulas": {
               "Up time" : "稼動時間",
               "Down time" : "停止時間",
               "Idle time" : "アイドル時間",
               "Daily Average" : "日時平均",
               "Best Daily" : "最高日次",
               "Best Weekly" : "最高週次",
               "Best Monthly" : "最高月次",
               "Jobs Printed" : "印刷済みのジョブ",
               "Jobs Aborted" : "中断済みのジョブ",
               "Printer Impressions" : "プリンターインプレッション",
               "Printer Throughput" : "プリンタースループット",
               "Shift Impressions" : "シフトインプレッション",
               "Shift Throughput" : "シフトスループット",
               "Throughput (Feet)" : "スループット (フィート)",
               "Throughput (Meters)" : "スループット (メートル)",
               "Throughput (Sheets)" : "スループット (シート)",
               "Throughput (Impressions)" : "スループット (インプレッション)",
               "Total Throughput" : "総スループット",
               "Total Impressions" : "総インプレッション",
               "Total Clicks" : "総クリック数",
               "Black & White Clicks" : "白黒クリック数",
               "Full-Color Clicks" : "フルカラークリック数",
               "Single/2-Color Clicks" : "単色/2色クリック数",
               "Daily Impressions" : "日次インプレッション",
               "Impressions" : "インプレッション",
               "Feet" : "フィート",
               "Meters" : "メートル",
               "Sheets" : "シート",
               "Years" : "年",
               "Quarters" : "四半期",
               "Months" : "月",
               "Weeks" : "週",
               "Days" : "日",
               "Hours" : "時間",
               "Minutes" : "分",
               "Seconds" : "秒",
               "Jobs" : "ジョブ",
               "Clicks" : "クリック数",
               "Aborted" : "中断済み",
               "Printed" : "印刷済み"
               },
          "widgets": {
               "Printer Status" : "プリンターステータス"
               "Device Status" : "デバイスのステータス"
               "Finisher Status" : "フィニッシャーのステータス"
               "Daily Utilization" : "日次使用率"
               "Weekly Utilization" : "週次使用率"
               "Monthly Utilization" : "月次使用率"
               "Printer Utilization" : "プリンター使用率"
               "Finisher Utilization" : "フィニッシャー使用率"
               "Device Utilization" : "デバイス使用率"
               "Jobs Printed Today" : "本日印刷されたジョブ"
               "Clicks Today" : "本日のクリック数"
               "Daily Impressions" : "日次インプレッション"
               "Daily Throughput" : "日次スループット"
               "Daily Clicks" : "日次クリック数"
               "Daily Throughput (Feet)" : "日次スループット（フィート）"
               "Daily Throughput (Meters)" : "日次スループット（メートル）"
               "Daily Throughput (Sheets)" : "日次スループット（シート）"
               "Weekly Impressions" : "週次インプレッション"
               "Weekly Throughput" : "週次スループット"
               "Weekly Clicks" : "週次クリック数"
               "Weekly Throughput (Feet)" : "週次スループット（フィート）"
               "Weekly Throughput (Meters)" : "週次スループット（メートル）"
               "Weekly Throughput (Sheets)" : "週次スループット（シート）"
               "Monthly Impressions" : "月次インプレッション"
               "Monthly Throughput" : "月次スループット"
               "Monthly Clicks" : "月次クリック数"
               "Monthly Throughput (Feet)" : "月次スループット（フィート）"
               "Monthly Throughput (Meters)" : "月次スループット（メートル）"
               "Monthly Throughput (Sheets)" : "月次スループット（シート）"
               "Clicks per Printer" : "各プリンターのクリック数"
               "Daily Clicks per Printer" : "各プリンターの日次クリック数"
               "Monthly Clicks per Printer" : "各プリンターの月次クリック数"
               "Printer Throughput (Impressions)" : "プリンタースループット（インプレッション）"
               "Printer Throughput" : "プリンタースループット"
               "Printer Throughput (Feet)" : "プリンタースループット（フィート）"
               "Printer Throughput (Meters)" : "プリンタースループット（メートル）"
               "Printer Throughput (Sheets)" : "プリンタースループット（シート）"
               "Shift Throughput (Impressions)" : "シフトスループット（インプレッション）"
               "Shift Throughput" : "シフトスループット"
               "Shift Throughput (Feet)" : "シフトスループット（フィート）"
               "Shift Throughput (Meters)" : "シフトスループット（メートル）"
               "Shift Throughput (Sheets)" : "シフトスループット（シート）"
               "Jobs Printed per Printer" : "各プリンターの印刷済みジョブ"
               "Jobs Printed per Shift" : "各シフトの印刷済みジョブ"
               "Total Throughput - Peak Hours" : "総スループット - ピーク時"
               "Total Throughput (Feet) - Peak Hours" : "総スループット（フィート） - ピーク時"
               "Total Throughput (Meters) - Peak Hours" : "総スループット（メートル） - ピーク時"
               "Total Throughput (Sheets) - Peak Hours" : "総スループット（シート） - ピーク時"
               "Total Impressions - Peak Hours" : "総インプレッション - ピーク時"
               "Throughput - Best & Worst Calendar Days" : "スループット - 最高暦日と最低暦日"
               "Throughput (Feet) - Best & Worst Calendar Days" : "スループット (フィート) - 最高暦日と最低暦日"
               "Throughput (Meters) - Best & Worst Calendar Days" : "スループット (メートル) - 最高暦日と最低暦日"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "スループット (シート) - 最高暦日と最低暦日"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "インプレッション - 最高暦日と最低暦日"
               "Text" : "テキスト"
               "Untitled" : "名称未設定"
               "Jobs Printed / Aborted" : "印刷済み/中断済みのジョブ"
               "Jobs 1-sided / 2-sided" : "ジョブ片面/両面"
               "Speed" : "速度"
               "Speed (Pages/Min)" : "速度 (ページ毎分)"
               "Speed (Sheets/Min)" : "速度 (スキャン毎分)"
               "Speed (Feet/Min)" : "速度 (フィート毎分)"
               "Speed (Meters/Min)" : "速度 (メートル毎分)"
               "Highest Speed" : "最大速度"
               "Highest Speed (Pages/Min)" : "最大速度 (ページ毎分)"
               "Highest Speed (Sheets/Min)" : "最大速度 (スキャン毎分)"
               "Highest Speed (Feet/Min)" : "最大速度 (フィート毎分)"
               "Highest Speed (Meters/Min)" : "最大速度 (メートル毎分)"
               "Humidity" : "湿度"
               "Temperature" : "温度"
               "Temperature (Celsius)" : "温度 (摂氏)"
               "Temperature (Fahrenheit)" : "温度 (華氏)"
               "Highest Temperature" : "最高温度"
               "Highest Temperature (Celsius)" : "最高温度 (摂氏)"
               "Highest Temperature (Fahrenheit)" : "最高温度 (華氏)"
               "Humidity Peaks" : "湿度ピーク"
               "Speed Peaks" : "速度ピーク"
               "Temperature Peaks" : "温度ピーク"

               }
     },
  "nl":   {
          "tables": {
               "Date" : "Datum",
               "Error" : "Fout",
               "Job" : "Taak",
               "Printer" : "Printer",
               "Shift" : "Dienst",
               "State" : "Status",
               "Clicks" : "Klikken"
               },
          "columns": {
               "Date" : {
                    "Datum" : "Date",
                    }
               "Error" : {
                    "Duur" : "Duration",
                    "Fout" : "Error",
                    "Foutcode" : "Error Code",
                    "Start tijdsaanduiding" : "Start Timestamp",
                    }
               "Job" : {
                    "Kopieën" : "Copies",
                    "Duur" : "Duration",
                    "Motornummer" : "Engine Number",
                    "Prints" : "Impressions",
                    "Taak-ID" : "Job ID",
                    "Taaknaam" : "Job Name",
                    "Taakgrootte" : "Job Size",
                    "Taakstatus" : "Job State",
                    "Pagina's" : "Pages",
                    "Afdrukzijde" : "Printing Side",
                    "Start tijdsaanduiding" : "Start Timestamp",
                    "Doorvoer" : "Throughput",
                    }
               "Printer" : {
                    "Account-ID" : "Account ID",
                    "Accountnaam" : "Account Name",
                    "Data Collector" : "Data Collector",
                    "Naam printer" : "Printer Name",
                    "Printertype" : "Printer Type",
                    }
               "Shift" : {
                    "Naam dienst" : "Shift Name",
                    }
               "State" : {
                    "Duur" : "Duration",
                    "Motornummer" : "Engine Number",
                    "Printerstatus" : "Printer State",
                    "Start tijdsaanduiding" : "Start Timestamp",
                    }
               "Clicks" : {
                    "Totaal" : "Total",
                    "Zwart-wit" : "Black & White",
                    "Volledig in kleur" : "Full Color",
                    "Een-/tweekleurig" : "Single/2 Color",
                    }
               },
          "titles": {
               "Shifts" : "Diensten",
               "Printers" : "Printers",
               "Data Collectors" : "Data Collectors",
               "Days" : "Dagen",
               "Date" : "Datum"
               },
          "formulas": {
               "Up time" : "Tijd actief",
               "Down time" : "Uitvaltijd",
               "Idle time" : "Tijd inactief",
               "Daily Average" : "Dagelijks gemiddeld",
               "Best Daily" : "Best dagelijks",
               "Best Weekly" : "Best wekelijks",
               "Best Monthly" : "Best maandelijks",
               "Jobs Printed" : "Afgedrukte taken",
               "Jobs Aborted" : "Afgebroken taken",
               "Printer Impressions" : "Printerprints",
               "Printer Throughput" : "Printerdoorvoer",
               "Shift Impressions" : "Dienstprints",
               "Shift Throughput" : "Dienstdoorvoer",
               "Throughput (Feet)" : "Doorvoer (voet)",
               "Throughput (Meters)" : "Doorvoer (meter)",
               "Throughput (Sheets)" : "Doorvoer (vellen)",
               "Throughput (Impressions)" : "Doorvoer (prints)",
               "Total Throughput" : "Totale doorvoer",
               "Total Impressions" : "Totaal aantal prints",
               "Total Clicks" : "Totaal aantal klikken",
               "Black & White Clicks" : "Klikken zwart-wit",
               "Full-Color Clicks" : "Klikken volledig in kleur",
               "Single/2-Color Clicks" : "Klikken een-/tweekleurig",
               "Daily Impressions" : "Dagelijkse prints",
               "Impressions" : "Prints",
               "Feet" : "Voet",
               "Meters" : "Meter",
               "Sheets" : "Vellen",
               "Years" : "Jaren",
               "Quarters" : "Kwartalen",
               "Months" : "Maanden",
               "Weeks" : "Weken",
               "Days" : "Dagen",
               "Hours" : "Uren",
               "Minutes" : "Minuten",
               "Seconds" : "Seconden",
               "Jobs" : "Taken",
               "Clicks" : "Klikken",
               "Aborted" : "Afgebroken",
               "Printed" : "Afgedrukt"
               },
          "widgets": {
               "Printer Status" : "Printerstatus"
               "Device Status" : "Apparaatstatus"
               "Finisher Status" : "Afwerkingseenheidsstatus"
               "Daily Utilization" : "Dagelijks gebruik"
               "Weekly Utilization" : "Wekelijks gebruik"
               "Monthly Utilization" : "Maandelijks gebruik"
               "Printer Utilization" : "Printergebruik"
               "Finisher Utilization" : "Gebruik afwerkingseenheid"
               "Device Utilization" : "Apparaatgebruik"
               "Jobs Printed Today" : "Vandaag afgedrukte taken"
               "Clicks Today" : "Aantal klikken vandaag"
               "Daily Impressions" : "Dagelijkse prints"
               "Daily Throughput" : "Dagelijkse doorvoer"
               "Daily Clicks" : "Dagelijkse klikken"
               "Daily Throughput (Feet)" : "Dagelijkse doorvoer (voet)"
               "Daily Throughput (Meters)" : "Dagelijkse doorvoer (meter)"
               "Daily Throughput (Sheets)" : "Dagelijkse doorvoer (vellen)"
               "Weekly Impressions" : "Wekelijkse prints"
               "Weekly Throughput" : "Wekelijkse doorvoer"
               "Weekly Clicks" : "Wekelijkse klikken"
               "Weekly Throughput (Feet)" : "Wekelijkse doorvoer (voet)"
               "Weekly Throughput (Meters)" : "Wekelijkse doorvoer (meter)"
               "Weekly Throughput (Sheets)" : "Wekelijkse doorvoer (vellen)"
               "Monthly Impressions" : "Maandelijkse prints"
               "Monthly Throughput" : "Maandelijkse doorvoer"
               "Monthly Clicks" : "Maandelijkse klikken"
               "Monthly Throughput (Feet)" : "Maandelijkse doorvoer (voet)"
               "Monthly Throughput (Meters)" : "Maandelijkse doorvoer (meter)"
               "Monthly Throughput (Sheets)" : "Maandelijkse doorvoer (vellen)"
               "Clicks per Printer" : "Klikken per printer"
               "Daily Clicks per Printer" : "Dagelijkse klikken per printer"
               "Monthly Clicks per Printer" : "Maandelijkse klikken per printer"
               "Printer Throughput (Impressions)" : "Printerdoorvoer (prints)"
               "Printer Throughput" : "Printerdoorvoer"
               "Printer Throughput (Feet)" : "Printerdoorvoer (voet)"
               "Printer Throughput (Meters)" : "Printerdoorvoer (meter)"
               "Printer Throughput (Sheets)" : "Printerdoorvoer (vellen)"
               "Shift Throughput (Impressions)" : "Dienstdoorvoer (prints)"
               "Shift Throughput" : "Dienstdoorvoer"
               "Shift Throughput (Feet)" : "Dienstdoorvoer (voet)"
               "Shift Throughput (Meters)" : "Dienstdoorvoer (meter)"
               "Shift Throughput (Sheets)" : "Dienstdoorvoer (vellen)"
               "Jobs Printed per Printer" : "Afgedrukte taken per printer"
               "Jobs Printed per Shift" : "Afgedrukte taken per dienst"
               "Total Throughput - Peak Hours" : "Totale doorvoer - piektijden"
               "Total Throughput (Feet) - Peak Hours" : "Totale doorvoer (voet) - piektijden"
               "Total Throughput (Meters) - Peak Hours" : "Totale doorvoer (meter) - piektijden"
               "Total Throughput (Sheets) - Peak Hours" : "Totale doorvoer (vellen) - piektijden"
               "Total Impressions - Peak Hours" : "Totaal aantal prints - piektijden"
               "Throughput - Best & Worst Calendar Days" : "Doorvoer - beste en slechtste kalenderdagen"
               "Throughput (Feet) - Best & Worst Calendar Days" : "Doorvoer (voet) - beste en slechtste kalenderdagen"
               "Throughput (Meters) - Best & Worst Calendar Days" : "Doorvoer (meter) - beste en slechtste kalenderdagen"
               "Throughput (Sheets) - Best & Worst Calendar Days" : "Doorvoer (vellen) - beste en slechtste kalenderdagen"
               "Throughput (Impressions) - Best & Worst Calendar Days" : "Doorvoer (prints) - Beste en slechtste kalenderdagen"
               "Text" : "Tekst"
               "Untitled" : "Naamloos"
               "Jobs Printed / Aborted" : "Afgedrukte/afgebroken taken"
               "Jobs 1-sided / 2-sided" : "Taken 1-zijdig/2-zijdig"
               "Speed" : "Snelheid"
               "Speed (Pages/Min)" : "Snelheid (Pagina's/min)"
               "Speed (Sheets/Min)" : "Snelheid (Vellen/min)"
               "Speed (Feet/Min)" : "Snelheid (Voet/min)"
               "Speed (Meters/Min)" : "Snelheid (Meter/min)"
               "Highest Speed" : "Hoogste snelheid"
               "Highest Speed (Pages/Min)" : "Hoogste snelheid (Pagina's/min)"
               "Highest Speed (Sheets/Min)" : "Hoogste snelheid (Vellen/min)"
               "Highest Speed (Feet/Min)" : "Hoogste snelheid (Voet/min)"
               "Highest Speed (Meters/Min)" : "Hoogste snelheid (Meter/min)"
               "Humidity" : "Vochtigheid"
               "Temperature" : "Temperatuur"
               "Temperature (Celsius)" : "Temperatuur (Celsius)"
               "Temperature (Fahrenheit)" : "Temperatuur (Fahrenheit)"
               "Highest Temperature" : "Hoogste temperatuur"
               "Highest Temperature (Celsius)" : "Hoogste temperatuur (Celsius)"
               "Highest Temperature (Fahrenheit)" : "Hoogste temperatuur (Fahrenheit)"
               "Humidity Peaks" : "Vochtigheidspieken"
               "Speed Peaks" : "Snelheidspieken"
               "Temperature Peaks" : "Temperatuurpieken"

               }
     }
}
  /* Translations definition - end */