---
layout: docs
title: Introduction
description: The design system for Alpha.CA.gov is a theme built on top of Bootstrap. Taking a cue from the direction of the still under development version 5 of Bootstrap which drops javascript dependencies like jquery the few components that require javascript used in this system are written to be as lean as possible.
group: getting-started
aliases:
  - "/docs/4.3/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

```This project is still very much under construction and is expected to change drastically before release Q1 2020```

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{{< highlight html >}}
<link rel="stylesheet" href="{{< param "cdn.css" >}}" crossorigin="anonymous">
{{< /highlight >}}


## Starter templates

View the templates section for examples of page templates

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{{< highlight html >}}
<!doctype html>
<html lang="en">
  ...
</html>
{{< /highlight >}}

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{{< highlight html >}}
<meta name="viewport" content="width=device-width, initial-scale=1">
{{< /highlight >}}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{{< highlight css >}}
.selector-for-some-widget {
  box-sizing: content-box;
}
{{< /highlight >}}

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Bootstrap Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Follow [@getbootstrap on Twitter](https://twitter.com/{{< param twitter >}}).
- Read and subscribe to [The Official Bootstrap Blog]({{< param blog >}}).
- Join [the official Slack room]({{< param slack >}}).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/{{< param twitter >}}) for the latest gossip and awesome music videos.
