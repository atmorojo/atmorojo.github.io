---
title: "Bikin Shortcodes Buat Blog"
date: 2020-02-05T19:43:25+07:00
subtitle: "Kalau lagi bikin posting bilingual, pasti bakal aneh karena markdown
sepertinya belum support perbedaan layout tulisan (ltr & ltr). Nah, di sinilah
salah satu peran fitur shortcode-nya Hugo."
---

Hari ini masih otak-atik blog. Dan kebetulan tulis sebuah penggalan hadits berbahasa Arab di tengah-tengah tulisan artikel berbahasa Indonesia. Walhasil, tulisan Arab yang seharusnya rata kanan mengikuti teks bahasa Indonesia yang rata kiri. Kalau bikin inline HTML tiap nulis kutipan bahasa Arab, bayanginnya aja udah kemeng. :sweat_smile:

FYI, saya di sini pakai Tachyons CSS. Lagi males belajar framework CSS yang
lagi happening jadi pakai ini aja yang mirip-mirip sama dasar-dasar CSS yang
udah saya pelajari. Jadi, ambil gampangnya aja, deh: nyontek contoh components
di web-nya Tachyons.

Letakkan code shortcode di `layouts/shortcodes`. Dalam kasus saya, saya tulis
file berikut ini di `layouts/shortcodes/dalil.html`.

{{< highlight html >}}
<blockquote class="ph0 f2 measure-narrow center amiri">
    <p class="tc lh-copy lh-title-ns">
    {{ .Inner }}
    </p>
</blockquote>
{{< /highlight >}}

Kemudian, saya panggil shortcode tersebut dalam file markdown saya dengan
mengetik:

{{< highlight go >}}
  {{%/* dalil */%}} ضع نصا عربيا هنا {{%/* /dalil */%}}
{{< /highlight >}}

Oh, ternyata ada error! Code yang dihasilkan oleh shortcode saya dihapus sama
`Goldmark` karena dianggap tidak aman, dan digantikan dengan pesan: `<!-- raw
HTML omitted -->`. Tapi, hal ini bisa diatasi dengan mudah. Cukup tambahkan
baris berikut di file config Hugo:

{{< highlight toml >}}
[markup.goldmark.renderer]
unsafe= true
{{< /highlight >}}

Tambahan lagi. Waktu saya bikin artikel ini, saya mau kasih contoh penggunaan
shortcode yang sudah saya tulis sendiri. Tapi Hugo merender code yang saya
tulis di dalam shortcode {{</* highlight */>}} sehingga contoh penggunaannya
malah dirender jadi code HTML. Solusinya adalah menambah garis miring dan
asterisk dalam shortcode seperti ini:
```
{{</*/* shortcode */*/>}}
```

Oke, karena saya ga pinter bikin penutup artikel jadi gini aja, ya.
