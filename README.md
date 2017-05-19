### Breakpoint
Create breakpoint to control flow of your content on layout in any resolution

### Resolutions default
```css
$small-breakpoint:  em-calc(640)  !default;
$medium-breakpoint: em-calc(1024) !default;
$large-breakpoint:  em-calc(1440) !default;
$xlarge-breakpoint: em-calc(1920) !default;
```

Feel free to override breakpoint, he is only `!default`.

### Mixins
```css
@include small-up { /* style here */ }
@include small-down { /* style here */ }
@include small-only { /* style here */ }
@include medium-up { /* style here */ }
@include medium-down { /* style here */ }
@include medium-only { /* style here */ }
@include large-up { /* style here */ }
@include large-down { /* style here */ }
@include large-only { /* style here */ }
@include xlarge-up { /* style here */ }
@include xlarge-down { /* style here */ }
@include xlarge-only { /* style here */ }
@include xxlarge-up { /* style here */ }
@include xxlarge-down { /* style here */ }
@include xxlarge-only { /* style here */ }

@include media-between(<start>, <end>) { /* style here */ } // dont pass px just the number: `(1000, 1220)`
```

### Example
Open example's folder and open index.html =)
Edit in `sass` folder the file `demo.scss` and enjoy!

### Compile demo.scss
> yarn start

### Contribution
This repository make party of my studies about responsive design, please create a [Issue](https://github.com/ralfting/breakpoint/issues) or send a pull request with enhancements. Thank you!
