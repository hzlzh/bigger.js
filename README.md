bigger.js
=========

bigger page for bigger mobile screens.

## Usage

```js
<script src="http://hzlzh.github.io/bigger.js/bigger.js" type="text/javascript"></script>
<script>
    Bigger();               // add style to <body> with 320px real width
    Bigger('xxx');          // add style to <div class="xxx"> with 320px real width
    Bigger('do-fixed',400);      // `scale` <div class="do-fixed"> with 400px real width
    Bigger('un-fixed',320, true);      // `zoom` to <div class="un-fixed"> with 320 real width
</script>
```

## Demo

* [demo-1](http://hzlzh.github.io/bigger.js/demo-1.html)  \(`scale` page without `position:fixed` DOM\)
* [demo-2](http://hzlzh.github.io/bigger.js/demo-2.html)  \(`zoom` page with `position:fixed` DOM\)