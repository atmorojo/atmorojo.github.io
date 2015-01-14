---
layout: post
title: "Vim: relativenumber Toggle"
tags: tutorial vim noob
---

Orang-orang yang biasa menulis kode tentu saja tidak asing dengan fitur numbering (atau line number) pada sebuah editor. Vim sendiri mempunyai sebuah numbering mode yang cukup unik: relativenumber.
<!--more-->

## relativenumber
Mode numbering sangat berguna saat ingin menghapus/me-yank beberapa baris sekaligus. Jika dalam mode absolute kita harus menghitung sendiri berapa baris yang akan kita hapus, dalam mode relative kita tidak perlu menghitung karena penomoran baris yang relative terhadap posisi kursor. Untuk mengaktifkan penomoran relative, gunakan perintah berikut:
{% highlight vim %}
  :set relativenumber
{% endhighlight %}
Sedangkan untuk kembali pada mode absolut, gunakan perintah berikut:
{% highlight vim %}
  :set norelativenumber
{% endhighlight %}
Berikut perbedaan antara kedua mode tersebut:
![Preview](https://lh5.googleusercontent.com/-r0PYqF7wZjU/Ux9K9EY06tI/AAAAAAAAAm4/0-MmOhl7JFE/w488-h305-no/2014-03-12_12%253A42%253A26+AM.png)

_Quite handy, isn't it?_

Masalahnya tidak semua orang suka dengan penomoran relatif ini. Menurutnya mode ini walau berguna tapi tidak sesuai dengan seleranya. Atau ada juga yang membutuhkan penomoran absolut untuk menentukan perintah akan dijalankan dari baris kesekian sampai baris kesekian. Pada akhirnya dibutuhkan switching antar dua mode. Sedangkan [plugin ini](https://github.com/jeffkreeftmeijer/vim-numbertoggle) sebenarnya bisa memenuhi kebutuhan tersebut. Namun menambah satu plugin untuk kasus seperti ini sepertinya terlalu berlebihan. Tapi mapping dua perintah di atas pada dua tombol juga boros :D

Kemudian beberapa thread dan dokumentasi lain memberi petunjuk dan datanglah inspirasi:
{% highlight vim %}
  :set rnu!
{% endhighlight %}
Tapi akan lebih mudah lagi jika perintah tersebut kita titipkan pada sebuah tombol di keyboard. Perintah ini dapat dipetakan pada tombol F4 dengan menambahkan baris berikut pada .vimrc:
{% highlight vim %}
  nnoremap <silent><F4> :se rnu!<cr>
{% endhighlight %}

Sekian, terima kasih :)
