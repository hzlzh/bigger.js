bigger.js
=========

bigger page for bigger mobile screens.

## Usage

```js
<script src="http://hzlzh.github.io/bigger.js/bigger.js" type="text/javascript"></script>
<script>
    Bigger();               // add style to <body> with 320px real width
    Bigger('xxx');          // add style to <div class="xxx"> with 320px real width
    Bigger('un-fixed',400);      // add style to <div class="un-fixed"> with 400px real width
    Bigger('bannerFixed',400, true);      // add `zoom` to <div class="bannerFixed"> with 400px real width
</script>
```

## Demo

* [demo-1](http://hzlzh.github.io/bigger.js/demo-1.html)  \(without `position:fixed` DOM\)
* [demo-2](http://hzlzh.github.io/bigger.js/demo-2.html)  \(with `position:fixed` DOM\ using `zoom` to instead.)