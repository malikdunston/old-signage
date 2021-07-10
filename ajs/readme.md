# nowplaying web solution - ajs version

## Overview

        This folder is a shell of an angularjs project, with elements from our v0.1.4? solution brought in incrementally to:
        
        -       improve our architectures and standardize them with other resources online for ajs.
        -       take advantage of new technologies:
                -       gulp
                -       npm
                -       api
                -       ES6 Compatability on screens
        -       eliminate redundancies (data fetching, etc) created by above, unnecessary services, etc.
        -       streamline the app's controller which is bloated.
        -       things we won't need anymore:
                -       const $appResolve
                -       $data service

## Journal

	-	Sat, Mar 13:
		-	files are in root now.
		-	navigation good use case for a directive.

        -       Fri, Mar 12:
                -       read this https://scotch.io/tutorials/angularjs-best-practices-directory-structure
                -       new folder structure...
                        -       libraries are in their corresponding langugage's folder in "assets"
                        -       "app" contains the components, routes, and js needed
                        -       anything not "app", "index.html", or various stuff needed in root (gulpfile, package, etc) will live in "assets"
                        -       "files" will be like a placeholder for whenever we dedicate file storage/delivery to its own app or just domain....
                        -       think only index is in the root for now.

## Notes/Bib

        -       Best practices for ajs directory structure
                https://scotch.io/tutorials/angularjs-best-practices-directory-structure

        -       weather[].shortForecast (from api.weather.gov):

	sun
                -       Partly Sunny
                -       Mostly Sunny
                -       Sunny

                -       Partly Clear
                -       Mostly Clear
                -       Clear

                -       Partly Cloudy

                -       Slight Chance Rain Showers then Sunny
                -       Chance Rain Showers
                -       Rain Showers
                -       Showers And Thunderstorms

        -       weather[].shortForecast (from w1.weather.gov):

                -       Mostly Sunny
                -       Sunny

                -       Mostly Clear
                -       Clear

                -       A Few Clouds
                -       Partly Cloudy
                -       Mostly Cloudy

		-	Chace Showers and Thunderstorms
		-	Chace Showers and Thunderstorms Likely
		-	Showers and Thunderstorms Likely