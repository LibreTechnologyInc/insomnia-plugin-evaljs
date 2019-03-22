# General information

This is a plugin for [Insomnia](https://insomnia.rest/) that allows you to write dynamic variables that reference other environment variables that you've defined.

This is especially useful if you want to conditionally modify things like your API_URL.

An exact use case would be if you have a proxy that forwards in the format of https://myproxyurl.com/?url=https://myrealapiurl.com/v1/action

## Installation

Install the `insomnia-plugin-evaljs` plugin from Preferences > Plugins.

## Usage

Add `EvalJS` to your desired environment variable _(hit Ctrl + space to open tags)_ and put your js code in the `Code snippet` input

## Examples

```
env.OTHER_VARIABLE ? 'i am true':'i am false'
```

```
env.USE_PROXY && env.PROXY_URL ? `${PROXY_URL}${API_URL}`:${API_URL}
```

```
(function() { const iife='hello world'; return iife; })();
```

```
(function() {
    const items = ['one', 'two', 'three'];
    return items.join("");
})();
```