
# 🌱 1. C#-da Dəyər (Value) və İstinad (Reference) nə deməkdir?

## Proqram işləyəndə yaddaş iki əsas hissəyə stack, heap bölünür:

### 🧠 Yaddaş növləri
<pre>
Yaddaş növü		- Nə saxlanılır?</br>
Stack			- Kiçik və sabit ölçülü dəyişənlər. (Value type-ların öz məlumatı)</br>
Heap			- Böyük obyektlər və referans tipli obyektlər
</pre>

### 🔵 Value & Reference Type fərqi
<pre>
Value type 		- dəyişən birbaşa öz dəyərini saxlayır.
Reference type 	- dəyişən obyektin özünü saxlamır, onun Heap-dəki ünvanını saxlayır.
</pre>

-------------------------------------------------
# 🟦 2. Value Type-lar (Dəyər tipləri)

<pre>
Bunlara daxildir:
	int, double, float, bool, char
	struct
	enum
	DateTime
</pre>

## Value type necə işləyir?</br>
Dəyər birbaşa stack-də saxlanılır.

### 🎯 Əsas xüsusiyyət:
<pre>
Kopyalandıqda dəyərin surəti çıxarılır.
İki dəyişən bir-birinə təsir etmir.
</pre>

### 📌 Misal:
<pre>
int a = 10;
int b = a;

b = 20;

Console.WriteLine(a); // 10
Console.WriteLine(b); // 20
</pre>

➡️ b dəyişdi, a dəyişmədi. Çünki bunlar ayrı dəyərlərdir.

-------------------------------------------------
🟩 3. Reference Type-lar (İstinad tipləri)
Bunlara daxildir:

class

array (int[])

string (amma davranışı xüsusi izah olunacaq)

interface

delegate

object (bütün tiplərin atası)

Reference type necə işləyir?

Obyekt Heap-də yaradılır.

Dəyişən yalnız Heap-dəki obyektin ünvanını (referansı) saxlayır.

🎯 Əsas xüsusiyyət:

Bir dəyişəni digərinə verəndə ünvan ötürülür, yəni eyni obyektə baxırlar.

📌 Misal: