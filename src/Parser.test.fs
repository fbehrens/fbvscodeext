module AdventExtension.Tests.Parser

open Fable.Import.Jest  
open Fable.Import.Jest.Matchers

test "simple Jest test should be picked up" <| fun () ->  
    "42" == "42" //"the answer of the Universe"
