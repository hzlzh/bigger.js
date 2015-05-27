bigger.js
=========
v1.0.4

bigger view for bigger mobile screens.

## Usage

```js
<script src="http://hzlzh.github.io/bigger.js/bigger.js" type="text/javascript"></script>
<script>
	// use Class
    Bigger();                       // add style to <body> with 320px real width
    Bigger('xxx');                  // add style to <div class="xxx"> with 320px real width
    Bigger('do-fixed', 400);        // `scale` on <div class="do-fixed"> with 400px real width
    Bigger('un-fixed', 320, true);  // `zoom` on <div class="un-fixed"> with 320 real width

    // use ID
    Bigger(document.getElementById('unFixed'), 400);        // `scale` on <div id="unFixed"> with 400px real width
    Bigger(document.getElementById('doFixed'), 320, true);  // `zoom` to <div id="doFixed"> with 320 real width
</script>
```

#### Use zepto.js

```js
<script src="http://hzlzh.github.io/bigger.js/bigger.js" type="text/javascript"></script>
<script src="http://zeptojs.com/zepto.min.js" type="text/javascript"></script>
<script>
    Bigger($('#unFixed')[0], 400);			// `scale` on <div id="unFixed"> with 400px real width
    Bigger($('#doFixed')[0], 320, true);	// `zoom` on <div id="doFixed">
</script>
```

## Demo

* [demo-1](http://hzlzh.github.io/bigger.js/demo-1.html)  \(`scale` page without `position:fixed` DOM\)
* [demo-2](http://hzlzh.github.io/bigger.js/demo-2.html)  \(`zoom` page with `position:fixed` DOM\)