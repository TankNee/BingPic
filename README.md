<h1 align="center">Bing Daily Picture</h1>

必应每日图片爬虫，使用GitHub Actions每日定期爬取图片，并使用node-images模块压缩成jpg格式，提高访问速度。

提供每日的json数据

访问API

```
https://cdn.jsdelivr.net/gh/TankNee/BingPic/blob/${date}/${date}.${ext}
```

其中date的格式为：年份月份日期

举例：20201029

其中ext的可选项为：png，jpg，json

图片访问举例：https://cdn.jsdelivr.net/gh/TankNee/BingPic/blob/20201029/20201029.png
