学习笔记

产生式
stylesheet
  : [ CHARSET_SYM STRING ';' ]?
    [S|CDO|CDC]* [ import [ CDO S* | CDC S* ]* ]*
    [ [ ruleset | media | page ] [ CDO S* | CDC S* ]* ]*
  ；
import
  : IMPORT_SYM S*
    [STRING|URI] S* media_list? ';' S*
  ;
media
  : MEDIA_SYM S* media_list '{' S* ruleset* '}' S*
  ;
media_list
  : medium [ COMMA S* medium]*
  ;
medium
  : IDENT S*
  ;
page
  : PAGE_SYM S* pseudo_page?
    '{' S* declaration? [ ';' S* declaration? ]* '}' S*
  ;
pseudo_page
  : ':' IDENT S*
  ;
operator
  : '/' S* | ',' S*
  ;
combinator
  : '+' S*
  | '>' S*
  ;
unary_operator
  : '-' | '+'
  ;
property
  : IDENT S*
  ;
ruleset
  : selector [ ',' S* selector ]*
    '{' S* declaration? [ ';' S* declaration? ]* '}' S*
  ;
selector
  : simple_selector [ combinator selector | S+ [ combinator? selector ]? ]?
  ;
simple_selector
  : element_name [ HASH | class | attrib | pseudo ]*
  | [ HASH | class | attrib | pseudo ]+
  ;
class
  : '.' IDENT
  ;
element_name
  : IDENT | '*'
  ;
attrib
  : '[' S* IDENT S* [ [ '=' | INCLUDES | DASHMATCH ] S*
    [ IDENT | STRING ] S* ]? ']'
  ;
pseudo
  : ':' [ IDENT | FUNCTION S* [IDENT S*]? ')' ]
  ;
declaration
  : property ':' S* expr prio?
  ;
prio
  : IMPORTANT_SYM S*
  ;
expr
  : term [ operator? term ]*
  ;
term
  : unary_operator?
    [ NUMBER S* | PERCENTAGE S* | LENGTH S* | EMS S* | EXS S* | ANGLE S* |
      TIME S* | FREQ S* ]
  | STRING S* | IDENT S* | URI S* | hexcolor | function
  ;
function
  : FUNCTION S* expr ')' S*
  ;
/*
 * There is a constraint on the color that it must
 * have either 3 or 6 hex-digits (i.e., [0-9a-fA-F])
 * after the "#"; e.g., "#000" is OK, but "#abcd" is not.
 */
hexcolor
  : HASH S*
  ;

  CSS总体结构2.1
    @charset
    @import
    rules
        @media
        @page
        rule


    
    CSS     
        at-rules
            @charset    https://www.w3.org/TR/CSS-syntax-3/             编码格式
            @import     https://www.w3.org/TR/CSS-cascade-4/            级联样式
            @media      https://www.w3.org/TR/CSS3-syntax-3/            媒体查询
            @page       https://www.w3.org/TR/CSS-conditional/          分页
            @counter-style  https://www.w3.org/TR/CSS-counter-style-3/  列表前的 ·
            @keyframes      https://www.w3.org/TR/CSS-animations-1/     定义动画
            @fontface       https://www.w3.org/TR/CSS-fonts-3/          定义字体font
            @supports       https://www.w3.org/TR/CSS3-conditional/     检查某些css功能是否存在
            @namespace      https://www.w3.org/TR/css-namespaces-3/     
        
        rule
            Selector     https://www.w3.org/TR/Selectors-3/
                selector_group
                selector
                    >
                    <sp>
                    +
                    ~
                simple_selector
                    *
                    #
                    .
                    :
                    ::
                    :not
            Key
                Prorweties  
                variables    https://www.w3.org/TR/css-variabless/
            Value         https://www.w3.org/TR/css-values-4/
                calc
                ......
                
            