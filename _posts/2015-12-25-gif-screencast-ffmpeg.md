---
layout: post
title:  Buat Gif Screencast dengan FFMPEG
date: 2015-12-25
category: Script
comments: true
---

Jika anda perhatikan sekarang makin banyak tutorial atau dokumentasi yang menyertakan gambar berformat gif untuk memudahkan pembaca dalam mengikuti tutorial atau dokumentasi tersebut. Di sini, saya akan sedikit memberi ilustrasi cara membuatnya dengan ffmpeg.

FFMPEG adalah *video converter* yang sangat *powerful*. Salah satu fitur hebatnya adalah kemampuannya mengambil input dari layar sehingga bisa dijadikan screencast, untuk kemudian di-*convert* ke format gif. Berikut contohnya:

![Imgur](http://i.imgur.com/XBqr32Z.gif)

Gambar di atas dibuat dengan script yang tidak begitu panjang:
<script src="https://gist.github.com/atmorojo/be360ecd77685bf10624.js"></script>

Script di atas membutuhukan xwininfo untuk mengetahui kordinat *window* sasaran, dan gifsicle untuk optimasi gambar gif. Jadi, pastikan xwininfo dan gifsicle sudah terpasang di distribusi yang anda gunakan.

Selamat mencoba!
