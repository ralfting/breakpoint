### Breakpoint

Create breakpoint to control flow of your content on layout in any resolution

### Resolutions default

```
$small-breakpoint:  em-calc(640)  !default;
$medium-breakpoint: em-calc(1024) !default;
$large-breakpoint:  em-calc(1440) !default;
$xlarge-breakpoint: em-calc(1920) !default;
```

Feel free to override breakpoint, he is only `!default`.

### Mixins
```
@include small-up { /* style here */ }
@include small-only { /* style here */ }
@include medium-up { /* style here */ }
@include medium-only { /* style here */ }
@include large-up { /* style here */ }
@include large-only { /* style here */ }
@include xlarge-up { /* style here */ }
@include xlarge-only { /* style here */ }
@include xxlarge-up { /* style here */ }
@include xxlarge-only { /* style here */ }
```

### Contribution
This repository make party of my studies about responsive design, please create a [Issue](https://github.com/ralfting/breakpoint/issues) or send a pull request with enhancements. Thanks!
