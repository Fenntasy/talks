class: center, middle

# SPA with Elm

## (lame title)

---
# Who am I?

## Vincent _Fenn_ Billey

## I work at Fewlines

## Frontend Dev by trade

---

# This talk is based on [Odot](https://www.youtube.com/watch?v=grcplpIL60I)

--

### dealing with JSON in Elm
--

### "scale" an Elm App (livecode 😨)

---
class: center, middle

# Let's refresh our minds about Odot and Elm

https://github.com/Fenntasy/odot

---

# What do we got?

```json
{
  "list": [
    {
      "name": "test",
      "id": "C67868E3-2AAC..."
    }
  ]
}
```

---

## Let's make it simpler for now

```json
{
  "name": "test",
  "id": "C67868E3-2AAC..."
}
```

--

## Looks a lot like

```elm
type alias Todo =
    { id : String
    , name : String
    }
```

---

# How to get one field?

```elm
getId : Json.Decode.Decoder String
getId =
  Json.Decode.field "id" Json.Decode.string
```

--

```elm
decodeString
  getId
  "{ \"id\": \"C67868E3-2AAC...\" }"
-- Ok "C67868E3-2AAC..."
```

---
# _one_ field


```elm
decodeString
  getId
  """
  {
    "name": "test",
    "id": "C67868E3-2AAC..."
  }
  """
-- Ok "C67868E3-2AAC..."
```

---
# But what about two field?

--

## `map` to the rescue but...

--

```elm
import String
import Json.Decode exposing (Decoder)

stringLength : Decoder Int
stringLength =
  Json.Decode.map
    String.length
    Json.Decode.string
```

---
class: center, middle

# What we want is a way of transforming two Decoders into&nbsp;one.

---
#### `map2` is there for that!

```elm
getId : Decoder String
getId =
  field "id" Json.Decode.string

getName : Decoder String
getName =
  field "name" Json.Decode.string
```

--

```elm
todoDecoder : Decoder Todo
todoDecoder =
  Json.Decode.map2
    (\id name -> { id = id, name = name})
    getId
    getName
```

---
# But wait!

```elm
(\id name -> { id = id, name = name})
```

--

## There's a shorthand for this function

--

```elm
> Todo
<function> : String -> String -> Todo
```

(defining a type also defines its record constructor)

---
class: middle

```elm
import Json.Decode exposing (Decoder, field)

todoDecoder : Decoder Todo
todoDecoder =
  Json.Decode.map2 Todo
    (field "id" Json.Decode.string)
    (field "name" Json.Decode.string)
```

---
class: middle

```elm
import Json.Decode exposing (Decoder, field)

type alias Todo =
  { id : String
  , done : Bool
  , name : String
  }

todoDecoder : Decoder Todo
todoDecoder =
  Json.Decode.map3 Todo
    (field "id" Json.Decode.string)
    (field "done" Json.Decode.bool)
    (field "name" Json.Decode.string)
```

---
# Too many fields?

--

## Saved by `noredink/elm-decode-pipeline`

--

```elm
import Json.Decode exposing (Decoder)
import Json.Decode.Pipeline exposing (required)

todoDecoder : Decoder Todo
todoDecoder =
  Json.Decode.Pipeline.decode Todo
    |> required "id" Json.Decode.string
    |> required "done" Json.Decode.bool
    |> required "name" Json.Decode.string
```

---
# Remember we simplified things?

--

```json
{
  "list": [
    {
      "name": "test",
      "id": "C67868E3-2AAC..."
    }
  ]
}
```

---
class: middle

```elm
todoListDecoder : Decoder (List Todo)
todoListDecoder =
  field "list"
    (Json.Decode.list todoDecoder)
```

---
class: center, middle

# Questions about JSON?

---
class: center, middle

# ☠️ Livecode ☠️

---
class: center, middle

# Thank you 🤗

## Any questions?
