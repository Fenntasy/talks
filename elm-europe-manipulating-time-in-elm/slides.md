class: cover
background-image: url(images/clock-time-stand-by-38267.jpeg)
background-size: cover

# Manipulating Time in Elm

---

# Who am I?

<img src="images/vbilley.jpg" style="position: absolute; top: 30px; right: 30px; border-radius: 10px;" />

### Vincent Billey

### Developer [@Synbioz](https://twitter.com/synbioz)

![](images/Synbioz_white_nobg.png)

### @Fenntasy on [Twitter](https://twitter.com/Fenntasy) and [Github](https://github.com/Fenntasy)

---
class: cover
background-image: url(images/plank-time.jpg)
background-size: contain
background-position: center

---
class: cover
background-image: url(images/time-is-complex.jpg)
background-size: cover


---
class: cover
background-image: url(images/calendar.jpg)
background-size: cover

# Dates
---

## When is today?

--

```elm

type alias Model =
    { date : Maybe Date.Date }

```

---

## When is today?

```elm

type alias Model =
    { date : Maybe Date.Date }


init =
    ( { date = Nothing }
    , Date.now |> Task.perform SetToday
    )

```

---

## When is today?

```elm

type alias Model =
    { date : Maybe Date.Date }


init =
    ( { date = Nothing }
    , Date.now |> Task.perform SetToday
    )


type Msg
    = SetToday Date.Date

```

---

## When is today?

```elm

type alias Model =
    { date : Maybe Date.Date }


init =
    ( { date = Nothing }
    , Date.now |> Task.perform SetToday
    )


type Msg
    = SetToday Date.Date

update msg model =
    case msg of
        SetToday date ->
            ( { model | date = Just date }, Cmd.none )
```

[See on Ellie](https://ellie-app.com/3nZ2YRLBdfGa1/0)
---
class: center

## rluiten/elm-date-extra

```elm
today =
  Date.Extra.Create.dateFromFields 2017 Date.Jun 9 9 0 0 0
```

--

```elm
usFormatedDate : Date.Date -> String
usFormatedDate =
  let
    config = Date.Extra.Config.Config_en_us.config
  in
    Date.Extra.Format.format config config.format.longDate
```

--

`Friday, June 09, 2017`


[See on Ellie](https://ellie-app.com/3nVNnVDv8m7a1/0)

---

`rluiten/elm-date-extra`
--

### create
--

### compare
--

### calculate durations
--

### translate

--

> Please be warned that there are many ways to manipulate dates that produce basically incorrect results.


---
class: cover
background-image: url(images/clocks.jpg)
background-size: cover

# Timezones

---
class: cover
background-image: url(images/australia.png)
background-size: contain
background-position: center

---
class: cover
background-image: url(images/australia2.png)
background-size: contain
background-position: center

---
class: cover
background-image: url(images/australia3.png)
background-size: contain
background-position: center

---
class: cover
background-image: url(images/australia4.png)
background-size: contain
background-position: center

---
class: cover white

<img
  src="images/world.svg"
  class="zoom-france"
  onClick="javascript: this.classList.toggle('unzoomed');"
/>

---

# Months are a Union Type

~~~elm
type Month
    = Jan
    | Feb
    | Mar
    | Apr
    | May
    | Jun
    | Jul
    | Aug
    | Sep
    | Oct
    | Nov
    | Dec
~~~

---

### `fromString : String -> Result String Date`

--

~~~elm
import Date exposing (Date)


type alias Model =
    { myDate = Date
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg  of
        UserHasEnteredDate dateString ->
            case  Date.fromString dateString of
                Ok date ->
                    ( { model | myDate = date }, Cmd.none )

                Err error ->
                    Debug.crash error
~~~

---

## rluiten/elm-date-extra

--

### Creation

--

~~~elm
import Date exposing (Month(..))
import Date.Extra.Create exposing (dateFromFields)


lilleFPStart =
    dateFromFields 2017 Feb 23 18 45 0 0


lilleFPEnd =
    dateFromFields 2017 Feb 23 23 59 59 0
~~~
---

## rluiten/elm-date-extra


### Comparison

--

~~~elm
import Date exposing (Month(..))
import Date.Extra.Create exposing (dateFromFields)
import Date.Extra.Compare exposing (is, Compare2(..))


lilleFPStart =
    dateFromFields 2017 Feb 23 18 45 0 0


lilleFPEnd =
    dateFromFields 2017 Feb 23 23 59 59 0


isBefore : Bool
isBefore = is Before date1 date2

~~~
---

## rluiten/elm-date-extra


### Translation

--

~~~elm

import Date exposing (Month(..))
import Date.Extra.Create exposing (dateFromFields)


lilleFPStart =
    dateFromFields 2017 Feb 23 18 45 0 0


currentDate : String
currentDate =
    format config "%A %d %B %Y %H:%M" lilleFPStart
    -- Jeudi 23 Février 2017 18:45

~~~

---

## rluiten/elm-date-extra


### Duration

~~~elm

import Date exposing (Month(..))
import Date.Extra.Create exposing (dateFromFields)
import Date.Extra.Duration exposing (diff)


lilleFPStart =
    dateFromFields 2017 Feb 23 18 45 0 0


elmEuropeStart =
    dateFromFields 2017 Jun 8 8 30 0 0


timeToElmEurope : Date.Extra.Duration.DeltaRecord
timeToElmEurope =
    diff lilleFPStart elmEuropeStart
    -- { year = 0, month = -3, day = -12
    -- , hour = -13, minute = -45, second = 0
    -- , millisecond = 0
    -- }


~~~

---

## rluiten/elm-date-extra

> Please be warned that there are many ways to manipulate dates that produce basically incorrect results.

---

## elm-community/elm-time

--

### when you need the big guns

--

### Pure Elm dates and time with Records

--

### Kind of the same tools

--

### No translation though

---

## Creation

~~~elm
import Time.Date exposing (date)

date =
    date 1992 2 28
-- Date { year = 1992, month = 2, day = 28 } : Date
~~~

--

## Manipulation

~~~elm
import Time.Date exposing (date, addMonths)

date =
    date 1992 2 28
        |> addMonths 2
-- Date { year = 1992, month = 4, day = 28 } : Date
~~~

---

## Comparison

~~~elm
import Time.Date exposing (date, compare)

date1 =
    date 1997 5 15

date2 =
    date 2005 7 18


result : Order
result =
    compare date1 date2
-- LT
~~~

---

## DateTime

~~~elm
import Time.DateTime exposing (dateTime)

dateTime zero
-- 0-01-01T00:00:00Z

dateTime { zero | year = 2016 }
-- 2016-01-01T00:00:00Z

dateTime { zero | year = 2016, month = 5, day = 29, hour = 13 }
-- 2016-05-29T13:00:00Z
~~~

---

## Timezone

~~~elm
import Html exposing (text)
import Time.TimeZones exposing (europe_paris)
import Time.ZonedDateTime exposing (zonedDateTime, zero, toISO8601)


main =
    let
        timezone =
            europe_paris ()

        date =
            zonedDateTime timezone
                { zero
                    | year = 2017
                    , month = 2
                    , day = 23
                    , hour = 16
                }
    in
        text <| toISO8601 date
-- 2017-02-23T16:00:00+01:00
~~~

---

# Takeaways

--

## Don't ignore time zones when building apps

--

## Don't trap yourself with built-in Dates

--

## Look at Elm Native code

---
class: cover
background-image: url(images/watch.jpg)

## Questions?
