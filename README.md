# _Anagram or not?_
#### [EN]
##### Basic logic 
In my logic, there are 2 rules that should we checked to make a group of anagram strings. The first rule is the words should have same length of characters. This "length-checker" will ignore space (if any) and it's very clear if the anagram words should have same numbers of letter. The second rule is check whether the number of letter that appeared is same or not. In this rule, we should make it case insensitive, where that's mean capital and lower case letter will be counted as same letter.

###### For example. 
"AKU" and "KUA", 
1st rule; both words has 3 letters. PASSED to check on 2nd rule,
2nd rule; bot words has same numbers of letter. There are "A", "K", and "U" that appeared each once, so it PASSED and the conclusion is **"AKU" and "KUA" is anagram**.

#### [ID]
##### Cara penyelesaian
Saya menggunakan 2 aturan utama untuk mengetahui dan dapat membuat kumpulan kata - kata yang bersifat anagram. Aturan pertama, setiap kata harus memiliki jumlah huruf yang sama. Dalam kasus ini, spasi akan diabaikan dan ini merupakan aturan dasar dimana kata anagram seharusnya memiliki jumlah huruf yang sama. Aturan kedua, jumlah kemunculan tiap huruf pada setiap kata harus sama. Dalam aturan ini, huruf kapital dan non-kapital akan dianggap sama, atau _case insensitive_.

###### Contoh. 
"AKU" dan "KUA", 
Aturan pertama; kedua kata memiliki 3 huruf. PASSED dan bisa dilakukan pengecekan aturan kedua,
Aturan kedua; kedua kata memiliki jumlah kemunculan huruf yang sama, yaitu huruf "A", "K", dan "U" yang masing - masing muncul sebanyak 1 kali, maka kata **"AKU" dan "KUA" adalah kata yang anagram**.