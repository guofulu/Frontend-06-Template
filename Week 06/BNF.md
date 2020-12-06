


<ParenthesesExpression>::=<MultiplicativeExpression>|<AddtiveExpression>"+"
                      <MultiplicativeExpression>|<AddtiveExpression>|"-"<MultiplicativeExpression>

<MultiplicativeExpression>::=<Number>|<MultiplicativeExpression>|<ParenthesesExpression>"*"
                             <Number>|<MUltiplicativeExpression>|<ParenthesesExpression>"/"
                             <Number>|<MUltiplicativeExpression>|<ParenthesesExpression>


<AddtiveExpression>::=<MultiplicativeExpression>|<AddtiveExpression>|<ParenthesesExpression>"+"
                      <MultiplicativeExpression>|<AddtiveExpression>|<ParenthesesExpression>"-"
                      <MultiplicativeExpression>|<AddtiveExpression>|<ParenthesesExpression>

                      