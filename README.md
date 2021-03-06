# Angular2-WeUI
Angular2-WeUI 是基于Angular2实现的、针对手机端(如微信)Web应用开发的UI框架。

[WeUI](https://weui.io/) 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。

[Angular](https://github.com/angular/angular) is a development platform for building mobile and desktop web applications using Typescript/JavaScript (JS) and other languages.

Angular2-WeUI 是采用Angular2对WeUI重写的UI库，包含了全部WeUI官方的CSS组件，如Picker、DatePicker、ActionSheet、Dialog等，通过Angular2提供的数据绑定(MVVM)、依赖注入(DI)、标签自定义(Directive)等机制，封装后的WeUI组件更加灵活方便，使开发人员可以更加专注于业务的实现，可以极大减少前端开发时间。

## Install

```bash
npm install angular-weui --save
```

如果下载速度较慢，可以尝试加入[淘宝 NPM 镜像](http://npm.taobao.org)，以加快模块下载速度。

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

然后通过cnpm命令来安装：
```bash
cnpm install angular-weui --save
```

## Quickstart

直接下载本工程，并启动运行查看Demo：
```bash
git clone https://github.com/fbchen/angular2-weui.git
cd angular2-weui
cnpm install
```

下载angular-weui后，通过开发工具[VSCode](http://code.visualstudio.com/Download)打开安装目录，点击调试“启动程序”，然后在浏览器中输入 http://localhost:4200/ 直接预览效果。

## Usage

```ts
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { WeUIModule } from 'angular-weui';

import { AppComponent }   from './app.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        WeUIModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

# Live Example
Open Chrome, and visits:
[https://fbchen.github.io/angular2-weui](https://fbchen.github.io/angular2-weui/index.html)

Demo Project:
[https://github.com/fbchen/angular2-weui-demo](https://github.com/fbchen/angular2-weui-demo)


# License

基于 [MIT](./LICENSE) 协议发布，免费开源

# Contributing
Thanks for your interest in contributing! :tada: Read up on our guidelines for [contributing][contributing] and then look through our issues with a help [help wanted](https://github.com/fbchen/angular2-weui/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)
label.

我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/fbchen/angular2-weui/pulls)，或者给我们 [提问](https://github.com/fbchen/angular2-weui/issues)。

##DONATIONS

If you find Angular2-WeUI helpful, please consider making a donation (of cash,
software, or hardware) to support continued work on the project. You can
donate through 支付宝/Alipay or 微信/WeChat by scanning qrcodes as follows:

![image](https://github.com/fbchen/angular2-weui/raw/master/.github/images/alipay.jpg)
![image](https://github.com/fbchen/angular2-weui/raw/master/.github/images/wcpay.jpg)


[contributing]: https://github.com/fbchen/angular2-weui/.github/CONTRIBUTING.md
