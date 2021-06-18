[Anagram or not?](#anagram-or-not)
[Find word between the brackets](#find-word-between-the-brackets)

# Anagram or not

##### How to run
Make sure you already has Node installed in your device. Pull this repository, and just run using node by call this command.
```
node anagram.js
```

#### [EN]
##### Basic logic 
In my logic, there are 2 rules that should we checked to make a group of anagram strings. The first rule is the words should have same length of characters. This "length-checker" will ignore space (if any) and it's very clear if the anagram words should have same numbers of letter. The second rule is check whether the number of letter that appeared is same or not. In this rule, we should make it case insensitive, where that's mean capital and lower case letter will be counted as same letter.

###### For example. 
"AKU" and "KUA", <br/>
1st rule; both words has 3 letters. PASSED to check on 2nd rule,<br/>
2nd rule; bot words has same numbers of letter. There are "A", "K", and "U" that appeared each once, so it PASSED and... <br/>
the conclusion is **"AKU" and "KUA" is anagram**.

#### [ID]
##### Cara penyelesaian
Saya menggunakan 2 aturan utama untuk mengetahui dan dapat membuat kumpulan kata - kata yang bersifat anagram. Aturan pertama, setiap kata harus memiliki jumlah huruf yang sama. Dalam kasus ini, spasi akan diabaikan dan ini merupakan aturan dasar dimana kata anagram seharusnya memiliki jumlah huruf yang sama. Aturan kedua, jumlah kemunculan tiap huruf pada setiap kata harus sama. Dalam aturan ini, huruf kapital dan non-kapital akan dianggap sama, atau _case insensitive_.

###### Contoh. 
"AKU" dan "KUA", <br/>
Aturan pertama; kedua kata memiliki 3 huruf. PASSED dan bisa dilakukan pengecekan aturan kedua,<br/>
Aturan kedua; kedua kata memiliki jumlah kemunculan huruf yang sama, yaitu huruf "A", "K", dan "U" yang masing - masing muncul sebanyak 1 kali...<br/>
maka kata **"AKU" dan "KUA" adalah kata yang anagram**.


# Find word between the brackets

##### How to run
Make sure you already has Node installed in your device. Pull this repository, and just run using node by call this command.
```
node findWord.js
```

#### [EN]
##### Basic logic 
The original function shows that we need to return word/letters between the first open and closed brackets. So, we should look for where is the position/index of the open and the close brackets. If there is no brackets, or may be there is only 1 bracket, then return the error message. 
I just make it easier to read and simplifying it by reducing the if-else syntax and also change the variables name to a more readable and understandable.

#### [ID]
##### Cara penyelesaian
Fungsi tersebut merupakan fungsi untuk mencari kata/huruf yang ada di antara tanda kurung buka dan kurung tutup yang pertama. Untuk itu, perlu diketahui terlebih dahulu posisi dari kurung buka dan kurung tutup. Jika tidak ada tanda kurung, atau terdapat hanyak 1 tanda kurung, maka fungsi akan memberikan pesan error.
Syntax yang diubah adalah mengurangi penggunaan if-else sehingga membuatnya lebih mudah dibaca dan juga mengganti nama variables menjadi lebih mudah agar dapat lebih mudah dibaca dan cepat dipahami.
